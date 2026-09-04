/* Validate the Physical Science multiple-choice topic check.
 * Run: node scripts/validate-physical-science-mc.js
 */
'use strict';

var fs = require('fs');
var vm = require('vm');
var path = require('path');

var src = fs.readFileSync(path.join(__dirname, '..', 'data/9th-grade/physical-science.js'), 'utf8');
var sandbox = { window: { HC_CONTENT: { courses: [] } } };
vm.runInNewContext(src, sandbox);

var course = sandbox.window.HC_CONTENT.courses[0];
if (!course) {
  console.error('No course loaded');
  process.exit(1);
}

var mc = course.questions.filter(function (q) { return q.bank === 'topic-mc'; });
var errors = [];

function fail(msg) { errors.push(msg); }

var ids = {};
mc.forEach(function (q) {
  if (ids[q.id]) fail('Duplicate id: ' + q.id);
  ids[q.id] = true;
  if (q.format !== 'multiple-choice') fail(q.id + ' is not multiple-choice');
  if (!q.prompt) fail(q.id + ' missing prompt');
  if (!q.explanation) fail(q.id + ' missing explanation');
  if (!Array.isArray(q.choices) || q.choices.length < 3) fail(q.id + ' needs at least 3 choices');
  if (q.choices.indexOf(q.answer) === -1) fail(q.id + ' answer is not in choices: ' + q.answer);
  var seen = {};
  q.choices.forEach(function (c) {
    if (seen[c]) fail(q.id + ' duplicate choice: ' + c);
    seen[c] = true;
  });
});

var required = {
  'life science': /life science/i,
  'earth science': /earth science/i,
  'physical science': /physical science/i,
  'scientific model': /scientific model/i,
  'atom': /\batom\b/i,
  'nucleus': /nucleus/i,
  'proton': /proton/i,
  'neutron': /neutron/i,
  'scientific method sequence': /problem.*research.*hypothesis/i,
  'hypothesis': /hypothesis/i,
  'control': /\bcontrol\b/i,
  'independent variable': /independent variable/i,
  'dependent variable': /dependent variable/i,
  'constant': /constant/i,
  'data': /\bdata\b/i,
  'conclusion': /conclusion/i,
  'scientific theory': /scientific theory/i,
  'scientific law': /scientific law/i,
  'SI': /\bSI\b/,
  'meter': /meter/i,
  'kilogram': /kilogram/i,
  'second': /second/i,
  'ampere': /ampere/i,
  'kelvin': /kelvin/i,
  'mole': /mole/i,
  'candela': /candela/i,
  'kilo': /kilo/i,
  'deci': /deci/i,
  'centi': /centi/i,
  'milli': /milli/i,
  'micro': /micro/i,
  'nano': /nano/i,
  'volume formula': /length × width × height|length x width x height/i,
  'density formula': /mass ÷ volume|mass \/ volume/i,
  'mL cm3': /1 mL = 1 cm/i,
  'matter': /\bmatter\b/i,
  'mass': /\bmass\b/i,
  'density': /density/i,
  'bar graph': /bar graph/i,
  'line graph': /line graph/i,
  'circle graph': /circle graph/i
};

Object.keys(required).forEach(function (topic) {
  var re = required[topic];
  var hit = mc.some(function (q) {
    return re.test(q.prompt) || re.test(q.answer) || re.test(q.explanation);
  });
  if (!hit) fail('Missing coverage for: ' + topic);
});

var byLesson = { 'lesson-1': 0, 'lesson-2': 0, 'lesson-3': 0 };
mc.forEach(function (q) { byLesson[q.lessonId] = (byLesson[q.lessonId] || 0) + 1; });

if (errors.length) {
  console.error('FAILED\n' + errors.join('\n'));
  process.exit(1);
}

console.log('OK — ' + mc.length + ' multiple-choice questions');
console.log('  Lesson 1: ' + byLesson['lesson-1']);
console.log('  Lesson 2: ' + byLesson['lesson-2']);
console.log('  Lesson 3: ' + byLesson['lesson-3']);
console.log('  Topics covered: ' + Object.keys(required).length);
