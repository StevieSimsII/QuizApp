# Holy Cross Study

A mobile-first study app for Holy Cross School coursework — lesson notes, two-sided
flashcards, and interactive quizzes. Built for iPhone first, with light and dark themes
drawn from the school's own brand colors (navy `#0c2340`, gold `#b48f40`, taken from
hcnola.org).

**Courses:** 9th Grade — Physical Science, Lessons 1–3; and English Vocabulary — Set 1. Switch courses from the home screen.

## Running it

There is no build step, no server, no account, and no external API. Open `index.html`.

For a local preview over HTTP (needed if your browser blocks `file://` script loading):

```powershell
Push-Location "C:\Documents\GitHubCode\Quiz_App"; python -m http.server 8899; Pop-Location
```

Then visit <http://localhost:8899/>.

On iPhone, use Share → **Add to Home Screen** for a full-screen, app-like experience.

## What it does

- **Home** — course progress, a card per lesson, all-flashcards, a full
  multiple-choice / true-false quiz covering every highlighted term, the original
  mixed-format quiz, and "review missed concepts."
- **Lesson** — four tabs: Overview, Vocabulary, Practice, Review.
- **Flashcards** — every vocabulary record becomes a two-sided card. Shuffle, prev/next,
  flip, "Know it," and "Review again." Study all terms or one lesson at a time.
- **Quizzes** — a new full quiz (multiple choice and true/false) for every
  vocabulary term, plus the original mixed bank (multiple choice, matching, short
  answer, ordering, calculation, and graph selection). Immediate feedback, with the
  explanation shown only after you submit. Plus an auto-built vocabulary check per
  lesson. The original quizzes are unchanged.
- **Review** — missed questions and flagged terms collect per lesson and can be retried
  on their own.
- **Progress** — known terms, flagged terms, quiz attempts, best scores, and missed
  concepts persist in `localStorage`. Reset is behind a confirmation step.

### Accessibility and motion

Semantic HTML, a skip link, visible focus rings, 44px tap targets, ARIA roles on tabs,
radio groups, and live feedback regions, full keyboard control (flashcards: `Space`
flips, `←`/`→` move, `K` marks known, `R` flags for review), and
`prefers-reduced-motion` support.

## Layout

```
index.html                          app shell
assets/app.css                      design system, light + dark themes
assets/app.js                       engine — routing, flashcards, quiz, grading, storage
data/9th-grade/physical-science.js  Physical Science course (lessons, terms, question bank)
data/english/vocab-set-1.js         English Vocabulary — Set 1
9th_Grade/Physical_Science/         source brief and reference material
8th_Grade/                          previous year's source material
```

## Adding a lesson or a course

Content is fully separated from presentation. Copy
`data/9th-grade/physical-science.js` or `data/english/vocab-set-1.js`, edit the
`lessons`, `terms`, and `questions` arrays, and add a `<script src>` tag for it in
`index.html`. Each file should `push` a course onto `window.HC_CONTENT.courses`.
The engine reads that catalog and shows a course picker on the home screen when more
than one course is loaded. Progress is stored separately per course.

Multiple-choice items that belong to the all-topics quiz use `bank: 'topic-mc'`.
Those appear in **Multiple choice quiz** (all lessons) and each lesson's multiple-choice
practice set. Items without that flag stay in the mixed-format lesson quiz.

Question formats supported by the engine:

| Format | Answer shape |
|---|---|
| `multiple-choice` | `choices: []`, `answer: "…"` |
| `true-false` | `choices: ["True", "False"]`, `answer: "True"` or `"False"` |
| `graph-selection` | `choices: []`, `answer: "…"` |
| `calculation` | `value: 8`, `unit: "g/cm³"`, `tolerance: 0` |
| `short-answer` | `keywords: [["synonym", "synonym"], …]` — every group must match |
| `ordering` | `items: []`, `answer: []` in the correct sequence |
| `matching` | `pairs: [{ left, right }]` |

Short-answer grading is keyword-based, so the learner can override the mark after
submitting ("I had it right" / "Mark for review").

## Sources

Lesson content is transcribed in `9th_Grade/Physical_Science/Physical Science Web App
Brief.md`, from the McGraw Hill Physical Science eBook — *The Methods of Science*,
*Standards of Measurement*, and *Communicating with Graphs*. Definitions are concise
study paraphrases of the highlighted lesson content; no textbook claims were invented.
