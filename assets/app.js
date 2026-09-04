/* ============================================================
   Holy Cross Study — application engine
   Content-agnostic: everything it renders comes from window.HC_CONTENT.
   No server, no account, no external API. Progress lives in localStorage.
   ============================================================ */
(function () {
  'use strict';

  // ---------------------------------------------------------
  // Tiny DOM helper
  // ---------------------------------------------------------
  function h(tag, attrs, kids) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'text') node.textContent = v;
        else if (k === 'class') node.className = v;
        else if (k === 'style') node.setAttribute('style', v);
        else if (k.indexOf('on') === 0) node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v === true) node.setAttribute(k, '');
        else node.setAttribute(k, v);
      });
    }
    append(node, kids);
    return node;
  }

  function append(parent, kids) {
    if (kids == null || kids === false) return;
    if (Array.isArray(kids)) {
      kids.forEach(function (k) { append(parent, k); });
    } else if (typeof kids === 'string' || typeof kids === 'number') {
      parent.appendChild(document.createTextNode(String(kids)));
    } else {
      parent.appendChild(kids);
    }
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pct(n, d) { return d ? Math.round((n / d) * 100) : 0; }

  // ---------------------------------------------------------
  // Content index
  // ---------------------------------------------------------
  var course = (window.HC_CONTENT && window.HC_CONTENT.courses[0]) || null;
  if (!course) return;

  var termById = {};
  course.terms.forEach(function (t) { termById[t.id] = t; });
  var questionById = {};
  course.questions.forEach(function (q) { questionById[q.id] = q; });
  var lessonById = {};
  course.lessons.forEach(function (l) { lessonById[l.id] = l; });

  // ---------------------------------------------------------
  // Persistence
  // ---------------------------------------------------------
  var STORE_KEY = 'hc-study.' + course.id + '.v1';
  var THEME_KEY = 'hc-study.theme';

  var blank = {
    knownTermIds: [], reviewTermIds: [],
    questionAttempts: {}, bestQuizScore: {}, lastStudiedLessonId: null
  };

  var progress = load();

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(blank));
      var saved = JSON.parse(raw);
      return {
        knownTermIds: saved.knownTermIds || [],
        reviewTermIds: saved.reviewTermIds || [],
        questionAttempts: saved.questionAttempts || {},
        bestQuizScore: saved.bestQuizScore || {},
        lastStudiedLessonId: saved.lastStudiedLessonId || null
      };
    } catch (e) {
      return JSON.parse(JSON.stringify(blank));
    }
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* private mode */ }
  }

  function without(list, id) { return list.filter(function (x) { return x !== id; }); }
  function withOnce(list, id) { return list.indexOf(id) === -1 ? list.concat([id]) : list; }

  function markTerm(id, state) {
    progress.knownTermIds = without(progress.knownTermIds, id);
    progress.reviewTermIds = without(progress.reviewTermIds, id);
    if (state === 'known') progress.knownTermIds = withOnce(progress.knownTermIds, id);
    if (state === 'review') progress.reviewTermIds = withOnce(progress.reviewTermIds, id);
    save();
  }

  function termState(id) {
    if (progress.knownTermIds.indexOf(id) !== -1) return 'known';
    if (progress.reviewTermIds.indexOf(id) !== -1) return 'review';
    return 'new';
  }

  function recordAttempt(qid, correct) {
    var prev = progress.questionAttempts[qid] || { correct: false, attempts: 0 };
    progress.questionAttempts[qid] = {
      correct: correct || prev.correct === true ? correct : false,
      attempts: prev.attempts + 1
    };
    // A later correct answer clears the miss; a later miss on a mastered item re-flags it.
    progress.questionAttempts[qid].correct = correct;
    save();
  }

  function missedQuestionIds() {
    return course.questions
      .filter(function (q) {
        var a = progress.questionAttempts[q.id];
        return a && a.attempts > 0 && !a.correct;
      })
      .map(function (q) { return q.id; });
  }

  function lessonQuestionIds(lesson) {
    return (lesson.questionIds || []).concat(lesson.mcQuestionIds || []);
  }

  function lessonProgress(lesson) {
    var terms = lesson.termIds;
    var known = terms.filter(function (id) { return termState(id) === 'known'; }).length;
    var qs = lessonQuestionIds(lesson);
    var right = qs.filter(function (id) {
      var a = progress.questionAttempts[id];
      return a && a.correct;
    }).length;
    var termPart = terms.length ? known / terms.length : 0;
    var qPart = qs.length ? right / qs.length : 0;
    return Math.round((termPart * 0.5 + qPart * 0.5) * 100);
  }

  function overallProgress() {
    var total = 0;
    course.lessons.forEach(function (l) { total += lessonProgress(l); });
    return Math.round(total / course.lessons.length);
  }

  // ---------------------------------------------------------
  // Theme
  // ---------------------------------------------------------
  var THEMES = ['auto', 'light', 'dark'];
  var THEME_ICON = { auto: '◐', light: '☀', dark: '☾' };
  var THEME_LABEL = { auto: 'Theme: match device', light: 'Theme: light', dark: 'Theme: dark' };

  function currentTheme() {
    var t = null;
    try { t = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
    return THEMES.indexOf(t) === -1 ? 'auto' : t;
  }

  function applyTheme() {
    var t = currentTheme();
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var dark = t === 'dark' || (t === 'auto' &&
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      meta.setAttribute('content', dark ? '#061423' : '#e9eef5');
    }
  }

  function cycleTheme() {
    var next = THEMES[(THEMES.indexOf(currentTheme()) + 1) % THEMES.length];
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    applyTheme();
    syncThemeButton();
    toast(THEME_LABEL[next]);
  }

  // ---------------------------------------------------------
  // Grading
  // ---------------------------------------------------------
  function normalize(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/[‘’]/g, "'")
      .replace(/[^a-z0-9.\/\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function gradeShortAnswer(question, response) {
    var text = normalize(response);
    if (!text) return false;
    return (question.keywords || []).every(function (group) {
      return group.some(function (word) { return text.indexOf(normalize(word)) !== -1; });
    });
  }

  function gradeCalculation(question, response) {
    var cleaned = String(response).replace(/,/g, '').replace(/[^0-9eE.+-]/g, '');
    if (cleaned === '') return false;
    var n = parseFloat(cleaned);
    if (isNaN(n)) return false;
    var tol = question.tolerance || 0;
    return Math.abs(n - question.value) <= tol + 1e-9;
  }

  function correctAnswerText(question) {
    if (question.format === 'ordering') return question.answer.join(' → ');
    return String(question.answer);
  }

  // ---------------------------------------------------------
  // Vocabulary check questions (generated from the term table —
  // same content, presented as recall practice; nothing invented)
  // ---------------------------------------------------------
  function buildVocabQuestions(terms, count) {
    var pool = terms.filter(function (t) { return t.definition; });
    if (pool.length < 4) return [];
    return shuffle(pool).slice(0, count).map(function (t) {
      var others = shuffle(pool.filter(function (o) { return o.id !== t.id; })).slice(0, 3);
      return {
        id: 'vocab:' + t.id,
        generated: true,
        lessonId: t.lessonId,
        format: 'multiple-choice',
        prompt: t.definition,
        promptLead: 'Which term matches this definition?',
        choices: shuffle(others.concat([t]).map(function (o) { return o.term; })),
        answer: t.term,
        explanation: t.term + ' — ' + t.definition
      };
    });
  }

  // ---------------------------------------------------------
  // App state + routing
  // ---------------------------------------------------------
  var view = { name: 'home' };
  var session = null; // active quiz
  var deck = null;    // active flashcard deck

  var root = document.getElementById('view');
  var actionbar = document.getElementById('actionbar');
  var actionInner = document.getElementById('actionbar-inner');
  var titleEl = document.getElementById('topbar-title');
  var subEl = document.getElementById('topbar-sub');
  var themeBtn = document.getElementById('theme-btn');

  function go(next, replace) {
    view = next;
    var hash = '#' + encodeHash(next);
    if (replace) history.replaceState(null, '', hash);
    else if (location.hash !== hash) history.pushState(null, '', hash);
    render();
    window.scrollTo(0, 0);
  }

  function encodeHash(v) {
    switch (v.name) {
      case 'lesson': return '/lesson/' + v.lessonId + '/' + (v.tab || 'overview');
      case 'flash': return '/flashcards/' + (v.scope || 'all');
      case 'quiz': return '/quiz/' + (v.scope || 'mixed');
      default: return '/';
    }
  }

  function readHash() {
    var parts = (location.hash || '#/').replace(/^#\/?/, '').split('/').filter(Boolean);
    if (parts[0] === 'lesson' && lessonById[parts[1]]) {
      return { name: 'lesson', lessonId: parts[1], tab: parts[2] || 'overview' };
    }
    if (parts[0] === 'flashcards') return { name: 'flash', scope: parts[1] || 'all' };
    if (parts[0] === 'quiz') return { name: 'quiz', scope: parts[1] || 'mixed' };
    return { name: 'home' };
  }

  window.addEventListener('popstate', function () {
    var next = readHash();
    // Re-entering a quiz or deck view from history starts it fresh.
    if (next.name === 'quiz' && (!session || session.scope !== next.scope || session.finished)) startQuiz(next.scope, true);
    else if (next.name === 'flash' && (!deck || deck.scope !== next.scope)) startDeck(next.scope, true);
    else { view = next; render(); }
  });

  // ---------------------------------------------------------
  // Chrome (top bar + action bar + toast)
  // ---------------------------------------------------------
  function setChrome(title, sub) {
    titleEl.textContent = title;
    subEl.textContent = sub;
  }

  function setActions(buttons) {
    clear(actionInner);
    if (!buttons || !buttons.length) { actionbar.hidden = true; return; }
    actionbar.hidden = false;
    buttons.forEach(function (b) { actionInner.appendChild(b); });
  }

  var toastTimer = null;
  function toast(message) {
    var el = document.getElementById('toast');
    el.textContent = message;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 1800);
  }

  function syncThemeButton() {
    var t = currentTheme();
    themeBtn.textContent = THEME_ICON[t];
    themeBtn.setAttribute('aria-label', THEME_LABEL[t] + ' (tap to change)');
    themeBtn.setAttribute('title', THEME_LABEL[t]);
  }

  function confirmSheet(title, body, confirmLabel, onConfirm) {
    var backdrop = document.getElementById('backdrop');
    var sheet = document.getElementById('sheet');
    clear(sheet);
    var cancel = h('button', { class: 'btn btn--ghost', text: 'Cancel', onclick: close });
    var ok = h('button', {
      class: 'btn btn--danger', text: confirmLabel,
      onclick: function () { close(); onConfirm(); }
    });
    append(sheet, [
      h('h2', { class: 'sheet__title', text: title, id: 'sheet-title' }),
      h('p', { class: 'sheet__body', text: body }),
      h('div', { class: 'btn-row' }, [cancel, ok])
    ]);
    backdrop.hidden = false;
    ok.focus();

    function close() {
      backdrop.hidden = true;
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
    backdrop.onclick = function (e) { if (e.target === backdrop) close(); };
  }

  // ---------------------------------------------------------
  // Render dispatch
  // ---------------------------------------------------------
  function render() {
    clear(root);
    setActions(null);
    if (view.name === 'lesson') renderLesson();
    else if (view.name === 'flash') renderDeck();
    else if (view.name === 'quiz') renderQuiz();
    else renderHome();
  }

  // ---------------------------------------------------------
  // Home
  // ---------------------------------------------------------
  function renderHome() {
    setChrome(course.subject, course.year);

    var known = progress.knownTermIds.length;
    var missed = missedQuestionIds().length;
    var overall = overallProgress();

    var hero = h('section', { class: 'hero' }, [
      h('div', { class: 'hero__year', text: course.year }),
      h('h1', { class: 'hero__title', text: course.subject }),
      h('p', { class: 'hero__tag', text: course.tagline }),
      h('div', { class: 'hero__stats' }, [
        stat(overall + '%', 'Overall'),
        stat(known + '/' + course.terms.length, 'Terms known'),
        stat(String(missed), 'To review')
      ]),
      h('div', { class: 'bar bar--hero', style: 'margin-top:14px', role: 'img',
        'aria-label': 'Overall progress ' + overall + ' percent' },
        h('div', { class: 'bar__fill', style: 'width:' + overall + '%' }))
    ]);

    var lessonCards = course.lessons.map(function (lesson) {
      var p = lessonProgress(lesson);
      return h('button', {
        class: 'lesson-card', type: 'button',
        onclick: function () { openLesson(lesson.id, 'overview'); }
      }, [
        h('div', { class: 'lesson-card__top' }, [
          h('div', { class: 'lesson-card__num', text: String(lesson.number) }),
          h('div', { style: 'flex:1;min-width:0' }, [
            h('div', { class: 'lesson-card__title', text: lesson.title }),
            h('p', { class: 'lesson-card__focus', text: lesson.focusQuestion })
          ]),
          h('span', { class: 'lesson-card__chev', 'aria-hidden': 'true', text: '›' })
        ]),
        h('div', { class: 'lesson-card__meta' }, [
          h('span', { text: lesson.termIds.length + ' terms' }),
          h('div', { class: 'bar' }, h('div', { class: 'bar__fill', style: 'width:' + p + '%' })),
          h('span', { text: p + '%' })
        ])
      ]);
    });

    append(root, [
      hero,
      h('h2', { class: 'section-label', text: 'Lessons' }),
      h('div', {}, lessonCards),
      h('h2', { class: 'section-label', text: 'Study everything' }),
      h('div', { class: 'card' }, [
        h('p', { style: 'font-size:14px;color:var(--text-dim);margin:0 0 12px',
          text: topicMcQuestions().length + ' multiple-choice questions covering every highlighted term across Lessons 1–3.' }),
        h('button', {
          class: 'btn btn--gold btn--block', type: 'button', text: 'Multiple choice quiz',
          onclick: function () { startQuiz('mc'); }
        }),
        h('div', { class: 'btn-row', style: 'margin:10px 0' }, [
          h('button', { class: 'btn btn--primary', type: 'button', text: 'All flashcards',
            onclick: function () { startDeck('all'); } }),
          h('button', { class: 'btn btn--subtle', type: 'button', text: 'Mixed formats',
            onclick: function () { startQuiz('mixed'); } })
        ]),
        h('button', {
          class: 'btn btn--subtle btn--block', type: 'button',
          text: missed ? 'Review ' + missed + ' missed concept' + (missed === 1 ? '' : 's') : 'Nothing missed yet',
          disabled: missed === 0,
          onclick: function () { startQuiz('missed'); }
        }),
        progress.reviewTermIds.length ? h('button', {
          class: 'btn btn--subtle btn--block', style: 'margin-top:10px', type: 'button',
          text: 'Review ' + progress.reviewTermIds.length + ' flagged term' +
            (progress.reviewTermIds.length === 1 ? '' : 's'),
          onclick: function () { startDeck('review'); }
        }) : null
      ]),
      h('h2', { class: 'section-label', text: 'Progress' }),
      h('div', { class: 'card' }, [
        h('p', { style: 'font-size:14px;color:var(--text-dim)',
          text: 'Flashcard confidence, quiz scores, and missed concepts are saved on this device only.' }),
        h('button', {
          class: 'btn btn--danger btn--block', type: 'button', text: 'Reset all progress',
          onclick: function () {
            confirmSheet('Reset all progress?',
              'This clears every known term, flagged term, quiz score, and missed concept for ' +
              course.subject + '. It cannot be undone.',
              'Reset everything', function () {
                progress = JSON.parse(JSON.stringify(blank));
                save();
                render();
                toast('Progress reset');
              });
          }
        })
      ]),
      h('p', { class: 'footnote' }, [
        course.source,
        h('br'),
        h('a', { href: course.readerUrl || '#', target: '_blank', rel: 'noopener',
          text: course.readerUrl ? 'Open the eBook reader' : '' })
      ])
    ]);
  }

  function stat(num, label) {
    return h('div', { class: 'stat' }, [
      h('div', { class: 'stat__num', text: num }),
      h('div', { class: 'stat__label', text: label })
    ]);
  }

  function openLesson(lessonId, tab) {
    progress.lastStudiedLessonId = lessonId;
    save();
    go({ name: 'lesson', lessonId: lessonId, tab: tab });
  }

  // ---------------------------------------------------------
  // Lesson
  // ---------------------------------------------------------
  var TABS = [
    { id: 'overview', label: 'Overview' },
    { id: 'vocab', label: 'Vocabulary' },
    { id: 'practice', label: 'Practice' },
    { id: 'review', label: 'Review' }
  ];

  function renderLesson() {
    var lesson = lessonById[view.lessonId];
    if (!lesson) { go({ name: 'home' }, true); return; }
    setChrome('Lesson ' + lesson.number, course.subject);

    var back = h('button', {
      class: 'back-btn', type: 'button', onclick: function () { go({ name: 'home' }); }
    }, ['‹ ', 'All lessons']);

    var tabBar = h('div', { class: 'tabs', role: 'tablist', 'aria-label': 'Lesson sections' },
      TABS.map(function (t) {
        return h('button', {
          class: 'tab', type: 'button', role: 'tab',
          id: 'tab-' + t.id,
          'aria-selected': view.tab === t.id ? 'true' : 'false',
          'aria-controls': 'panel',
          text: t.label,
          onclick: function () { go({ name: 'lesson', lessonId: lesson.id, tab: t.id }, true); }
        });
      }));

    var panel = h('div', {
      id: 'panel', role: 'tabpanel',
      'aria-labelledby': 'tab-' + view.tab, tabindex: '-1'
    });

    if (view.tab === 'vocab') renderVocabPanel(panel, lesson);
    else if (view.tab === 'practice') renderPracticePanel(panel, lesson);
    else if (view.tab === 'review') renderReviewPanel(panel, lesson);
    else renderOverviewPanel(panel, lesson);

    append(root, [back, tabBar, panel]);
  }

  function renderOverviewPanel(panel, lesson) {
    var p = lessonProgress(lesson);
    append(panel, [
      h('div', { class: 'card' }, [
        h('h1', { style: 'font-size:22px;font-weight:800;margin-bottom:12px',
          text: 'Lesson ' + lesson.number + ': ' + lesson.title }),
        h('div', { class: 'focus-q' }, [
          h('div', { class: 'focus-q__label', text: 'Focus question' }),
          h('p', { class: 'focus-q__text', text: lesson.focusQuestion })
        ]),
        h('div', { class: 'bar', role: 'img', 'aria-label': 'Lesson progress ' + p + ' percent' },
          h('div', { class: 'bar__fill', style: 'width:' + p + '%' })),
        h('div', { style: 'font-size:12px;color:var(--text-faint);font-weight:650;margin-top:6px',
          text: p + '% complete' })
      ]),
      h('div', { class: 'card' }, [
        h('h2', { class: 'section-label', style: 'margin-top:0', text: 'Big idea' }),
        h('p', { style: 'font-size:15.5px;margin:0;color:var(--text-dim)', text: lesson.bigIdea })
      ]),
      h('div', { class: 'card' }, [
        h('h2', { class: 'section-label', style: 'margin-top:0', text: 'Key ideas' }),
        h('ul', { class: 'key-list' }, lesson.keyIdeas.map(function (k) {
          return h('li', { text: k });
        }))
      ]),
      lesson.steps && lesson.steps.length ? h('div', { class: 'card' }, [
        h('h2', { class: 'section-label', style: 'margin-top:0', text: 'Investigation sequence' }),
        h('ol', { class: 'step-list' }, lesson.steps.map(function (s) { return h('li', { text: s }); }))
      ]) : null,
      lesson.formulas && lesson.formulas.length ? h('div', { class: 'card' }, [
        h('h2', { class: 'section-label', style: 'margin-top:0', text: 'Formulas' }),
        h('div', {}, lesson.formulas.map(function (f) {
          return h('div', { class: 'formula' }, [
            h('span', { class: 'formula__label', text: f.label }),
            h('span', { class: 'formula__expr', text: f.expr })
          ]);
        }))
      ]) : null,
      (lesson.tables || []).map(function (t) {
        return h('div', { class: 'card' }, [
          h('div', { class: 'table-wrap' },
            h('table', {}, [
              h('caption', { text: t.caption }),
              h('thead', {}, h('tr', {}, t.headers.map(function (head) {
                return h('th', { scope: 'col', text: head });
              }))),
              h('tbody', {}, t.rows.map(function (row) {
                return h('tr', {}, row.map(function (cell, i) {
                  return i === 0 ? h('th', { scope: 'row', text: cell }) : h('td', { text: cell });
                }));
              }))
            ]))
        ]);
      })
    ]);

    setActions([
      h('button', { class: 'btn btn--ghost', type: 'button', text: 'Flashcards',
        onclick: function () { startDeck(lesson.id); } }),
      h('button', { class: 'btn btn--primary', type: 'button', text: 'Practice quiz',
        onclick: function () { startQuiz('mc:' + lesson.id); } })
    ]);
  }

  function renderVocabPanel(panel, lesson) {
    var terms = lesson.termIds.map(function (id) { return termById[id]; });
    var known = terms.filter(function (t) { return termState(t.id) === 'known'; }).length;

    var groups = {};
    terms.forEach(function (t) {
      var key = t.category || 'Terms';
      (groups[key] = groups[key] || []).push(t);
    });

    append(panel, [
      h('div', { class: 'card' }, [
        h('div', { style: 'display:flex;justify-content:space-between;align-items:center;gap:12px' }, [
          h('div', {}, [
            h('div', { style: 'font-weight:700;font-size:16px', text: terms.length + ' terms' }),
            h('div', { style: 'font-size:13px;color:var(--text-faint)',
              text: known + ' marked as known' })
          ]),
          h('button', { class: 'btn btn--primary', type: 'button', text: 'Study',
            onclick: function () { startDeck(lesson.id); } })
        ])
      ]),
      Object.keys(groups).map(function (key) {
        return h('div', { class: 'card' }, [
          h('h2', { class: 'section-label', style: 'margin-top:0', text: key }),
          h('div', {}, groups[key].map(function (t) {
            var state = termState(t.id);
            return h('div', { class: 'term-row' }, [
              h('span', {
                class: 'dot' + (state === 'known' ? ' dot--known' : state === 'review' ? ' dot--review' : ''),
                'aria-hidden': 'true'
              }),
              h('div', { class: 'term-row__body' }, [
                h('div', { class: 'term-row__term' }, [
                  t.term,
                  h('span', { class: 'sr-only',
                    text: state === 'known' ? ' (known)' : state === 'review' ? ' (flagged for review)' : '' })
                ]),
                h('p', { class: 'term-row__def', text: t.definition })
              ])
            ]);
          }))
        ]);
      })
    ]);
  }

  function renderPracticePanel(panel, lesson) {
    var qs = lesson.questionIds.map(function (id) { return questionById[id]; });
    var mcQs = (lesson.mcQuestionIds || []).map(function (id) { return questionById[id]; });
    var answered = qs.filter(function (q) { return progress.questionAttempts[q.id]; }).length;
    var right = qs.filter(function (q) {
      var a = progress.questionAttempts[q.id];
      return a && a.correct;
    }).length;
    var mcAnswered = mcQs.filter(function (q) { return progress.questionAttempts[q.id]; }).length;
    var mcRight = mcQs.filter(function (q) {
      var a = progress.questionAttempts[q.id];
      return a && a.correct;
    }).length;
    var best = progress.bestQuizScore[lesson.id];
    var mcBest = progress.bestQuizScore['mc:' + lesson.id];

    append(panel, [
      h('div', { class: 'card' }, [
        h('h2', { style: 'font-size:17px;font-weight:800;margin-bottom:4px', text: 'Multiple choice quiz' }),
        h('p', { style: 'font-size:14px;color:var(--text-dim)',
          text: mcQs.length + ' questions covering every highlighted term in this lesson.' }),
        h('div', { style: 'font-size:13px;color:var(--text-faint);font-weight:650;margin-bottom:12px',
          text: mcRight + ' of ' + mcQs.length + ' currently correct · ' + mcAnswered + ' attempted' +
            (mcBest != null ? ' · best score ' + mcBest + '%' : '') }),
        h('button', { class: 'btn btn--gold btn--block', type: 'button',
          text: mcAnswered ? 'Retake multiple choice quiz' : 'Start multiple choice quiz',
          onclick: function () { startQuiz('mc:' + lesson.id); } })
      ]),
      h('div', { class: 'card' }, [
        h('h2', { style: 'font-size:17px;font-weight:800;margin-bottom:4px', text: 'Lesson quiz' }),
        h('p', { style: 'font-size:14px;color:var(--text-dim)',
          text: qs.length + ' mixed-format questions from the lesson question bank. Feedback appears after each answer.' }),
        h('div', { style: 'font-size:13px;color:var(--text-faint);font-weight:650;margin-bottom:12px',
          text: right + ' of ' + qs.length + ' currently correct · ' + answered + ' attempted' +
            (best != null ? ' · best score ' + best + '%' : '') }),
        h('button', { class: 'btn btn--primary btn--block', type: 'button',
          text: answered ? 'Retake lesson quiz' : 'Start lesson quiz',
          onclick: function () { startQuiz(lesson.id); } })
      ]),
      h('div', { class: 'card' }, [
        h('h2', { style: 'font-size:17px;font-weight:800;margin-bottom:4px', text: 'Vocabulary check' }),
        h('p', { style: 'font-size:14px;color:var(--text-dim)',
          text: 'Ten definitions from this lesson, one term to pick each time. Rebuilt fresh every run.' }),
        h('button', { class: 'btn btn--subtle btn--block', type: 'button', text: 'Start vocabulary check',
          onclick: function () { startQuiz('vocab:' + lesson.id); } })
      ]),
      h('div', { class: 'card' }, [
        h('h2', { style: 'font-size:17px;font-weight:800;margin-bottom:4px', text: 'Question formats' }),
        h('ul', { class: 'key-list', style: 'margin-top:8px' }, uniqueFormats(qs).map(function (f) {
          return h('li', { text: FORMAT_LABEL[f] || f });
        }))
      ])
    ]);
  }

  function uniqueFormats(qs) {
    var seen = [];
    qs.forEach(function (q) { if (seen.indexOf(q.format) === -1) seen.push(q.format); });
    return seen;
  }

  function renderReviewPanel(panel, lesson) {
    var missedIds = missedQuestionIds().filter(function (id) {
      return questionById[id] && questionById[id].lessonId === lesson.id;
    });
    var flagged = lesson.termIds.filter(function (id) { return termState(id) === 'review'; });

    if (!missedIds.length && !flagged.length) {
      append(panel, h('div', { class: 'card' },
        h('div', { class: 'empty' }, [
          h('div', { class: 'empty__icon', 'aria-hidden': 'true', text: '✓' }),
          h('p', { style: 'margin:0',
            text: 'Nothing flagged for this lesson yet. Missed questions and terms you mark "Review again" collect here.' })
        ])));
      return;
    }

    append(panel, [
      flagged.length ? h('div', { class: 'card' }, [
        h('h2', { class: 'section-label', style: 'margin-top:0',
          text: flagged.length + ' term' + (flagged.length === 1 ? '' : 's') + ' to review' }),
        h('div', {}, flagged.map(function (id) {
          var t = termById[id];
          return h('div', { class: 'term-row' }, [
            h('span', { class: 'dot dot--review', 'aria-hidden': 'true' }),
            h('div', { class: 'term-row__body' }, [
              h('div', { class: 'term-row__term', text: t.term }),
              h('p', { class: 'term-row__def', text: t.definition })
            ])
          ]);
        })),
        h('button', { class: 'btn btn--gold btn--block', style: 'margin-top:12px', type: 'button',
          text: 'Study these terms', onclick: function () { startDeck('review:' + lesson.id); } })
      ]) : null,
      missedIds.length ? h('div', { class: 'card' }, [
        h('h2', { class: 'section-label', style: 'margin-top:0',
          text: missedIds.length + ' missed concept' + (missedIds.length === 1 ? '' : 's') }),
        h('div', {}, missedIds.map(function (id) {
          var q = questionById[id];
          return h('div', { class: 'term-row' }, [
            h('span', { class: 'dot dot--review', 'aria-hidden': 'true' }),
            h('div', { class: 'term-row__body' }, [
              h('div', { class: 'term-row__term', text: q.prompt }),
              h('p', { class: 'term-row__def', text: 'Answer: ' + correctAnswerText(q) }),
              h('p', { class: 'term-row__def', text: q.explanation })
            ])
          ]);
        })),
        h('button', { class: 'btn btn--primary btn--block', style: 'margin-top:12px', type: 'button',
          text: 'Retry these questions', onclick: function () { startQuiz('missed:' + lesson.id); } })
      ]) : null
    ]);
  }

  // ---------------------------------------------------------
  // Flashcards
  // ---------------------------------------------------------
  function deckTerms(scope) {
    if (scope === 'all') return course.terms.slice();
    if (scope === 'review') {
      return progress.reviewTermIds.map(function (id) { return termById[id]; }).filter(Boolean);
    }
    if (scope.indexOf('review:') === 0) {
      var lid = scope.slice(7);
      return progress.reviewTermIds.map(function (id) { return termById[id]; })
        .filter(function (t) { return t && t.lessonId === lid; });
    }
    return course.terms.filter(function (t) { return t.lessonId === scope; });
  }

  function deckTitle(scope) {
    if (scope === 'all') return 'All terms';
    if (scope === 'review') return 'Flagged terms';
    if (scope.indexOf('review:') === 0) {
      return 'Lesson ' + lessonById[scope.slice(7)].number + ' · flagged';
    }
    return 'Lesson ' + lessonById[scope].number + ' terms';
  }

  function startDeck(scope, fromHistory) {
    var terms = deckTerms(scope);
    if (!terms.length) { toast('No cards in that set'); return; }
    deck = { scope: scope, cards: terms, index: 0, flipped: false, shuffled: false };
    if (fromHistory) { view = { name: 'flash', scope: scope }; render(); }
    else go({ name: 'flash', scope: scope });
  }

  function renderDeck() {
    if (!deck || deck.scope !== view.scope) { startDeck(view.scope, true); return; }
    if (!deck.cards.length) { go({ name: 'home' }, true); return; }
    clear(root);

    setChrome(deckTitle(deck.scope), 'Flashcards');
    var card = deck.cards[deck.index];
    var state = termState(card.id);

    var back = h('button', {
      class: 'back-btn', type: 'button', onclick: function () { history.back(); }
    }, ['‹ ', 'Back']);

    var known = deck.cards.filter(function (c) { return termState(c.id) === 'known'; }).length;

    var meta = h('div', { class: 'flash-meta' }, [
      h('span', { text: (deck.index + 1) + ' of ' + deck.cards.length }),
      h('span', { text: known + ' known' })
    ]);

    var bar = h('div', { class: 'bar', style: 'margin-bottom:16px' },
      h('div', { class: 'bar__fill', style: 'width:' + pct(deck.index + 1, deck.cards.length) + '%' }));

    var flash = h('button', {
      class: 'flash-card' + (deck.flipped ? ' is-flipped' : ''),
      type: 'button',
      'aria-pressed': deck.flipped ? 'true' : 'false',
      'aria-label': deck.flipped ? 'Definition shown. Activate to see the term.'
        : 'Term shown. Activate to reveal the definition.',
      onclick: function () { deck.flipped = !deck.flipped; renderDeck(); }
    }, [
      h('span', { class: 'flash-face', 'aria-hidden': deck.flipped ? 'true' : 'false' }, [
        h('span', { class: 'flash-kicker',
          text: (card.category || 'Term') + (state === 'known' ? ' · known' : state === 'review' ? ' · review' : '') }),
        h('span', { class: 'flash-term', text: card.term }),
        h('span', { class: 'flash-hint', text: 'Tap, or press Space, to flip' })
      ]),
      h('span', { class: 'flash-face flash-face--back', 'aria-hidden': deck.flipped ? 'false' : 'true' }, [
        h('span', { class: 'flash-kicker', text: 'Definition' }),
        h('span', { class: 'flash-def', text: card.definition })
      ])
    ]);

    var nav = h('div', { class: 'btn-row', style: 'margin-bottom:12px' }, [
      h('button', {
        class: 'btn btn--ghost', type: 'button', text: '‹ Prev', disabled: deck.index === 0,
        onclick: prev
      }),
      h('button', {
        class: 'btn btn--ghost', type: 'button',
        text: deck.shuffled ? 'Shuffled' : 'Shuffle',
        onclick: function () {
          deck.cards = shuffle(deck.cards);
          deck.index = 0; deck.flipped = false; deck.shuffled = true;
          renderDeck(); toast('Deck shuffled');
        }
      }),
      h('button', {
        class: 'btn btn--ghost', type: 'button', text: 'Next ›',
        disabled: deck.index >= deck.cards.length - 1, onclick: next
      })
    ]);

    append(root, [
      back, meta, bar,
      h('div', { class: 'flash-scene' }, flash),
      nav,
      h('p', { class: 'footnote',
        text: 'Keyboard: Space flips · ← → moves · K marks known · R flags for review' })
    ]);

    setActions([
      h('button', {
        class: 'btn btn--subtle', type: 'button',
        text: state === 'review' ? '★ Review again' : 'Review again',
        onclick: function () { markTerm(card.id, 'review'); toast('Flagged for review'); next(true); }
      }),
      h('button', {
        class: 'btn btn--primary', type: 'button',
        text: state === 'known' ? '✓ Know it' : 'Know it',
        onclick: function () { markTerm(card.id, 'known'); toast('Marked as known'); next(true); }
      })
    ]);

    function next(force) {
      if (deck.index < deck.cards.length - 1) { deck.index++; deck.flipped = false; renderDeck(); }
      else if (force) { renderDeck(); }
    }
    function prev() {
      if (deck.index > 0) { deck.index--; deck.flipped = false; renderDeck(); }
    }

    deck._next = next;
    deck._prev = prev;
    deck._card = card;
  }

  document.addEventListener('keydown', function (e) {
    if (view.name !== 'flash' || !deck) return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); deck._next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); deck._prev(); }
    else if (e.key === 'k' || e.key === 'K') {
      markTerm(deck._card.id, 'known'); toast('Marked as known'); deck._next(true);
    } else if (e.key === 'r' || e.key === 'R') {
      markTerm(deck._card.id, 'review'); toast('Flagged for review'); deck._next(true);
    } else if (e.key === ' ' && tag !== 'button') {
      e.preventDefault(); deck.flipped = !deck.flipped; renderDeck();
    }
  });

  // ---------------------------------------------------------
  // Quiz
  // ---------------------------------------------------------
  var FORMAT_LABEL = {
    'multiple-choice': 'Multiple choice',
    'matching': 'Matching',
    'short-answer': 'Short answer',
    'ordering': 'Ordering',
    'calculation': 'Calculation',
    'graph-selection': 'Choose the graph'
  };

  function coreQuestions() {
    return course.questions.filter(function (q) { return q.bank !== 'topic-mc'; });
  }

  function topicMcQuestions() {
    return course.questions.filter(function (q) { return q.bank === 'topic-mc'; });
  }

  function quizQuestions(scope) {
    if (scope === 'mixed') return shuffle(coreQuestions());
    if (scope === 'mc') return shuffle(topicMcQuestions());
    if (scope.indexOf('mc:') === 0) {
      var mcid = scope.slice(3);
      return shuffle(topicMcQuestions().filter(function (q) { return q.lessonId === mcid; }));
    }
    if (scope === 'missed') {
      return shuffle(missedQuestionIds().map(function (id) { return questionById[id]; }));
    }
    if (scope.indexOf('missed:') === 0) {
      var lid = scope.slice(7);
      return shuffle(missedQuestionIds().map(function (id) { return questionById[id]; })
        .filter(function (q) { return q.lessonId === lid; }));
    }
    if (scope.indexOf('vocab:') === 0) {
      var vid = scope.slice(6);
      var pool = vid === 'all' ? course.terms
        : course.terms.filter(function (t) { return t.lessonId === vid; });
      return buildVocabQuestions(pool, 10);
    }
    return shuffle(coreQuestions().filter(function (q) { return q.lessonId === scope; }));
  }

  function quizTitle(scope) {
    if (scope === 'mixed') return 'Mixed quiz';
    if (scope === 'mc') return 'Multiple choice quiz';
    if (scope.indexOf('mc:') === 0) {
      return 'Lesson ' + lessonById[scope.slice(3)].number + ' · multiple choice';
    }
    if (scope === 'missed') return 'Missed concepts';
    if (scope.indexOf('missed:') === 0) return 'Lesson ' + lessonById[scope.slice(7)].number + ' · missed';
    if (scope.indexOf('vocab:') === 0) return 'Lesson ' + lessonById[scope.slice(6)].number + ' · vocabulary';
    return 'Lesson ' + lessonById[scope].number + ' quiz';
  }

  function startQuiz(scope, fromHistory) {
    var qs = quizQuestions(scope);
    if (!qs.length) { toast('No questions in that set'); return; }
    session = {
      scope: scope,
      questions: qs,
      index: 0,
      correct: 0,
      response: null,     // per-question working answer
      submitted: false,
      wasCorrect: false,
      results: [],
      choiceOrder: {},
      finished: false
    };
    if (fromHistory) { view = { name: 'quiz', scope: scope }; render(); }
    else go({ name: 'quiz', scope: scope });
  }

  function renderQuiz() {
    if (!session || session.scope !== view.scope) { startQuiz(view.scope, true); return; }
    clear(root);
    setChrome(quizTitle(session.scope), 'Quiz');
    if (session.finished) { renderResults(); return; }

    var q = session.questions[session.index];
    var total = session.questions.length;

    var quit = h('button', {
      class: 'back-btn', type: 'button', onclick: function () {
        confirmSheet('Leave this quiz?', 'Answers you already submitted are saved. The rest of this run is discarded.',
          'Leave quiz', function () { session = null; go({ name: 'home' }); });
      }
    }, ['‹ ', 'Leave quiz']);

    var head = h('div', { class: 'quiz-head' }, [
      h('div', { class: 'bar' },
        h('div', { class: 'bar__fill', style: 'width:' + pct(session.index, total) + '%' })),
      h('span', { class: 'quiz-count', text: (session.index + 1) + '/' + total })
    ]);

    var card = h('div', { class: 'card' }, [
      h('span', { class: 'q-format', text: FORMAT_LABEL[q.format] || q.format }),
      q.promptLead ? h('p', { style: 'font-size:13.5px;color:var(--text-faint);font-weight:650;margin-bottom:6px',
        text: q.promptLead }) : null,
      h('h2', { class: 'q-prompt', text: q.prompt }),
      buildAnswerUI(q)
    ]);

    append(root, [quit, head, card]);

    if (session.submitted) card.appendChild(buildFeedback(q));
    setActions(buildQuizActions(q));
  }

  function buildAnswerUI(q) {
    switch (q.format) {
      case 'multiple-choice':
      case 'graph-selection': return uiChoices(q);
      case 'calculation': return uiCalculation(q);
      case 'short-answer': return uiShortAnswer(q);
      case 'ordering': return uiOrdering(q);
      case 'matching': return uiMatching(q);
      default: return uiShortAnswer(q);
    }
  }

  // --- Multiple choice / graph selection ---
  function uiChoices(q) {
    if (!session.choiceOrder[q.id]) session.choiceOrder[q.id] = shuffle(q.choices);
    var order = session.choiceOrder[q.id];
    var group = h('div', { role: 'radiogroup', 'aria-label': 'Answer choices' });

    order.forEach(function (choice, i) {
      var state = null;
      if (session.submitted) {
        if (choice === q.answer) state = 'correct';
        else if (choice === session.response) state = 'wrong';
        else state = 'muted';
      }
      group.appendChild(h('button', {
        class: 'choice', type: 'button', role: 'radio',
        'aria-checked': session.response === choice ? 'true' : 'false',
        'data-selected': session.response === choice ? 'true' : 'false',
        'data-state': state,
        disabled: session.submitted,
        onclick: function () { session.response = choice; renderQuiz(); }
      }, [
        h('span', { class: 'choice__key', 'aria-hidden': 'true',
          text: String.fromCharCode(65 + i) }),
        h('span', { text: choice })
      ]));
    });
    return group;
  }

  // --- Calculation ---
  function uiCalculation(q) {
    var input = h('input', {
      class: 'field', type: 'text', inputmode: 'decimal',
      id: 'answer-field', placeholder: 'Enter a number',
      value: session.response == null ? '' : session.response,
      disabled: session.submitted,
      'aria-label': 'Numeric answer in ' + q.unit,
      oninput: function (e) { session.response = e.target.value; syncSubmitState(q); }
    });
    return h('div', {}, [
      h('div', { class: 'calc-row' }, [input, h('span', { class: 'calc-unit', text: q.unit })]),
      h('p', { style: 'font-size:13px;color:var(--text-faint);margin:10px 0 0',
        text: 'Enter the number only — the unit is already shown.' })
    ]);
  }

  // --- Short answer ---
  function uiShortAnswer(q) {
    var box = h('textarea', {
      class: 'field', id: 'answer-field', rows: '4',
      placeholder: 'Write your answer in your own words…',
      disabled: session.submitted,
      'aria-label': 'Your answer',
      oninput: function (e) { session.response = e.target.value; syncSubmitState(q); }
    });
    box.value = session.response == null ? '' : session.response;
    return h('div', {}, [
      box,
      h('p', { style: 'font-size:13px;color:var(--text-faint);margin:10px 0 0',
        text: 'Checked for the key scientific ideas. You can correct the mark yourself after you submit.' })
    ]);
  }

  // --- Ordering ---
  function uiOrdering(q) {
    if (!session.response) session.response = [];
    if (!session.choiceOrder[q.id]) session.choiceOrder[q.id] = shuffle(q.items);
    var picked = session.response;
    var wrap = h('div', {}, [
      h('p', { style: 'font-size:13px;color:var(--text-faint);margin:0 0 12px',
        text: session.submitted ? 'Your order, checked against the lesson sequence:'
          : 'Tap the steps in order. Tap a numbered step again to remove it.' })
    ]);

    var listSource = session.submitted ? picked : session.choiceOrder[q.id];

    listSource.forEach(function (item) {
      var pos = picked.indexOf(item);
      var state = null;
      if (session.submitted) state = q.answer[pos] === item ? 'correct' : 'wrong';
      wrap.appendChild(h('button', {
        class: 'order-item', type: 'button',
        'data-picked': pos !== -1 ? 'true' : 'false',
        'data-state': state,
        disabled: session.submitted,
        'aria-label': item + (pos !== -1 ? ', position ' + (pos + 1) : ', not placed'),
        onclick: function () {
          var at = picked.indexOf(item);
          if (at === -1) picked.push(item); else picked.splice(at, 1);
          renderQuiz();
        }
      }, [
        h('span', { class: 'order-item__pos', 'aria-hidden': 'true',
          text: pos === -1 ? '·' : String(pos + 1) }),
        h('span', { text: item })
      ]));
    });
    return wrap;
  }

  // --- Matching ---
  function uiMatching(q) {
    if (!session.response) session.response = {};
    if (!session.choiceOrder[q.id]) {
      session.choiceOrder[q.id] = shuffle(q.pairs.map(function (p) { return p.right; }));
    }
    var options = session.choiceOrder[q.id];
    var grid = h('div', { class: 'match-grid' });

    q.pairs.forEach(function (pair, i) {
      var chosen = session.response[pair.left] || '';
      var state = null;
      if (session.submitted) state = chosen === pair.right ? 'correct' : 'wrong';
      var selectId = 'match-' + i;
      var select = h('select', {
        class: 'field', id: selectId, disabled: session.submitted,
        onchange: function (e) { session.response[pair.left] = e.target.value; syncSubmitState(q); }
      }, [h('option', { value: '', text: 'Choose a unit…' })].concat(
        options.map(function (opt) { return h('option', { value: opt, text: opt }); })
      ));
      select.value = chosen;
      grid.appendChild(h('div', { class: 'match-pair', 'data-state': state }, [
        h('label', { class: 'match-pair__left', for: selectId, text: pair.left }),
        select
      ]));
    });
    return grid;
  }

  function syncSubmitState(q) {
    var btn = document.getElementById('submit-btn');
    if (btn) btn.disabled = !hasResponse(q);
  }

  function hasResponse(q) {
    var r = session.response;
    if (q.format === 'ordering') return Array.isArray(r) && r.length === q.items.length;
    if (q.format === 'matching') {
      return r && q.pairs.every(function (p) { return r[p.left]; });
    }
    return r != null && String(r).trim() !== '';
  }

  function grade(q) {
    var r = session.response;
    switch (q.format) {
      case 'multiple-choice':
      case 'graph-selection':
        return r === q.answer;
      case 'calculation':
        return gradeCalculation(q, r);
      case 'short-answer':
        return gradeShortAnswer(q, r);
      case 'ordering':
        return q.answer.every(function (item, i) { return r[i] === item; });
      case 'matching':
        return q.pairs.every(function (p) { return r[p.left] === p.right; });
      default:
        return false;
    }
  }

  function buildQuizActions(q) {
    if (!session.submitted) {
      var submit = h('button', {
        class: 'btn btn--primary', type: 'button', id: 'submit-btn',
        text: 'Check answer', disabled: !hasResponse(q),
        onclick: function () { submitAnswer(q); }
      });
      return [submit];
    }
    var last = session.index === session.questions.length - 1;
    return [h('button', {
      class: 'btn btn--primary', type: 'button',
      text: last ? 'See results' : 'Next question ›',
      onclick: function () {
        if (last) { session.finished = true; finishQuiz(); }
        else {
          session.index++;
          session.response = null;
          session.submitted = false;
          session.wasCorrect = false;
        }
        renderQuiz();
        window.scrollTo(0, 0);
      }
    })];
  }

  function submitAnswer(q) {
    var correct = grade(q);
    session.submitted = true;
    session.wasCorrect = correct;
    if (correct) session.correct++;
    session.results.push({ id: q.id, correct: correct, question: q });
    if (!q.generated) recordAttempt(q.id, correct);
    renderQuiz();
  }

  function buildFeedback(q) {
    var selfGradable = q.format === 'short-answer';
    var tone = session.wasCorrect ? 'correct' : 'wrong';

    var box = h('div', {
      class: 'feedback', 'data-tone': tone, role: 'status', 'aria-live': 'polite'
    }, [
      h('div', { class: 'feedback__title',
        text: session.wasCorrect ? 'Correct' : 'Not quite' }),
      h('p', { class: 'feedback__answer' }, [
        h('strong', { text: 'Answer: ' }), correctAnswerText(q)
      ]),
      h('p', { class: 'feedback__why', text: q.explanation })
    ]);

    if (selfGradable) {
      box.appendChild(h('div', { class: 'btn-row', style: 'margin-top:12px' }, [
        h('button', {
          class: 'btn btn--subtle', type: 'button',
          text: session.wasCorrect ? 'Mark for review' : 'I had it right',
          onclick: function () {
            var flip = !session.wasCorrect;
            session.wasCorrect = flip;
            session.correct += flip ? 1 : -1;
            var entry = session.results[session.results.length - 1];
            entry.correct = flip;
            if (!q.generated) recordAttempt(q.id, flip);
            renderQuiz();
            toast(flip ? 'Counted as correct' : 'Saved for review');
          }
        })
      ]));
    }
    return box;
  }

  function finishQuiz() {
    var score = pct(session.correct, session.questions.length);
    var key = session.scope;
    if (progress.bestQuizScore[key] == null || score > progress.bestQuizScore[key]) {
      progress.bestQuizScore[key] = score;
    }
    save();
  }

  function renderResults() {
    var total = session.questions.length;
    var score = pct(session.correct, total);
    var missed = session.results.filter(function (r) { return !r.correct; });
    var best = progress.bestQuizScore[session.scope];

    var ring = h('div', { class: 'result-ring', style: '--pct:' + score, role: 'img',
      'aria-label': 'Score ' + score + ' percent' },
      h('div', { class: 'result-ring__inner' }, [
        h('div', {}, [
          h('div', { class: 'result-ring__pct', text: score + '%' }),
          h('div', { class: 'result-ring__sub', style: 'text-align:center',
            text: session.correct + ' of ' + total })
        ])
      ]));

    append(root, [
      h('div', { class: 'card', style: 'text-align:center;margin-top:16px' }, [
        h('h1', { style: 'font-size:21px;font-weight:800;margin-bottom:2px', text: 'Quiz complete' }),
        h('p', { style: 'font-size:14px;color:var(--text-faint)', text: quizTitle(session.scope) }),
        ring,
        best != null ? h('p', { style: 'font-size:13px;color:var(--text-faint);margin:0',
          text: 'Best score for this set: ' + best + '%' }) : null
      ]),
      missed.length ? h('div', { class: 'card' }, [
        h('h2', { class: 'section-label', style: 'margin-top:0',
          text: 'Review these ' + missed.length }),
        h('div', {}, missed.map(function (r) {
          return h('div', { class: 'term-row' }, [
            h('span', { class: 'dot dot--review', 'aria-hidden': 'true' }),
            h('div', { class: 'term-row__body' }, [
              h('div', { class: 'term-row__term', text: r.question.prompt }),
              h('p', { class: 'term-row__def', text: 'Answer: ' + correctAnswerText(r.question) }),
              h('p', { class: 'term-row__def', text: r.question.explanation })
            ])
          ]);
        }))
      ]) : h('div', { class: 'card' },
        h('div', { class: 'empty' }, [
          h('div', { class: 'empty__icon', 'aria-hidden': 'true', text: '★' }),
          h('p', { style: 'margin:0', text: 'Every question correct. Nothing added to your review list.' })
        ]))
    ]);

    setActions([
      h('button', { class: 'btn btn--ghost', type: 'button', text: 'Home',
        onclick: function () { session = null; go({ name: 'home' }); } }),
      h('button', { class: 'btn btn--primary', type: 'button', text: 'Try again',
        onclick: function () { startQuiz(session.scope, true); } })
    ]);
  }

  // ---------------------------------------------------------
  // Boot
  // ---------------------------------------------------------
  course.readerUrl = course.readerUrl || null;
  applyTheme();
  syncThemeButton();
  themeBtn.addEventListener('click', cycleTheme);
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () { if (currentTheme() === 'auto') applyTheme(); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  view = readHash();
  if (view.name === 'quiz') startQuiz(view.scope, true);
  else if (view.name === 'flash') startDeck(view.scope, true);
  else render();
})();
