/* English Vocabulary — Set 1
 * Content only. No presentation logic lives here.
 * Academic vocabulary list for Holy Cross Study.
 */
(function () {
  'use strict';

  var LESSON = 'vocab-set-1';

  var terms = [
    { id: 'ev1-abate', lessonId: LESSON, category: 'Change and intensity', term: 'Abate', definition: 'To become less intense or widespread; to decrease.' },
    { id: 'ev1-enervate', lessonId: LESSON, category: 'Change and intensity', term: 'Enervate', definition: 'To weaken or drain of energy.' },
    { id: 'ev1-ephemeral', lessonId: LESSON, category: 'Change and intensity', term: 'Ephemeral', definition: 'Lasting for only a very short time.' },
    { id: 'ev1-capricious', lessonId: LESSON, category: 'Change and intensity', term: 'Capricious', definition: 'Changing suddenly and unpredictably, especially in mood or behavior.' },
    { id: 'ev1-divergent', lessonId: LESSON, category: 'Change and intensity', term: 'Divergent', definition: 'Moving or thinking in different directions; departing from what is usual.' },

    { id: 'ev1-ambiguous', lessonId: LESSON, category: 'Thinking and evidence', term: 'Ambiguous', definition: 'Unclear because more than one meaning is possible.' },
    { id: 'ev1-candid', lessonId: LESSON, category: 'Thinking and evidence', term: 'Candid', definition: 'Honest and straightforward; saying what you really think.' },
    { id: 'ev1-pragmatic', lessonId: LESSON, category: 'Thinking and evidence', term: 'Pragmatic', definition: 'Practical and realistic; focused on what works rather than on theory.' },
    { id: 'ev1-substantiate', lessonId: LESSON, category: 'Thinking and evidence', term: 'Substantiate', definition: 'To provide evidence that proves something is true.' },
    { id: 'ev1-meticulous', lessonId: LESSON, category: 'Thinking and evidence', term: 'Meticulous', definition: 'Extremely careful and precise; paying close attention to details.' },

    { id: 'ev1-benevolent', lessonId: LESSON, category: 'Character and attitude', term: 'Benevolent', definition: 'Kind and generous; wanting to do good for others.' },
    { id: 'ev1-diligent', lessonId: LESSON, category: 'Character and attitude', term: 'Diligent', definition: 'Careful, hardworking, and persistent.' },
    { id: 'ev1-frugal', lessonId: LESSON, category: 'Character and attitude', term: 'Frugal', definition: 'Careful not to waste money or resources.' },
    { id: 'ev1-impetuous', lessonId: LESSON, category: 'Character and attitude', term: 'Impetuous', definition: 'Acting quickly without thinking about the consequences.' },
    { id: 'ev1-ostentatious', lessonId: LESSON, category: 'Character and attitude', term: 'Ostentatious', definition: 'Showy in a way meant to impress others.' },
    { id: 'ev1-venerable', lessonId: LESSON, category: 'Character and attitude', term: 'Venerable', definition: 'Worthy of respect because of age, wisdom, or character.' },

    { id: 'ev1-adversity', lessonId: LESSON, category: 'Fortune and feeling', term: 'Adversity', definition: 'A difficult or unfortunate situation; hardship.' },
    { id: 'ev1-apathy', lessonId: LESSON, category: 'Fortune and feeling', term: 'Apathy', definition: 'A lack of interest, feeling, or concern.' },
    { id: 'ev1-fortuitous', lessonId: LESSON, category: 'Fortune and feeling', term: 'Fortuitous', definition: 'Happening by chance in a lucky or fortunate way.' },
    { id: 'ev1-reverence', lessonId: LESSON, category: 'Fortune and feeling', term: 'Reverence', definition: 'Deep respect, often mixed with awe.' }
  ];

  var questions = [
    // ---- Definition / synonym ----
    {
      id: 'ev1-mc-abate-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means to become less intense or to decrease?',
      choices: ['Abate', 'Enervate', 'Substantiate', 'Apathy'],
      answer: 'Abate',
      explanation: 'Abate means to become less intense or widespread — for example, a storm or an argument can abate.'
    },
    {
      id: 'ev1-mc-benevolent-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means kind and generous, wanting to do good for others?',
      choices: ['Benevolent', 'Ostentatious', 'Candid', 'Frugal'],
      answer: 'Benevolent',
      explanation: 'Benevolent describes a person or action that is kind and aims to help others.'
    },
    {
      id: 'ev1-mc-candid-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which is the best synonym for candid?',
      choices: ['Honest', 'Unclear', 'Showy', 'Thrifty'],
      answer: 'Honest',
      explanation: 'Candid means honest and straightforward — saying what you really think.'
    },
    {
      id: 'ev1-mc-ephemeral-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which is the best synonym for ephemeral?',
      choices: ['Short-lived', 'Ancient', 'Practical', 'Hardworking'],
      answer: 'Short-lived',
      explanation: 'Ephemeral means lasting for only a very short time.'
    },
    {
      id: 'ev1-mc-pragmatic-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means practical and focused on what actually works?',
      choices: ['Pragmatic', 'Capricious', 'Ostentatious', 'Ambiguous'],
      answer: 'Pragmatic',
      explanation: 'A pragmatic person chooses a realistic solution instead of an ideal but unworkable one.'
    },
    {
      id: 'ev1-mc-ambiguous-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means unclear because more than one meaning is possible?',
      choices: ['Ambiguous', 'Candid', 'Meticulous', 'Pragmatic'],
      answer: 'Ambiguous',
      explanation: 'Ambiguous language can be interpreted in more than one way, so the meaning is not clear.'
    },
    {
      id: 'ev1-mc-diligent-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means careful, hardworking, and persistent?',
      choices: ['Diligent', 'Impetuous', 'Capricious', 'Ostentatious'],
      answer: 'Diligent',
      explanation: 'Diligent students keep working carefully over time rather than rushing or giving up.'
    },
    {
      id: 'ev1-mc-fortuitous-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which is the best synonym for fortuitous?',
      choices: ['Lucky', 'Showy', 'Unpredictable', 'Respectful'],
      answer: 'Lucky',
      explanation: 'Fortuitous means happening by chance in a lucky or fortunate way — not just any accident.'
    },
    {
      id: 'ev1-mc-substantiate-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means to provide evidence that proves something is true?',
      choices: ['Substantiate', 'Abate', 'Enervate', 'Revere'],
      answer: 'Substantiate',
      explanation: 'To substantiate a claim is to back it up with facts, data, or other evidence.'
    },
    {
      id: 'ev1-mc-adversity-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means hardship or a difficult situation?',
      choices: ['Adversity', 'Apathy', 'Reverence', 'Benevolence'],
      answer: 'Adversity',
      explanation: 'Adversity is misfortune or hardship — a tough situation a person has to face.'
    },
    {
      id: 'ev1-mc-apathy-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means a lack of interest, feeling, or concern?',
      choices: ['Apathy', 'Reverence', 'Diligence', 'Benevolence'],
      answer: 'Apathy',
      explanation: 'Apathy is not caring. It is the opposite of interest or concern.'
    },
    {
      id: 'ev1-mc-capricious-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means changing suddenly and unpredictably?',
      choices: ['Capricious', 'Diligent', 'Meticulous', 'Pragmatic'],
      answer: 'Capricious',
      explanation: 'Capricious people or conditions change mood or direction without warning.'
    },
    {
      id: 'ev1-mc-divergent-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means moving or thinking in different directions from the usual path?',
      choices: ['Divergent', 'Frugal', 'Meticulous', 'Ephemeral'],
      answer: 'Divergent',
      explanation: 'Divergent ideas or paths split apart and do not follow the same course.'
    },
    {
      id: 'ev1-mc-enervate-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which is the best synonym for enervate?',
      choices: ['Weaken', 'Decrease', 'Prove', 'Respect'],
      answer: 'Weaken',
      explanation: 'Enervate means to weaken or drain of energy, not merely to become smaller.'
    },
    {
      id: 'ev1-mc-frugal-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which is the best synonym for frugal?',
      choices: ['Thrifty', 'Showy', 'Rash', 'Generous'],
      answer: 'Thrifty',
      explanation: 'Frugal means careful not to waste money or resources. It is not the same as being showy or stingy just to impress.'
    },
    {
      id: 'ev1-mc-impetuous-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means acting quickly without thinking about the consequences?',
      choices: ['Impetuous', 'Diligent', 'Meticulous', 'Pragmatic'],
      answer: 'Impetuous',
      explanation: 'An impetuous action is rash — done in a burst of feeling rather than after careful thought.'
    },
    {
      id: 'ev1-mc-meticulous-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which is the best synonym for meticulous?',
      choices: ['Precise', 'Rash', 'Unclear', 'Unpredictable'],
      answer: 'Precise',
      explanation: 'Meticulous means extremely careful and precise, with close attention to every detail.'
    },
    {
      id: 'ev1-mc-ostentatious-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means showy in a way meant to impress others?',
      choices: ['Ostentatious', 'Frugal', 'Venerable', 'Candid'],
      answer: 'Ostentatious',
      explanation: 'Ostentatious display is flashy on purpose, designed to attract notice.'
    },
    {
      id: 'ev1-mc-reverence-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means deep respect, often mixed with awe?',
      choices: ['Reverence', 'Apathy', 'Adversity', 'Ostentation'],
      answer: 'Reverence',
      explanation: 'Reverence is a deep, almost solemn respect for a person, place, or idea.'
    },
    {
      id: 'ev1-mc-venerable-def', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which word means worthy of respect because of age, wisdom, or character?',
      choices: ['Venerable', 'Ephemeral', 'Ostentatious', 'Impetuous'],
      answer: 'Venerable',
      explanation: 'Venerable describes someone or something honored for long life, wisdom, or dignity.'
    },

    // ---- Sentence in context ----
    {
      id: 'ev1-mc-abate-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'After the storm passed, the fierce winds finally began to ___.',
      choices: ['abate', 'enervate', 'substantiate', 'diverge'],
      answer: 'abate',
      explanation: 'Winds that lessen in strength abate. Enervate would mean they drained someone of energy.'
    },
    {
      id: 'ev1-mc-benevolent-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The ___ donor paid for every student\'s field trip without asking for credit.',
      choices: ['benevolent', 'ostentatious', 'capricious', 'impetuous'],
      answer: 'benevolent',
      explanation: 'Giving generously without seeking attention is benevolent, not showy or impulsive.'
    },
    {
      id: 'ev1-mc-candid-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'In a ___ conversation, she admitted she had not studied for the test.',
      choices: ['candid', 'ambiguous', 'ostentatious', 'ephemeral'],
      answer: 'candid',
      explanation: 'A candid conversation is frank and honest. Ambiguous talk would hide the meaning.'
    },
    {
      id: 'ev1-mc-ephemeral-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Fame from a viral video is often ___; most people forget it within a week.',
      choices: ['ephemeral', 'venerable', 'diligent', 'pragmatic'],
      answer: 'ephemeral',
      explanation: 'Something ephemeral does not last. Venerable fame would be long-respected, not gone in a week.'
    },
    {
      id: 'ev1-mc-pragmatic-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Instead of arguing about the perfect plan, he took a ___ approach and fixed the leak with the tools he had.',
      choices: ['pragmatic', 'capricious', 'ostentatious', 'ambiguous'],
      answer: 'pragmatic',
      explanation: 'Choosing a workable fix over an ideal plan is pragmatic — practical and realistic.'
    },
    {
      id: 'ev1-mc-ambiguous-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The teacher\'s directions were so ___ that half the class started a different assignment.',
      choices: ['ambiguous', 'candid', 'meticulous', 'diligent'],
      answer: 'ambiguous',
      explanation: 'If two groups understand the same directions differently, the wording is ambiguous.'
    },
    {
      id: 'ev1-mc-diligent-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'A ___ student reviews notes every night instead of cramming at the last minute.',
      choices: ['diligent', 'impetuous', 'capricious', 'ostentatious'],
      answer: 'diligent',
      explanation: 'Steady, careful effort over time is diligence, not a sudden or showy burst of work.'
    },
    {
      id: 'ev1-mc-fortuitous-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Missing the first bus was ___ because she later ran into the coach who offered her a ride.',
      choices: ['fortuitous', 'capricious', 'ostentatious', 'ephemeral'],
      answer: 'fortuitous',
      explanation: 'A chance event that turns out well is fortuitous. Capricious would describe unpredictable behavior, not a lucky break.'
    },
    {
      id: 'ev1-mc-substantiate-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The lab report must ___ the claim with data, not just opinion.',
      choices: ['substantiate', 'abate', 'enervate', 'revere'],
      answer: 'substantiate',
      explanation: 'To substantiate a claim is to prove it with evidence such as data.'
    },
    {
      id: 'ev1-mc-adversity-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The team showed courage in the face of ___, coming back after a losing season.',
      choices: ['adversity', 'reverence', 'apathy', 'benevolence'],
      answer: 'adversity',
      explanation: 'A losing season is a hardship — adversity — not a lack of feeling or an act of kindness.'
    },
    {
      id: 'ev1-mc-apathy-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Voter ___ is a problem when people stop caring enough to show up on election day.',
      choices: ['apathy', 'reverence', 'diligence', 'benevolence'],
      answer: 'apathy',
      explanation: 'Not caring enough to act is apathy. Diligence or reverence would push people to participate.'
    },
    {
      id: 'ev1-mc-capricious-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The ___ weather switched from sunshine to hail in ten minutes.',
      choices: ['capricious', 'diligent', 'meticulous', 'pragmatic'],
      answer: 'capricious',
      explanation: 'Weather that changes suddenly and without a clear pattern is capricious.'
    },
    {
      id: 'ev1-mc-divergent-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The twins took ___ paths after graduation — one to art school, one to the military.',
      choices: ['divergent', 'frugal', 'meticulous', 'ephemeral'],
      answer: 'divergent',
      explanation: 'Paths that split in different directions are divergent.'
    },
    {
      id: 'ev1-mc-enervate-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The humidity and long hike combined to ___ even the strongest walkers.',
      choices: ['enervate', 'abate', 'substantiate', 'revere'],
      answer: 'enervate',
      explanation: 'Heat and a long hike drain energy — they enervate people. Abate would mean the hike itself became weaker.'
    },
    {
      id: 'ev1-mc-frugal-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'She was ___ with her allowance, saving most of it instead of buying snacks every day.',
      choices: ['frugal', 'ostentatious', 'impetuous', 'capricious'],
      answer: 'frugal',
      explanation: 'Spending carefully and avoiding waste is being frugal.'
    },
    {
      id: 'ev1-mc-impetuous-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'His ___ decision to quit the team after one bad practice surprised the coach.',
      choices: ['impetuous', 'diligent', 'meticulous', 'pragmatic'],
      answer: 'impetuous',
      explanation: 'Quitting after one setback, without thinking it through, is impetuous.'
    },
    {
      id: 'ev1-mc-meticulous-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The jeweler was ___, checking every gem under a magnifier before setting it.',
      choices: ['meticulous', 'impetuous', 'ambiguous', 'capricious'],
      answer: 'meticulous',
      explanation: 'Checking every detail carefully is meticulous work.'
    },
    {
      id: 'ev1-mc-ostentatious-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Driving a gold-plated car to school was an ___ way to show off.',
      choices: ['ostentatious', 'frugal', 'venerable', 'candid'],
      answer: 'ostentatious',
      explanation: 'A display designed to impress and attract notice is ostentatious.'
    },
    {
      id: 'ev1-mc-reverence-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Visitors spoke in whispers out of ___ for the historic chapel.',
      choices: ['reverence', 'apathy', 'adversity', 'ambiguity'],
      answer: 'reverence',
      explanation: 'Quiet, respectful behavior in a sacred or historic place shows reverence.'
    },
    {
      id: 'ev1-mc-venerable-ctx', lessonId: LESSON, bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'The ___ oak had shaded the courtyard for more than two hundred years.',
      choices: ['venerable', 'ephemeral', 'impetuous', 'ostentatious'],
      answer: 'venerable',
      explanation: 'An ancient tree honored for its age is venerable, not short-lived or showy.'
    }
  ];

  var lessons = [
    {
      id: LESSON,
      number: 1,
      title: 'English Vocabulary — Set 1',
      focusQuestion: 'Can you define each word and choose the one that fits a sentence?',
      bigIdea: 'These twenty academic words show up in reading, writing, and conversation. Knowing a precise meaning — and a close synonym — helps you understand texts and choose the right word yourself.',
      keyIdeas: [
        'Learn the definition first, then a synonym you could swap in.',
        'Watch part of speech: some words are verbs (abate, enervate, substantiate), others are nouns or adjectives.',
        'Close meanings are not the same: abate is to lessen, enervate is to weaken a person or thing.',
        'Fortuitous is a lucky chance; capricious is an unpredictable change.',
        'Frugal is careful spending; ostentatious is spending (or displaying) to impress.',
        'Use the word in a real sentence to lock it in.'
      ],
      steps: [],
      tables: [
        {
          caption: 'Words in this set',
          headers: ['Word', 'Quick meaning'],
          rows: [
            ['Abate', 'Become less intense'],
            ['Benevolent', 'Kind and generous'],
            ['Candid', 'Honest and straightforward'],
            ['Ephemeral', 'Lasting a very short time'],
            ['Pragmatic', 'Practical; focused on what works'],
            ['Ambiguous', 'Unclear; more than one meaning'],
            ['Diligent', 'Hardworking and persistent'],
            ['Fortuitous', 'Lucky by chance'],
            ['Substantiate', 'Prove with evidence'],
            ['Adversity', 'Hardship'],
            ['Apathy', 'Lack of interest or concern'],
            ['Capricious', 'Suddenly unpredictable'],
            ['Divergent', 'Going in different directions'],
            ['Enervate', 'Weaken or drain of energy'],
            ['Frugal', 'Careful not to waste'],
            ['Impetuous', 'Acting without thinking'],
            ['Meticulous', 'Extremely careful with details'],
            ['Ostentatious', 'Showy to impress'],
            ['Reverence', 'Deep respect'],
            ['Venerable', 'Worthy of respect for age or character']
          ]
        }
      ],
      formulas: []
    }
  ];

  lessons.forEach(function (lesson) {
    lesson.termIds = terms.filter(function (t) { return t.lessonId === lesson.id; }).map(function (t) { return t.id; });
    lesson.questionIds = questions.filter(function (q) {
      return q.lessonId === lesson.id && q.bank !== 'topic-mc';
    }).map(function (q) { return q.id; });
    lesson.mcQuestionIds = questions.filter(function (q) {
      return q.lessonId === lesson.id && q.bank === 'topic-mc';
    }).map(function (q) { return q.id; });
  });

  window.HC_CONTENT = window.HC_CONTENT || { courses: [] };
  window.HC_CONTENT.courses.push({
    id: 'english-vocab-1',
    year: 'English',
    subject: 'Vocabulary',
    tagline: 'Set 1 — 20 words',
    source: 'Holy Cross Study — English academic vocabulary, Set 1.',
    readerUrl: null,
    lessons: lessons,
    terms: terms,
    questions: questions
  });
})();
