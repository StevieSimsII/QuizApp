# Holy Cross Study

A mobile-first study app for Holy Cross School coursework — lesson notes, two-sided
flashcards, and interactive quizzes. Built for iPhone first, with light and dark themes
drawn from the school's own brand colors (navy `#0c2340`, gold `#b48f40`, taken from
hcnola.org).

**Current course: 9th Grade — Physical Science, Lessons 1–3.**

## Running it

There is no build step, no server, no account, and no external API. Open `index.html`.

For a local preview over HTTP (needed if your browser blocks `file://` script loading):

```powershell
Push-Location "C:\Documents\GitHubCode\Quiz_App"; python -m http.server 8899; Pop-Location
```

Then visit <http://localhost:8899/>.

On iPhone, use Share → **Add to Home Screen** for a full-screen, app-like experience.

## What it does

- **Home** — course progress, a card per lesson, all-flashcards, mixed quiz, and
  "review missed concepts."
- **Lesson** — four tabs: Overview, Vocabulary, Practice, Review.
- **Flashcards** — every vocabulary record becomes a two-sided card. Shuffle, prev/next,
  flip, "Know it," and "Review again." Study all terms or one lesson at a time.
- **Quizzes** — multiple choice, matching, short answer, ordering, calculation, and
  graph selection. Immediate feedback, with the explanation shown only after you submit.
  Plus an auto-built vocabulary check per lesson.
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
data/9th-grade/physical-science.js  course content (lessons, terms, question bank)
9th_Grade/Physical_Science/         source brief and reference material
8th_Grade/                          previous year's source material
```

## Adding a lesson or a course

Content is fully separated from presentation. Copy
`data/9th-grade/physical-science.js`, edit the `lessons`, `terms`, and `questions`
arrays, and add a `<script src>` tag for it in `index.html`. The engine reads whatever
`window.HC_CONTENT` contains — no changes to `app.js` are needed.

Question formats supported by the engine:

| Format | Answer shape |
|---|---|
| `multiple-choice` | `choices: []`, `answer: "…"` |
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
