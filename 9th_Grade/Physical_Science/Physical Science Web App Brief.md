# Physical Science Lessons 1-3 Web App

## Instructions for Claude

Build a polished, responsive study web app from the educational content in this file. The app is for reviewing three introductory physical science lessons. Treat the lesson content below as the source of truth.

### Product goal

Help a student learn the highlighted vocabulary, understand the major ideas, practice applying them, and identify concepts that need more review.

### Required experience

- Create a home dashboard with three lesson cards and overall progress.
- Give each lesson four views: Overview, Vocabulary, Practice, and Review.
- Turn every vocabulary record into a two-sided flashcard.
- Support study modes for all terms or one lesson at a time.
- Include shuffle, previous, next, flip, "Know it," and "Review again" controls.
- Build a mixed quiz from the question bank below.
- Support multiple-choice, matching, short-answer, and calculation questions.
- Give immediate feedback after objective questions.
- Show explanations after an answer is submitted.
- Track lesson progress, flashcard confidence, quiz score, and missed concepts in `localStorage`.
- Include a "Review missed terms" mode.
- Add a reset-progress control with a confirmation step.
- Make the layout mobile-first and keyboard accessible.
- Use semantic HTML, visible focus states, sufficient color contrast, and reduced-motion support.
- Do not require a server, account, database, or external API.
- Do not invent additional textbook claims. Examples may be added only when they are scientifically accurate and clearly presented as examples.

### Suggested visual direction

- Friendly science-lab aesthetic rather than a corporate dashboard.
- Deep navy and science blue as primary colors, warm gold as a restrained accent, and pale blue-gray surfaces.
- Clear typography, generous spacing, compact progress indicators, and simple science/graph icons.
- Use subtle motion for card flips and progress changes, with reduced-motion support.
- Avoid dense walls of text and oversized decorative hero sections.

### Recommended technical approach

- React with TypeScript.
- Components should be reusable and content-driven.
- Store lesson, vocabulary, quiz, and answer data in typed objects rather than hardcoding it into page markup.
- Keep content separate from presentation so more lessons can be added later.
- If a framework is needed, use a current stable React framework and provide normal local setup commands.

### Acceptance criteria

1. All three lessons and every term in this file appear in the app.
2. Flashcard progress persists after refresh.
3. The quiz can be completed from start to finish and produces a score.
4. Missed concepts are saved and can be reviewed separately.
5. The app works at phone, tablet, and desktop widths.
6. All controls can be used with a keyboard.
7. No answer is revealed before the learner submits or requests it.
8. A production build completes without errors.

---

## Course structure

### Lesson 1: The Methods of Science

**Focus question:** What are the steps of the methods of science?

**Big idea:** Science is a way to investigate the natural world. Investigations use evidence, controlled comparisons, careful data analysis, and explanations that remain open to revision.

#### Key ideas

- The three major branches introduced here are life science, Earth science, and physical science.
- Scientific explanations and models can change when new evidence or better technology becomes available.
- Scientists do not always follow one rigid procedure, but investigations often share a general pattern.
- A useful investigation begins with a clear problem, uses reliable background information, forms a testable hypothesis, tests it, analyzes data, and draws a conclusion.
- Experiments become interpretable when the independent variable, dependent variable, constants, and control are clearly identified.
- A scientific theory explains why or how; a scientific law describes a consistent natural pattern. A theory does not become a law.

#### Practical investigation sequence

1. State the problem as a clear why-or-how question.
2. Research reliable background information.
3. Form a testable hypothesis.
4. Test the hypothesis with observations, a model, or a controlled experiment.
5. Record observations and analyze organized data.
6. Draw a conclusion about whether the evidence supports the hypothesis.

#### High-yield distinctions

| Concept | What it does | Example |
|---|---|---|
| Independent variable | The factor deliberately changed | Amount of fertilizer |
| Dependent variable | The result measured | Plant height |
| Constant | A factor kept the same | Plant type, light, and water |
| Control | The comparison standard | A plant group receiving no fertilizer |
| Scientific theory | Explains why or how | An explanation supported by many investigations |
| Scientific law | Describes what happens | A consistent relationship found in nature |

#### Vocabulary

| Term | Study meaning |
|---|---|
| Life science | The branch of science that studies living things. |
| Earth science | The branch of science that investigates Earth and space. |
| Physical science | The branch of science that studies matter and energy. |
| Scientific model | A representation used to explain an object, system, event, or idea. Models can change when evidence improves. |
| Atom | A basic unit of matter. Historical atom models changed as scientists gathered new evidence. |
| Nucleus | The central part of an atom; it contains protons and neutrons. |
| Proton | A positively charged particle in an atom's nucleus. |
| Neutron | A particle with no electric charge in an atom's nucleus. |
| Scientific methods | A general pattern of investigation procedures used to answer questions and solve problems. |
| Problem | The why-or-how question an investigation is designed to answer. |
| Research / background information | Reliable observations and interpretations used to refine a question and prepare an investigation. |
| Hypothesis | A testable possible answer or explanation based on knowledge and observations. |
| Control | The standard against which experimental results are compared. |
| Controlled experiment | An investigation that tests one factor's effect on another while using a control. |
| Dependent variable | The measured result that changes in response to the independent variable. |
| Independent variable | The factor deliberately changed to test its effect. |
| Constant | A factor kept unchanged while other variables change. |
| Data | Recorded observations and organized measurements from an investigation. |
| Conclusion | A judgment based on data analysis, including whether the hypothesis is supported. |
| Scientific theory | An explanation supported by knowledge from many observations and investigations; it is not a guess. |
| Scientific law | A statement describing a pattern that appears consistently in nature; it describes what happens, not why. |
| Science / scientia | Science comes from the Latin word *scientia*, meaning knowledge. |

---

### Lesson 2: Standards of Measurement

**Focus question:** Which units are used when measuring length, volume, mass, electricity, and temperature?

**Big idea:** Scientists use agreed standards so measurements can be understood and compared. SI is based on powers of ten, and derived quantities such as volume and density combine measurements mathematically.

#### Key ideas

- Every measurement needs both a number and a unit.
- The International System of Units, or SI, gives scientists a shared measurement system.
- SI includes seven base quantities and units.
- Metric prefixes indicate powers of ten.
- Volume describes occupied space; mass describes the quantity of matter; density relates mass to volume.
- One milliliter and one cubic centimeter represent the same volume.

#### Seven SI base units

| Quantity | Base unit | Symbol |
|---|---|---|
| Length | meter | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

#### Metric prefix ladder

| Prefix | Symbol | Multiplying factor | Power of ten |
|---|---:|---:|---:|
| kilo | k | 1,000 | 10^3 |
| deci | d | 0.1 | 10^-1 |
| centi | c | 0.01 | 10^-2 |
| milli | m | 0.001 | 10^-3 |
| micro | μ | 0.000001 | 10^-6 |
| nano | n | 0.000000001 | 10^-9 |

#### Formulas and equivalences

- Rectangular-solid volume: `V = length × width × height`
- Equivalent volumes: `1 mL = 1 cm³`
- Density: `density = mass ÷ volume`, or `ρ = m / V`

#### Vocabulary

| Term | Study meaning |
|---|---|
| Standard of measurement | An exact, agreed-upon reference that lets measurements be compared; a measurement needs both a number and a unit. |
| SI | The International System of Units, the standard measurement system used by scientists worldwide. |
| Length — meter (m) | The SI base quantity and unit for length. |
| Mass — kilogram (kg) | The SI base quantity and unit for mass. |
| Time — second (s) | The SI base quantity and unit for time. |
| Electric current — ampere (A) | The SI base quantity and unit for electric current. |
| Temperature — kelvin (K) | The SI base quantity and unit for thermodynamic temperature. |
| Amount of substance — mole (mol) | The SI base quantity and unit for amount of substance. |
| Luminous intensity — candela (cd) | The SI base quantity and unit for intensity of light. |
| kilo- (k) | 1,000 times the base unit, or 10^3. |
| deci- (d) | One tenth of the base unit, or 10^-1. |
| centi- (c) | One hundredth of the base unit, or 10^-2. |
| milli- (m) | One thousandth of the base unit, or 10^-3. |
| micro- (μ) | One millionth of the base unit, or 10^-6. |
| nano- (n) | One billionth of the base unit, or 10^-9. |
| Volume | The amount of space occupied by an object. For a rectangular solid, `V = l × w × h`. |
| Cubic centimeter / milliliter | Equivalent volume units: `1 mL = 1 cm³`. |
| Matter | Anything that takes up space and has mass. |
| Mass | A measurement of the quantity of matter in an object. |
| Density | Mass per unit volume: `ρ = m / V`. |

---

### Lesson 3: Communicating with Graphs

**Focus question:** When would you use a bar graph instead of a line graph?

**Big idea:** Graphs turn data into a visual pattern. The graph type depends on whether the goal is to show continuous change, compare categories, or display parts of a whole.

#### Key ideas

- A graph is a visual display of information or data.
- The independent variable belongs on the horizontal x-axis.
- The dependent variable belongs on the vertical y-axis.
- A line graph is suited to continuous change or a relationship between variables, especially change over time.
- A bar graph compares distinct categories or data that do not change continuously.
- A circle graph shows how one fixed whole is divided into parts, usually percentages.

#### Choose the graph

| Graph type | Best use | Typical example |
|---|---|---|
| Line graph | Continuous change or a relationship between variables | Temperature over time |
| Bar graph | Comparison among separate categories | Students in different clubs |
| Circle graph / pie chart | Parts of one fixed whole | Percent of a budget by category |

#### Vocabulary

| Term | Study meaning |
|---|---|
| Graph | A visual display of information or data that can make patterns easier to see. |
| Line graph | Shows how a dependent variable changes as an independent variable changes; often used for continuous change or change over time. |
| Bar graph | Compares categories or displays data that do not change continuously. |
| Circle graph / pie chart | Shows how one fixed whole is divided into parts, usually as percentages. |
| x-axis | The horizontal axis; the independent variable is plotted here. |
| y-axis | The vertical axis; the dependent variable is plotted here. |

---

## Practice question bank

Each item includes an identifier, lesson, format, prompt, accepted answer or grading guidance, and explanation. Claude may convert short-answer questions to multiple choice when useful, but the correct scientific meaning must remain unchanged.

### Q1

- **Lesson:** 1
- **Format:** Short answer
- **Prompt:** Name the three main branches of science introduced in the lesson and state what each studies.
- **Answer:** Life science studies living things; Earth science investigates Earth and space; physical science studies matter and energy.
- **Explanation:** The branches group scientific study by subject, although real investigations can overlap them.

### Q2

- **Lesson:** 1
- **Format:** Short answer
- **Prompt:** Why can a scientific model change over time?
- **Answer:** New evidence, improved measurements, or new technology can reveal that an earlier model is incomplete.
- **Explanation:** Models represent the best available understanding and should be revised when evidence improves.

### Q3

- **Lesson:** 1
- **Format:** Ordering
- **Prompt:** Put these investigation steps in a sensible order: analyze data, form a hypothesis, state the problem, draw a conclusion, research, test the hypothesis.
- **Answer:** State the problem → research → form a hypothesis → test the hypothesis → analyze data → draw a conclusion.
- **Explanation:** Investigations may repeat or adjust steps, but this is the general pattern highlighted in the lesson.

### Q4

- **Lesson:** 1
- **Format:** Applied short answer
- **Prompt:** In a plant-growth experiment, the amount of fertilizer is changed and plant height is measured. Identify the independent and dependent variables.
- **Answer:** Independent variable: amount of fertilizer. Dependent variable: plant height.
- **Explanation:** The independent variable is changed; the dependent variable is measured in response.

### Q5

- **Lesson:** 1
- **Format:** Multiple choice
- **Prompt:** What is the purpose of a control in an experiment?
- **Choices:**
  - To provide a comparison standard
  - To change the dependent variable
  - To guarantee the hypothesis is correct
  - To replace repeated trials
- **Answer:** To provide a comparison standard.
- **Explanation:** Results from the test group are interpreted by comparing them with the control.

### Q6

- **Lesson:** 1
- **Format:** Compare and contrast
- **Prompt:** How is a scientific theory different from a scientific law?
- **Answer:** A theory explains why or how a natural pattern occurs; a law describes what consistently happens. A theory does not become a law.
- **Explanation:** The concepts serve different purposes rather than representing stages of certainty.

### Q7

- **Lesson:** 2
- **Format:** Multiple choice
- **Prompt:** Why must a measurement include both a number and a unit?
- **Choices:**
  - The unit gives the number an agreed meaning
  - Units make every number larger
  - A number alone is always an estimate
  - SI forbids whole numbers
- **Answer:** The unit gives the number an agreed meaning.
- **Explanation:** The same number can describe very different quantities when paired with different units.

### Q8

- **Lesson:** 2
- **Format:** Matching
- **Prompt:** Match mass, time, and temperature with their SI base units and symbols.
- **Answer:** Mass → kilogram (kg); time → second (s); temperature → kelvin (K).
- **Explanation:** These are three of the seven SI base units.

### Q9

- **Lesson:** 2
- **Format:** Calculation
- **Prompt:** Convert 3.2 km to meters.
- **Answer:** 3,200 m.
- **Explanation:** Kilo means 1,000, so `3.2 × 1,000 = 3,200`.

### Q10

- **Lesson:** 2
- **Format:** Calculation
- **Prompt:** Convert 450 mL to cubic centimeters.
- **Answer:** 450 cm³.
- **Explanation:** One milliliter equals one cubic centimeter.

### Q11

- **Lesson:** 2
- **Format:** Calculation
- **Prompt:** A sample has a mass of 96 g and a volume of 12 cm³. Find its density.
- **Answer:** 8 g/cm³.
- **Explanation:** `density = mass ÷ volume = 96 ÷ 12 = 8 g/cm³`.

### Q12

- **Lesson:** 3
- **Format:** Graph selection
- **Prompt:** Which graph is best for showing a student's temperature every hour during a day?
- **Answer:** A line graph.
- **Explanation:** Temperature changes continuously over time.

### Q13

- **Lesson:** 3
- **Format:** Graph selection
- **Prompt:** Which graph is best for comparing the number of students in four clubs?
- **Answer:** A bar graph.
- **Explanation:** The clubs are separate categories being compared.

### Q14

- **Lesson:** 3
- **Format:** Graph selection
- **Prompt:** Which graph is best for showing how a monthly budget is divided among categories?
- **Answer:** A circle graph or pie chart.
- **Explanation:** The categories are parts of one fixed whole.

### Q15

- **Lesson:** 3
- **Format:** Multiple choice
- **Prompt:** Where should the independent and dependent variables be plotted?
- **Choices:**
  - Independent on x; dependent on y
  - Independent on y; dependent on x
  - Both on x
  - Both on y
- **Answer:** Independent on x; dependent on y.
- **Explanation:** The x-axis is horizontal and holds the independent variable; the y-axis is vertical and holds the dependent variable.

---

## Suggested application data model

Use stable IDs so progress can be stored reliably.

```ts
type Lesson = {
  id: "lesson-1" | "lesson-2" | "lesson-3";
  number: number;
  title: string;
  focusQuestion: string;
  bigIdea: string;
  keyIdeas: string[];
  termIds: string[];
  questionIds: string[];
};

type Term = {
  id: string;
  lessonId: Lesson["id"];
  term: string;
  definition: string;
  category?: string;
};

type Question = {
  id: string;
  lessonId: Lesson["id"];
  format: "multiple-choice" | "matching" | "short-answer" | "ordering" | "calculation" | "graph-selection";
  prompt: string;
  choices?: string[];
  answer: string | string[];
  explanation: string;
};

type StudyProgress = {
  knownTermIds: string[];
  reviewTermIds: string[];
  questionAttempts: Record<string, { correct: boolean; attempts: number }>;
  bestQuizScore: number;
  lastStudiedLessonId?: Lesson["id"];
};
```

---

## Multiple-choice topic check

A second question bank (`bank: 'topic-mc'` in `data/9th-grade/physical-science.js`) turns every highlighted term into a four-choice item. It covers:

- Methods of Science: branches, models, atom parts, scientific-method sequence, hypothesis, control, independent/dependent variables, constants, data, conclusion, theory vs. law
- Standards of Measurement: SI, all seven base units, all six metric prefixes, volume and density formulas, `1 mL = 1 cm³`, matter, mass, and density
- Graphs: bar, line, and circle graphs, plus when to use each and where variables go on the axes

The home screen **Multiple choice quiz** shuffles the full set. Each lesson Practice tab also has a lesson-only multiple-choice run. Meanings match the vocabulary table above; no extra textbook claims were added.

---

## Source notes

- Primary lesson source: McGraw Hill Physical Science eBook, Lessons 1-3 — *The Methods of Science*, *Standards of Measurement*, and *Communicating with Graphs*.
- Reader URL supplied by the user: <https://prod.reader-ui.prod.mheducation.com/epub/urn:com.mheducation.openlearning:enterprise.roster:prod.us-east-1:section:00e9ae30-7ede-11f1-92b0-6967a82501b8/data-uuid-595238a7ad53439383a9d0b5cfa14f71>
- Vocabulary organization source: `Physical_Science_Highlighted_Terms.docx`, supplied by the user.
- The definitions in this brief are concise study paraphrases based on the highlighted lesson content.
