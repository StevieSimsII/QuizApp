/* Physical Science — 9th Grade
 * Content only. No presentation logic lives here.
 * Source: "Physical Science Web App Brief.md" (McGraw Hill Physical Science, Lessons 1-3)
 */
(function () {
  'use strict';

  var terms = [
    // ---- Lesson 1 ----
    { id: 'l1-branch-life', lessonId: 'lesson-1', category: 'Branches of science', term: 'Life science', definition: 'The branch of science that studies living things.' },
    { id: 'l1-branch-earth', lessonId: 'lesson-1', category: 'Branches of science', term: 'Earth science', definition: 'The branch of science that investigates Earth and space.' },
    { id: 'l1-branch-physical', lessonId: 'lesson-1', category: 'Branches of science', term: 'Physical science', definition: 'The branch of science that studies matter and energy.' },
    { id: 'l1-model', lessonId: 'lesson-1', category: 'Models', term: 'Scientific model', definition: 'A representation used to explain an object, system, event, or idea. Models can change when evidence improves.' },
    { id: 'l1-atom', lessonId: 'lesson-1', category: 'Models', term: 'Atom', definition: 'A basic unit of matter. Historical atom models changed as scientists gathered new evidence.' },
    { id: 'l1-nucleus', lessonId: 'lesson-1', category: 'Models', term: 'Nucleus', definition: 'The central part of an atom; it contains protons and neutrons.' },
    { id: 'l1-proton', lessonId: 'lesson-1', category: 'Models', term: 'Proton', definition: "A positively charged particle in an atom's nucleus." },
    { id: 'l1-neutron', lessonId: 'lesson-1', category: 'Models', term: 'Neutron', definition: "A particle with no electric charge in an atom's nucleus." },
    { id: 'l1-methods', lessonId: 'lesson-1', category: 'Investigation steps', term: 'Scientific methods', definition: 'A general pattern of investigation procedures used to answer questions and solve problems.' },
    { id: 'l1-problem', lessonId: 'lesson-1', category: 'Investigation steps', term: 'Problem', definition: 'The why-or-how question an investigation is designed to answer.' },
    { id: 'l1-research', lessonId: 'lesson-1', category: 'Investigation steps', term: 'Research / background information', definition: 'Reliable observations and interpretations used to refine a question and prepare an investigation.' },
    { id: 'l1-hypothesis', lessonId: 'lesson-1', category: 'Investigation steps', term: 'Hypothesis', definition: 'A testable possible answer or explanation based on knowledge and observations.' },
    { id: 'l1-control', lessonId: 'lesson-1', category: 'Experimental design', term: 'Control', definition: 'The standard against which experimental results are compared.' },
    { id: 'l1-controlled-exp', lessonId: 'lesson-1', category: 'Experimental design', term: 'Controlled experiment', definition: "An investigation that tests one factor's effect on another while using a control." },
    { id: 'l1-dependent', lessonId: 'lesson-1', category: 'Experimental design', term: 'Dependent variable', definition: 'The measured result that changes in response to the independent variable.' },
    { id: 'l1-independent', lessonId: 'lesson-1', category: 'Experimental design', term: 'Independent variable', definition: 'The factor deliberately changed to test its effect.' },
    { id: 'l1-constant', lessonId: 'lesson-1', category: 'Experimental design', term: 'Constant', definition: 'A factor kept unchanged while other variables change.' },
    { id: 'l1-data', lessonId: 'lesson-1', category: 'Investigation steps', term: 'Data', definition: 'Recorded observations and organized measurements from an investigation.' },
    { id: 'l1-conclusion', lessonId: 'lesson-1', category: 'Investigation steps', term: 'Conclusion', definition: 'A judgment based on data analysis, including whether the hypothesis is supported.' },
    { id: 'l1-theory', lessonId: 'lesson-1', category: 'Theory and law', term: 'Scientific theory', definition: 'An explanation supported by knowledge from many observations and investigations; it is not a guess.' },
    { id: 'l1-law', lessonId: 'lesson-1', category: 'Theory and law', term: 'Scientific law', definition: 'A statement describing a pattern that appears consistently in nature; it describes what happens, not why.' },
    { id: 'l1-scientia', lessonId: 'lesson-1', category: 'Word origins', term: 'Science / scientia', definition: 'Science comes from the Latin word scientia, meaning knowledge.' },

    // ---- Lesson 2 ----
    { id: 'l2-standard', lessonId: 'lesson-2', category: 'Measurement basics', term: 'Standard of measurement', definition: 'An exact, agreed-upon reference that lets measurements be compared; a measurement needs both a number and a unit.' },
    { id: 'l2-si', lessonId: 'lesson-2', category: 'Measurement basics', term: 'SI', definition: 'The International System of Units, the standard measurement system used by scientists worldwide.' },
    { id: 'l2-length', lessonId: 'lesson-2', category: 'SI base units', term: 'Length — meter (m)', definition: 'The SI base quantity and unit for length.' },
    { id: 'l2-mass-unit', lessonId: 'lesson-2', category: 'SI base units', term: 'Mass — kilogram (kg)', definition: 'The SI base quantity and unit for mass.' },
    { id: 'l2-time', lessonId: 'lesson-2', category: 'SI base units', term: 'Time — second (s)', definition: 'The SI base quantity and unit for time.' },
    { id: 'l2-current', lessonId: 'lesson-2', category: 'SI base units', term: 'Electric current — ampere (A)', definition: 'The SI base quantity and unit for electric current.' },
    { id: 'l2-temp', lessonId: 'lesson-2', category: 'SI base units', term: 'Temperature — kelvin (K)', definition: 'The SI base quantity and unit for thermodynamic temperature.' },
    { id: 'l2-mole', lessonId: 'lesson-2', category: 'SI base units', term: 'Amount of substance — mole (mol)', definition: 'The SI base quantity and unit for amount of substance.' },
    { id: 'l2-candela', lessonId: 'lesson-2', category: 'SI base units', term: 'Luminous intensity — candela (cd)', definition: 'The SI base quantity and unit for intensity of light.' },
    { id: 'l2-kilo', lessonId: 'lesson-2', category: 'Metric prefixes', term: 'kilo- (k)', definition: '1,000 times the base unit, or 10³.' },
    { id: 'l2-deci', lessonId: 'lesson-2', category: 'Metric prefixes', term: 'deci- (d)', definition: 'One tenth of the base unit, or 10⁻¹.' },
    { id: 'l2-centi', lessonId: 'lesson-2', category: 'Metric prefixes', term: 'centi- (c)', definition: 'One hundredth of the base unit, or 10⁻².' },
    { id: 'l2-milli', lessonId: 'lesson-2', category: 'Metric prefixes', term: 'milli- (m)', definition: 'One thousandth of the base unit, or 10⁻³.' },
    { id: 'l2-micro', lessonId: 'lesson-2', category: 'Metric prefixes', term: 'micro- (μ)', definition: 'One millionth of the base unit, or 10⁻⁶.' },
    { id: 'l2-nano', lessonId: 'lesson-2', category: 'Metric prefixes', term: 'nano- (n)', definition: 'One billionth of the base unit, or 10⁻⁹.' },
    { id: 'l2-volume', lessonId: 'lesson-2', category: 'Derived quantities', term: 'Volume', definition: 'The amount of space occupied by an object. For a rectangular solid, V = l × w × h.' },
    { id: 'l2-cc-ml', lessonId: 'lesson-2', category: 'Derived quantities', term: 'Cubic centimeter / milliliter', definition: 'Equivalent volume units: 1 mL = 1 cm³.' },
    { id: 'l2-matter', lessonId: 'lesson-2', category: 'Derived quantities', term: 'Matter', definition: 'Anything that takes up space and has mass.' },
    { id: 'l2-mass', lessonId: 'lesson-2', category: 'Derived quantities', term: 'Mass', definition: 'A measurement of the quantity of matter in an object.' },
    { id: 'l2-density', lessonId: 'lesson-2', category: 'Derived quantities', term: 'Density', definition: 'Mass per unit volume: ρ = m / V.' },

    // ---- Lesson 3 ----
    { id: 'l3-graph', lessonId: 'lesson-3', category: 'Graph basics', term: 'Graph', definition: 'A visual display of information or data that can make patterns easier to see.' },
    { id: 'l3-line', lessonId: 'lesson-3', category: 'Graph types', term: 'Line graph', definition: 'Shows how a dependent variable changes as an independent variable changes; often used for continuous change or change over time.' },
    { id: 'l3-bar', lessonId: 'lesson-3', category: 'Graph types', term: 'Bar graph', definition: 'Compares categories or displays data that do not change continuously.' },
    { id: 'l3-circle', lessonId: 'lesson-3', category: 'Graph types', term: 'Circle graph / pie chart', definition: 'Shows how one fixed whole is divided into parts, usually as percentages.' },
    { id: 'l3-x', lessonId: 'lesson-3', category: 'Graph basics', term: 'x-axis', definition: 'The horizontal axis; the independent variable is plotted here.' },
    { id: 'l3-y', lessonId: 'lesson-3', category: 'Graph basics', term: 'y-axis', definition: 'The vertical axis; the dependent variable is plotted here.' }
  ];

  var questions = [
    {
      id: 'q1', lessonId: 'lesson-1', format: 'short-answer',
      prompt: 'Name the three main branches of science introduced in the lesson and state what each studies.',
      answer: 'Life science studies living things; Earth science investigates Earth and space; physical science studies matter and energy.',
      keywords: [['living'], ['earth', 'space'], ['matter'], ['energy']],
      explanation: 'The branches group scientific study by subject, although real investigations can overlap them.'
    },
    {
      id: 'q2', lessonId: 'lesson-1', format: 'short-answer',
      prompt: 'Why can a scientific model change over time?',
      answer: 'New evidence, improved measurements, or new technology can reveal that an earlier model is incomplete.',
      keywords: [['evidence', 'technology', 'measurement', 'measurements', 'data']],
      explanation: 'Models represent the best available understanding and should be revised when evidence improves.'
    },
    {
      id: 'q3', lessonId: 'lesson-1', format: 'ordering',
      prompt: 'Put these investigation steps in a sensible order.',
      items: ['Analyze data', 'Form a hypothesis', 'State the problem', 'Draw a conclusion', 'Research', 'Test the hypothesis'],
      answer: ['State the problem', 'Research', 'Form a hypothesis', 'Test the hypothesis', 'Analyze data', 'Draw a conclusion'],
      explanation: 'Investigations may repeat or adjust steps, but this is the general pattern highlighted in the lesson.'
    },
    {
      id: 'q4', lessonId: 'lesson-1', format: 'short-answer',
      prompt: 'In a plant-growth experiment, the amount of fertilizer is changed and plant height is measured. Identify the independent and dependent variables.',
      answer: 'Independent variable: amount of fertilizer. Dependent variable: plant height.',
      keywords: [['fertilizer'], ['height']],
      explanation: 'The independent variable is changed; the dependent variable is measured in response.'
    },
    {
      id: 'q5', lessonId: 'lesson-1', format: 'multiple-choice',
      prompt: 'What is the purpose of a control in an experiment?',
      choices: ['To provide a comparison standard', 'To change the dependent variable', 'To guarantee the hypothesis is correct', 'To replace repeated trials'],
      answer: 'To provide a comparison standard',
      explanation: 'Results from the test group are interpreted by comparing them with the control.'
    },
    {
      id: 'q6', lessonId: 'lesson-1', format: 'short-answer',
      prompt: 'How is a scientific theory different from a scientific law?',
      answer: 'A theory explains why or how a natural pattern occurs; a law describes what consistently happens. A theory does not become a law.',
      keywords: [['explain', 'explains', 'why', 'how'], ['describe', 'describes', 'what', 'pattern']],
      explanation: 'The concepts serve different purposes rather than representing stages of certainty.'
    },
    {
      id: 'q7', lessonId: 'lesson-2', format: 'multiple-choice',
      prompt: 'Why must a measurement include both a number and a unit?',
      choices: ['The unit gives the number an agreed meaning', 'Units make every number larger', 'A number alone is always an estimate', 'SI forbids whole numbers'],
      answer: 'The unit gives the number an agreed meaning',
      explanation: 'The same number can describe very different quantities when paired with different units.'
    },
    {
      id: 'q8', lessonId: 'lesson-2', format: 'matching',
      prompt: 'Match each quantity with its SI base unit and symbol.',
      pairs: [
        { left: 'Mass', right: 'kilogram (kg)' },
        { left: 'Time', right: 'second (s)' },
        { left: 'Temperature', right: 'kelvin (K)' }
      ],
      answer: 'Mass → kilogram (kg); time → second (s); temperature → kelvin (K).',
      explanation: 'These are three of the seven SI base units.'
    },
    {
      id: 'q9', lessonId: 'lesson-2', format: 'calculation',
      prompt: 'Convert 3.2 km to meters.',
      value: 3200, unit: 'm', tolerance: 0,
      answer: '3,200 m',
      explanation: 'Kilo means 1,000, so 3.2 × 1,000 = 3,200 m.'
    },
    {
      id: 'q10', lessonId: 'lesson-2', format: 'calculation',
      prompt: 'Convert 450 mL to cubic centimeters.',
      value: 450, unit: 'cm³', tolerance: 0,
      answer: '450 cm³',
      explanation: 'One milliliter equals one cubic centimeter.'
    },
    {
      id: 'q11', lessonId: 'lesson-2', format: 'calculation',
      prompt: 'A sample has a mass of 96 g and a volume of 12 cm³. Find its density.',
      value: 8, unit: 'g/cm³', tolerance: 0,
      answer: '8 g/cm³',
      explanation: 'density = mass ÷ volume = 96 ÷ 12 = 8 g/cm³.'
    },
    {
      id: 'q12', lessonId: 'lesson-3', format: 'graph-selection',
      prompt: "Which graph is best for showing a student's temperature every hour during a day?",
      choices: ['Line graph', 'Bar graph', 'Circle graph / pie chart'],
      answer: 'Line graph',
      explanation: 'Temperature changes continuously over time.'
    },
    {
      id: 'q13', lessonId: 'lesson-3', format: 'graph-selection',
      prompt: 'Which graph is best for comparing the number of students in four clubs?',
      choices: ['Line graph', 'Bar graph', 'Circle graph / pie chart'],
      answer: 'Bar graph',
      explanation: 'The clubs are separate categories being compared.'
    },
    {
      id: 'q14', lessonId: 'lesson-3', format: 'graph-selection',
      prompt: 'Which graph is best for showing how a monthly budget is divided among categories?',
      choices: ['Line graph', 'Bar graph', 'Circle graph / pie chart'],
      answer: 'Circle graph / pie chart',
      explanation: 'The categories are parts of one fixed whole.'
    },
    {
      id: 'q15', lessonId: 'lesson-3', format: 'multiple-choice',
      prompt: 'Where should the independent and dependent variables be plotted?',
      choices: ['Independent on x; dependent on y', 'Independent on y; dependent on x', 'Both on x', 'Both on y'],
      answer: 'Independent on x; dependent on y',
      explanation: 'The x-axis is horizontal and holds the independent variable; the y-axis is vertical and holds the dependent variable.'
    }
  ];

  var lessons = [
    {
      id: 'lesson-1',
      number: 1,
      title: 'The Methods of Science',
      focusQuestion: 'What are the steps of the methods of science?',
      bigIdea: 'Science is a way to investigate the natural world. Investigations use evidence, controlled comparisons, careful data analysis, and explanations that remain open to revision.',
      keyIdeas: [
        'The three major branches introduced here are life science, Earth science, and physical science.',
        'Scientific explanations and models can change when new evidence or better technology becomes available.',
        'Scientists do not always follow one rigid procedure, but investigations often share a general pattern.',
        'A useful investigation begins with a clear problem, uses reliable background information, forms a testable hypothesis, tests it, analyzes data, and draws a conclusion.',
        'Experiments become interpretable when the independent variable, dependent variable, constants, and control are clearly identified.',
        'A scientific theory explains why or how; a scientific law describes a consistent natural pattern. A theory does not become a law.'
      ],
      steps: [
        'State the problem as a clear why-or-how question.',
        'Research reliable background information.',
        'Form a testable hypothesis.',
        'Test the hypothesis with observations, a model, or a controlled experiment.',
        'Record observations and analyze organized data.',
        'Draw a conclusion about whether the evidence supports the hypothesis.'
      ],
      tables: [
        {
          caption: 'High-yield distinctions',
          headers: ['Concept', 'What it does', 'Example'],
          rows: [
            ['Independent variable', 'The factor deliberately changed', 'Amount of fertilizer'],
            ['Dependent variable', 'The result measured', 'Plant height'],
            ['Constant', 'A factor kept the same', 'Plant type, light, and water'],
            ['Control', 'The comparison standard', 'A plant group receiving no fertilizer'],
            ['Scientific theory', 'Explains why or how', 'An explanation supported by many investigations'],
            ['Scientific law', 'Describes what happens', 'A consistent relationship found in nature']
          ]
        }
      ],
      formulas: []
    },
    {
      id: 'lesson-2',
      number: 2,
      title: 'Standards of Measurement',
      focusQuestion: 'Which units are used when measuring length, volume, mass, electricity, and temperature?',
      bigIdea: 'Scientists use agreed standards so measurements can be understood and compared. SI is based on powers of ten, and derived quantities such as volume and density combine measurements mathematically.',
      keyIdeas: [
        'Every measurement needs both a number and a unit.',
        'The International System of Units, or SI, gives scientists a shared measurement system.',
        'SI includes seven base quantities and units.',
        'Metric prefixes indicate powers of ten.',
        'Volume describes occupied space; mass describes the quantity of matter; density relates mass to volume.',
        'One milliliter and one cubic centimeter represent the same volume.'
      ],
      steps: [],
      tables: [
        {
          caption: 'Seven SI base units',
          headers: ['Quantity', 'Base unit', 'Symbol'],
          rows: [
            ['Length', 'meter', 'm'],
            ['Mass', 'kilogram', 'kg'],
            ['Time', 'second', 's'],
            ['Electric current', 'ampere', 'A'],
            ['Temperature', 'kelvin', 'K'],
            ['Amount of substance', 'mole', 'mol'],
            ['Luminous intensity', 'candela', 'cd']
          ]
        },
        {
          caption: 'Metric prefix ladder',
          headers: ['Prefix', 'Symbol', 'Multiplying factor', 'Power of ten'],
          rows: [
            ['kilo', 'k', '1,000', '10³'],
            ['deci', 'd', '0.1', '10⁻¹'],
            ['centi', 'c', '0.01', '10⁻²'],
            ['milli', 'm', '0.001', '10⁻³'],
            ['micro', 'μ', '0.000001', '10⁻⁶'],
            ['nano', 'n', '0.000000001', '10⁻⁹']
          ]
        }
      ],
      formulas: [
        { label: 'Rectangular-solid volume', expr: 'V = length × width × height' },
        { label: 'Equivalent volumes', expr: '1 mL = 1 cm³' },
        { label: 'Density', expr: 'ρ = m / V' }
      ]
    },
    {
      id: 'lesson-3',
      number: 3,
      title: 'Communicating with Graphs',
      focusQuestion: 'When would you use a bar graph instead of a line graph?',
      bigIdea: 'Graphs turn data into a visual pattern. The graph type depends on whether the goal is to show continuous change, compare categories, or display parts of a whole.',
      keyIdeas: [
        'A graph is a visual display of information or data.',
        'The independent variable belongs on the horizontal x-axis.',
        'The dependent variable belongs on the vertical y-axis.',
        'A line graph is suited to continuous change or a relationship between variables, especially change over time.',
        'A bar graph compares distinct categories or data that do not change continuously.',
        'A circle graph shows how one fixed whole is divided into parts, usually percentages.'
      ],
      steps: [],
      tables: [
        {
          caption: 'Choose the graph',
          headers: ['Graph type', 'Best use', 'Typical example'],
          rows: [
            ['Line graph', 'Continuous change or a relationship between variables', 'Temperature over time'],
            ['Bar graph', 'Comparison among separate categories', 'Students in different clubs'],
            ['Circle graph / pie chart', 'Parts of one fixed whole', 'Percent of a budget by category']
          ]
        }
      ],
      formulas: []
    }
  ];

  // Attach term/question ids to their lesson.
  lessons.forEach(function (lesson) {
    lesson.termIds = terms.filter(function (t) { return t.lessonId === lesson.id; }).map(function (t) { return t.id; });
    lesson.questionIds = questions.filter(function (q) { return q.lessonId === lesson.id; }).map(function (q) { return q.id; });
  });

  window.HC_CONTENT = window.HC_CONTENT || { courses: [] };
  window.HC_CONTENT.courses.push({
    id: 'physical-science',
    year: '9th Grade',
    subject: 'Physical Science',
    tagline: 'Lessons 1–3',
    source: 'McGraw Hill Physical Science eBook — The Methods of Science, Standards of Measurement, and Communicating with Graphs.',
    readerUrl: 'https://prod.reader-ui.prod.mheducation.com/epub/urn:com.mheducation.openlearning:enterprise.roster:prod.us-east-1:section:00e9ae30-7ede-11f1-92b0-6967a82501b8/data-uuid-595238a7ad53439383a9d0b5cfa14f71',
    lessons: lessons,
    terms: terms,
    questions: questions
  });
})();
