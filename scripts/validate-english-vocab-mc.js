/* Validate English Vocabulary Set 1 terms and topic-MC coverage.
 * Run: node scripts/validate-english-vocab-mc.js
 */
'use strict';

var fs = require('fs');
var vm = require('vm');
var path = require('path');

var src = fs.readFileSync(path.join(__dirname, '..', 'data/english/vocab-set-1.js'), 'utf8');
var sandbox = { window: { HC_CONTENT: { courses: [] } } };
vm.runInNewContext(src, sandbox);

var course = sandbox.window.HC_CONTENT.courses[0];
if (!course) {
  console.error('No course loaded');
  process.exit(1);
}

var errors = [];
function fail(msg) { errors.push(msg); }

var requiredWords = [
  'Abate', 'Benevolent', 'Candid', 'Ephemeral', 'Pragmatic',
  'Ambiguous', 'Diligent', 'Fortuitous', 'Substantiate', 'Adversity',
  'Apathy', 'Capricious', 'Divergent', 'Enervate', 'Frugal',
  'Impetuous', 'Meticulous', 'Ostentatious', 'Reverence', 'Venerable'
];

if (course.terms.length !== requiredWords.length) {
  fail('Expected ' + requiredWords.length + ' terms, found ' + course.terms.length);
}

var termNames = course.terms.map(function (t) { return t.term; });
requiredWords.forEach(function (word) {
  if (termNames.indexOf(word) === -1) fail('Missing term: ' + word);
});
if (termNames.indexOf('Ephemereal') !== -1) fail('Incorrect spelling Ephemereal is present');

course.terms.forEach(function (t) {
  if (!t.id || !t.lessonId || !t.term || !t.definition) fail('Incomplete term: ' + JSON.stringify(t));
  if (!t.definition.trim() || t.definition.length < 20) fail(t.term + ' definition looks too thin');
});

var mc = course.questions.filter(function (q) { return q.bank === 'topic-mc'; });
var ids = {};
mc.forEach(function (q) {
  if (ids[q.id]) fail('Duplicate id: ' + q.id);
  ids[q.id] = true;
  if (q.format !== 'multiple-choice' && q.format !== 'true-false') {
    fail(q.id + ' must be multiple-choice or true-false');
  }
  if (!q.prompt) fail(q.id + ' missing prompt');
  if (!q.explanation) fail(q.id + ' missing explanation');
  var minChoices = q.format === 'true-false' ? 2 : 3;
  if (!Array.isArray(q.choices) || q.choices.length < minChoices) {
    fail(q.id + ' needs at least ' + minChoices + ' choices');
  }
  if (q.choices.indexOf(q.answer) === -1) fail(q.id + ' answer is not in choices: ' + q.answer);
  var seen = {};
  q.choices.forEach(function (c) {
    if (seen[c]) fail(q.id + ' duplicate choice: ' + c);
    seen[c] = true;
  });
});

requiredWords.forEach(function (word) {
  var re = new RegExp('\\b' + word + '\\b', 'i');
  var hit = mc.some(function (q) {
    return re.test(q.prompt) || re.test(q.answer) || re.test(q.explanation) ||
      (q.choices || []).some(function (c) { return re.test(c); });
  });
  if (!hit) fail('Missing MC coverage for: ' + word);
});

if (errors.length) {
  console.error('FAILED\n' + errors.join('\n'));
  process.exit(1);
}

console.log('OK — ' + course.terms.length + ' terms, ' + mc.length + ' topic-mc questions');
console.log('  Course: ' + course.subject + ' (' + course.id + ')');
console.log('  Words: ' + requiredWords.join(', '));
