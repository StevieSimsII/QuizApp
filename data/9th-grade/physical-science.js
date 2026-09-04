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
    },

    // =========================================================
    // Multiple-choice topic check — every highlighted term
    // =========================================================

    // ---- Lesson 1: Methods of Science ----
    {
      id: 'mc-life-science', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does life science study?',
      choices: ['Living things', 'Earth and space', 'Matter and energy', 'Numbers and equations only'],
      answer: 'Living things',
      explanation: 'Life science is the branch of science that studies living things.'
    },
    {
      id: 'mc-earth-science', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does Earth science investigate?',
      choices: ['Living things', 'Earth and space', 'Matter and energy', 'Only weather on Earth'],
      answer: 'Earth and space',
      explanation: 'Earth science is the branch of science that investigates Earth and space.'
    },
    {
      id: 'mc-physical-science', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does physical science study?',
      choices: ['Living things', 'Earth and space', 'Matter and energy', 'Only chemical reactions'],
      answer: 'Matter and energy',
      explanation: 'Physical science is the branch of science that studies matter and energy.'
    },
    {
      id: 'mc-scientific-model', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a scientific model?',
      choices: [
        'A representation used to explain an object, system, or idea',
        'A guess that cannot be tested',
        'A law that never changes',
        'A measurement that needs no unit'
      ],
      answer: 'A representation used to explain an object, system, or idea',
      explanation: 'A scientific model represents an object, system, event, or idea so it can be explained and studied.'
    },
    {
      id: 'mc-model-change', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'When can a scientific model change?',
      choices: [
        'When new evidence is discovered',
        'Only if a scientific law is repealed',
        'Never — models are permanent',
        'Only when the control is removed'
      ],
      answer: 'When new evidence is discovered',
      explanation: 'Models can change when new evidence, better measurements, or new technology shows that an earlier model is incomplete.'
    },
    {
      id: 'mc-atom', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is an atom?',
      choices: [
        'The basic unit of matter',
        'The center of a nucleus',
        'A negatively charged particle only',
        'A standard used for comparison'
      ],
      answer: 'The basic unit of matter',
      explanation: 'An atom is a basic unit of matter. Historical atom models changed as scientists gathered new evidence.'
    },
    {
      id: 'mc-nucleus', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the nucleus of an atom?',
      choices: [
        'The center of an atom containing protons and neutrons',
        'A particle with no electric charge',
        'A positively charged particle outside the atom',
        'The amount of space an atom occupies'
      ],
      answer: 'The center of an atom containing protons and neutrons',
      explanation: 'The nucleus is the central part of an atom; it contains protons and neutrons.'
    },
    {
      id: 'mc-proton', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a proton?',
      choices: [
        'A positively charged particle in the nucleus',
        'A particle with no electric charge in the nucleus',
        'The basic unit of matter',
        'A representation of an idea'
      ],
      answer: 'A positively charged particle in the nucleus',
      explanation: "A proton is a positively charged particle in an atom's nucleus."
    },
    {
      id: 'mc-neutron', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a neutron?',
      choices: [
        'A particle with no electric charge in the nucleus',
        'A positively charged particle in the nucleus',
        'The center of an atom',
        'Anything that takes up space and has mass'
      ],
      answer: 'A particle with no electric charge in the nucleus',
      explanation: "A neutron is a particle with no electric charge in an atom's nucleus."
    },
    {
      id: 'mc-method-sequence', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which sequence is the general scientific method pattern from the lesson?',
      choices: [
        'Problem → Research → Hypothesis → Experiment → Data → Conclusion',
        'Hypothesis → Problem → Conclusion → Data → Research → Experiment',
        'Data → Experiment → Hypothesis → Research → Problem → Conclusion',
        'Research → Conclusion → Experiment → Hypothesis → Data → Problem'
      ],
      answer: 'Problem → Research → Hypothesis → Experiment → Data → Conclusion',
      explanation: 'Investigations may repeat or adjust steps, but this is the general pattern: state the problem, research, form a hypothesis, test it, analyze data, and draw a conclusion.'
    },
    {
      id: 'mc-hypothesis', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a hypothesis?',
      choices: [
        'A possible explanation that can be tested',
        'A judgment based on data after the experiment',
        'The standard used for comparison',
        'A pattern that always happens in nature'
      ],
      answer: 'A possible explanation that can be tested',
      explanation: 'A hypothesis is a testable possible answer or explanation based on knowledge and observations.'
    },
    {
      id: 'mc-control', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a control in an experiment?',
      choices: [
        'The standard used for comparison',
        'What you deliberately change',
        'What you measure in response',
        'Something you keep the same in every group'
      ],
      answer: 'The standard used for comparison',
      explanation: 'A control is the standard against which experimental results are compared.'
    },
    {
      id: 'mc-independent', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the independent variable?',
      choices: [
        'What you deliberately change',
        'What changes in response',
        'The standard used for comparison',
        'A recorded observation'
      ],
      answer: 'What you deliberately change',
      explanation: 'The independent variable is the factor deliberately changed to test its effect. Memory trick: I change the Independent.'
    },
    {
      id: 'mc-dependent', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the dependent variable?',
      choices: [
        'What changes in response',
        'What you deliberately change',
        'Something you keep the same',
        'A possible explanation that can be tested'
      ],
      answer: 'What changes in response',
      explanation: 'The dependent variable is the measured result that changes in response to the independent variable. Memory trick: I measure the Dependent.'
    },
    {
      id: 'mc-constant', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a constant in an experiment?',
      choices: [
        'Something you keep the same',
        'The standard used for comparison',
        'What you deliberately change',
        'A judgment based on the data'
      ],
      answer: 'Something you keep the same',
      explanation: 'A constant is a factor kept unchanged while other variables change.'
    },
    {
      id: 'mc-data', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is data?',
      choices: [
        'Recorded observations and information',
        'A possible explanation that can be tested',
        'The factor you deliberately change',
        'A representation of an idea'
      ],
      answer: 'Recorded observations and information',
      explanation: 'Data are recorded observations and organized measurements from an investigation.'
    },
    {
      id: 'mc-conclusion', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a conclusion in a scientific investigation?',
      choices: [
        'A judgment based on the data and whether the hypothesis was supported',
        'The first step of every investigation',
        'The factor you keep unchanged',
        'A measurement that needs no unit'
      ],
      answer: 'A judgment based on the data and whether the hypothesis was supported',
      explanation: 'A conclusion is a judgment based on data analysis, including whether the hypothesis is supported.'
    },
    {
      id: 'mc-iv-dv-applied', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'In a plant-growth experiment, the amount of fertilizer is changed and plant height is measured. What are the independent and dependent variables?',
      choices: [
        'Independent: amount of fertilizer; dependent: plant height',
        'Independent: plant height; dependent: amount of fertilizer',
        'Independent: plant type; dependent: the control',
        'Independent: water; dependent: the hypothesis'
      ],
      answer: 'Independent: amount of fertilizer; dependent: plant height',
      explanation: 'You change the independent variable (fertilizer) and measure the dependent variable (plant height).'
    },
    {
      id: 'mc-control-vs-constant', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'How is a control different from a constant?',
      choices: [
        'A control is the comparison standard; a constant is a factor kept the same',
        'A control is changed on purpose; a constant is measured',
        'A control is a hypothesis; a constant is a law',
        'There is no difference — the words mean the same thing'
      ],
      answer: 'A control is the comparison standard; a constant is a factor kept the same',
      explanation: 'The control is the standard used for comparison. Constants are factors you keep the same in every group, such as plant type, light, and water.'
    },
    {
      id: 'mc-theory', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a scientific theory?',
      choices: [
        'An explanation supported by many observations and investigations',
        'A guess that has not been tested',
        'A statement that only describes what happens, not why',
        'A hypothesis that was tested once'
      ],
      answer: 'An explanation supported by many observations and investigations',
      explanation: 'A scientific theory is an explanation supported by knowledge from many observations and investigations; it is not a guess.'
    },
    {
      id: 'mc-law', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is a scientific law?',
      choices: [
        'A statement that describes what consistently happens in nature',
        'An explanation of why a pattern occurs',
        'A possible explanation that can be tested once',
        'A model that never changes'
      ],
      answer: 'A statement that describes what consistently happens in nature',
      explanation: 'A scientific law describes a pattern that appears consistently in nature. It describes what happens, not why.'
    },
    {
      id: 'mc-theory-vs-law', lessonId: 'lesson-1', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'How is a scientific theory different from a scientific law?',
      choices: [
        'A theory explains why or how; a law describes what consistently happens',
        'A theory is a guess; a law is a hypothesis',
        'A theory becomes a law after one experiment',
        'A law explains why; a theory only lists data'
      ],
      answer: 'A theory explains why or how; a law describes what consistently happens',
      explanation: 'The concepts serve different purposes rather than representing stages of certainty. A theory does not become a law.'
    },

    // ---- Lesson 2: Standards of Measurement ----
    {
      id: 'mc-si', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does SI stand for?',
      choices: [
        'International System of Units',
        'Standard Inventory of instruments',
        'Scientific Index of measurements',
        'International Scale of intensity'
      ],
      answer: 'International System of Units',
      explanation: 'SI is the International System of Units, the standard measurement system used by scientists worldwide.'
    },
    {
      id: 'mc-si-length', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the SI unit and symbol for length?',
      choices: ['meter (m)', 'kilogram (kg)', 'second (s)', 'kelvin (K)'],
      answer: 'meter (m)',
      explanation: 'The SI base unit for length is the meter, symbol m.'
    },
    {
      id: 'mc-si-mass', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the SI unit and symbol for mass?',
      choices: ['kilogram (kg)', 'meter (m)', 'mole (mol)', 'candela (cd)'],
      answer: 'kilogram (kg)',
      explanation: 'The SI base unit for mass is the kilogram, symbol kg.'
    },
    {
      id: 'mc-si-time', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the SI unit and symbol for time?',
      choices: ['second (s)', 'ampere (A)', 'meter (m)', 'kelvin (K)'],
      answer: 'second (s)',
      explanation: 'The SI base unit for time is the second, symbol s.'
    },
    {
      id: 'mc-si-current', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the SI unit and symbol for electric current?',
      choices: ['ampere (A)', 'candela (cd)', 'mole (mol)', 'second (s)'],
      answer: 'ampere (A)',
      explanation: 'The SI base unit for electric current is the ampere, symbol A.'
    },
    {
      id: 'mc-si-temp', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the SI unit and symbol for temperature?',
      choices: ['kelvin (K)', 'kilogram (kg)', 'candela (cd)', 'meter (m)'],
      answer: 'kelvin (K)',
      explanation: 'The SI base unit for thermodynamic temperature is the kelvin, symbol K.'
    },
    {
      id: 'mc-si-mole', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the SI unit and symbol for amount of substance?',
      choices: ['mole (mol)', 'ampere (A)', 'kilogram (kg)', 'second (s)'],
      answer: 'mole (mol)',
      explanation: 'The SI base unit for amount of substance is the mole, symbol mol.'
    },
    {
      id: 'mc-si-candela', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the SI unit and symbol for luminous intensity?',
      choices: ['candela (cd)', 'ampere (A)', 'kelvin (K)', 'mole (mol)'],
      answer: 'candela (cd)',
      explanation: 'The SI base unit for intensity of light is the candela, symbol cd.'
    },
    {
      id: 'mc-kilo', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does the metric prefix kilo- mean?',
      choices: ['1,000', '0.1', '0.01', '0.001'],
      answer: '1,000',
      explanation: 'Kilo- means 1,000 times the base unit, or 10³.'
    },
    {
      id: 'mc-deci', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does the metric prefix deci- mean?',
      choices: ['0.1', '1,000', '0.01', '0.000001'],
      answer: '0.1',
      explanation: 'Deci- means one tenth of the base unit, or 10⁻¹.'
    },
    {
      id: 'mc-centi', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does the metric prefix centi- mean?',
      choices: ['0.01', '0.1', '0.001', '1,000'],
      answer: '0.01',
      explanation: 'Centi- means one hundredth of the base unit, or 10⁻².'
    },
    {
      id: 'mc-milli', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does the metric prefix milli- mean?',
      choices: ['0.001', '0.01', '0.1', '0.000001'],
      answer: '0.001',
      explanation: 'Milli- means one thousandth of the base unit, or 10⁻³.'
    },
    {
      id: 'mc-micro', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does the metric prefix micro- mean?',
      choices: ['0.000001', '0.001', '0.000000001', '0.01'],
      answer: '0.000001',
      explanation: 'Micro- means one millionth of the base unit, or 10⁻⁶.'
    },
    {
      id: 'mc-nano', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What does the metric prefix nano- mean?',
      choices: ['0.000000001', '0.000001', '0.001', '1,000'],
      answer: '0.000000001',
      explanation: 'Nano- means one billionth of the base unit, or 10⁻⁹.'
    },
    {
      id: 'mc-kilo-convert', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Convert 3.2 km to meters.',
      choices: ['3,200 m', '320 m', '32 m', '0.0032 m'],
      answer: '3,200 m',
      explanation: 'Kilo means 1,000, so 3.2 × 1,000 = 3,200 m.'
    },
    {
      id: 'mc-volume-formula', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the formula for the volume of a rectangular solid?',
      choices: [
        'V = length × width × height',
        'V = mass ÷ density',
        'V = length + width + height',
        'V = mass × volume'
      ],
      answer: 'V = length × width × height',
      explanation: 'The volume of a rectangular solid is length times width times height.'
    },
    {
      id: 'mc-volume-calc', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'A rectangular box is 4 cm long, 3 cm wide, and 2 cm high. What is its volume?',
      choices: ['24 cm³', '9 cm³', '18 cm³', '12 cm³'],
      answer: '24 cm³',
      explanation: 'V = length × width × height = 4 × 3 × 2 = 24 cm³.'
    },
    {
      id: 'mc-density-formula', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is the formula for density?',
      choices: [
        'ρ = mass ÷ volume',
        'ρ = volume ÷ mass',
        'ρ = length × width × height',
        'ρ = mass × volume'
      ],
      answer: 'ρ = mass ÷ volume',
      explanation: 'Density is mass per unit volume: ρ = m / V.'
    },
    {
      id: 'mc-density-calc', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'A sample has a mass of 96 g and a volume of 12 cm³. What is its density?',
      choices: ['8 g/cm³', '0.125 g/cm³', '108 g/cm³', '84 g/cm³'],
      answer: '8 g/cm³',
      explanation: 'density = mass ÷ volume = 96 ÷ 12 = 8 g/cm³.'
    },
    {
      id: 'mc-ml-cm3', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'How are milliliters and cubic centimeters related?',
      choices: [
        '1 mL = 1 cm³',
        '1 mL = 10 cm³',
        '1 mL = 0.001 cm³',
        '1 mL = 1,000 cm³'
      ],
      answer: '1 mL = 1 cm³',
      explanation: 'One milliliter and one cubic centimeter represent the same volume: 1 mL = 1 cm³.'
    },
    {
      id: 'mc-ml-convert', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Convert 450 mL to cubic centimeters.',
      choices: ['450 cm³', '0.450 cm³', '4,500 cm³', '45 cm³'],
      answer: '450 cm³',
      explanation: 'Because 1 mL = 1 cm³, 450 mL = 450 cm³.'
    },
    {
      id: 'mc-matter', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is matter?',
      choices: [
        'Anything that takes up space and has mass',
        'The amount of space occupied by an object',
        'Mass per unit volume',
        'The standard used for comparison'
      ],
      answer: 'Anything that takes up space and has mass',
      explanation: 'Matter is anything that takes up space and has mass.'
    },
    {
      id: 'mc-mass', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is mass?',
      choices: [
        'The quantity of matter in an object',
        'The amount of space an object occupies',
        'Mass per unit volume',
        'Anything that takes up space'
      ],
      answer: 'The quantity of matter in an object',
      explanation: 'Mass is a measurement of the quantity of matter in an object.'
    },
    {
      id: 'mc-density-def', lessonId: 'lesson-2', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'What is density?',
      choices: [
        'Mass per unit volume',
        'The quantity of matter in an object',
        'The amount of space occupied by an object',
        'Anything that takes up space and has mass'
      ],
      answer: 'Mass per unit volume',
      explanation: 'Density is mass per unit volume: ρ = m / V.'
    },

    // ---- Lesson 3: Communicating with Graphs ----
    {
      id: 'mc-bar-graph', lessonId: 'lesson-3', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'When should you use a bar graph?',
      choices: [
        'To compare categories or data that do not change continuously',
        'To show how a dependent variable changes as an independent variable changes',
        'To show how a whole is divided into parts',
        'To list investigation steps in order'
      ],
      answer: 'To compare categories or data that do not change continuously',
      explanation: 'A bar graph compares categories or displays data that do not change continuously.'
    },
    {
      id: 'mc-line-graph', lessonId: 'lesson-3', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'When should you use a line graph?',
      choices: [
        'To show how the dependent variable changes as the independent variable changes',
        'To compare separate categories',
        'To show how a whole is divided into parts',
        'To record a hypothesis'
      ],
      answer: 'To show how the dependent variable changes as the independent variable changes',
      explanation: 'A line graph shows how a dependent variable changes as an independent variable changes; it is often used for continuous change or change over time.'
    },
    {
      id: 'mc-circle-graph', lessonId: 'lesson-3', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'When should you use a circle graph (pie chart)?',
      choices: [
        'To show how a whole is divided into parts',
        'To compare categories that do not change continuously',
        'To show continuous change over time',
        'To plot only the independent variable'
      ],
      answer: 'To show how a whole is divided into parts',
      explanation: 'A circle graph, or pie chart, shows how one fixed whole is divided into parts, usually as percentages.'
    },
    {
      id: 'mc-graph-temp', lessonId: 'lesson-3', bank: 'topic-mc', format: 'multiple-choice',
      prompt: "Which graph is best for showing a student's temperature every hour during a day?",
      choices: ['Line graph', 'Bar graph', 'Circle graph / pie chart', 'None of these'],
      answer: 'Line graph',
      explanation: 'Temperature changes continuously over time, so a line graph is the best choice.'
    },
    {
      id: 'mc-graph-clubs', lessonId: 'lesson-3', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which graph is best for comparing the number of students in four clubs?',
      choices: ['Bar graph', 'Line graph', 'Circle graph / pie chart', 'None of these'],
      answer: 'Bar graph',
      explanation: 'The clubs are separate categories being compared, so a bar graph is the best choice.'
    },
    {
      id: 'mc-graph-budget', lessonId: 'lesson-3', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Which graph is best for showing how a monthly budget is divided among categories?',
      choices: ['Circle graph / pie chart', 'Line graph', 'Bar graph', 'None of these'],
      answer: 'Circle graph / pie chart',
      explanation: 'The categories are parts of one fixed whole, so a circle graph or pie chart is the best choice.'
    },
    {
      id: 'mc-axes', lessonId: 'lesson-3', bank: 'topic-mc', format: 'multiple-choice',
      prompt: 'Where should the independent and dependent variables be plotted on a graph?',
      choices: [
        'Independent on the x-axis; dependent on the y-axis',
        'Independent on the y-axis; dependent on the x-axis',
        'Both on the x-axis',
        'Both on the y-axis'
      ],
      answer: 'Independent on the x-axis; dependent on the y-axis',
      explanation: 'The x-axis is horizontal and holds the independent variable; the y-axis is vertical and holds the dependent variable.'
    },

    // ---- True / false — same topic check, second format ----
    {
      id: 'tf-life-science', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'Life science is the science of living things.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'Life science studies living things.'
    },
    {
      id: 'tf-earth-science', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'Earth science investigates Earth and space.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'Earth science is the branch that investigates Earth and space.'
    },
    {
      id: 'tf-physical-science', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'Physical science studies only living things.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'Physical science studies matter and energy, not living things.'
    },
    {
      id: 'tf-model-change', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A scientific model can change when new evidence is discovered.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'Models represent the best available understanding and should be revised when evidence improves.'
    },
    {
      id: 'tf-atom', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'An atom is the basic unit of matter.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'An atom is a basic unit of matter.'
    },
    {
      id: 'tf-nucleus', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'The nucleus contains protons and electrons.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'The nucleus is the center of an atom and contains protons and neutrons.'
    },
    {
      id: 'tf-proton', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A proton is a positively charged particle in the nucleus.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: "A proton is a positively charged particle in an atom's nucleus."
    },
    {
      id: 'tf-neutron', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A neutron has a negative electric charge.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'A neutron has no electric charge.'
    },
    {
      id: 'tf-hypothesis', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A hypothesis is a possible explanation that can be tested.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'A hypothesis is a testable possible answer or explanation.'
    },
    {
      id: 'tf-independent', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'The independent variable is what you measure in an experiment.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'You change the independent variable and measure the dependent variable.'
    },
    {
      id: 'tf-dependent', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'The dependent variable is what changes in response to the independent variable.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'The dependent variable is the measured result. Memory trick: I measure the Dependent.'
    },
    {
      id: 'tf-control-constant', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A control and a constant are the same thing.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'A control is the comparison standard. A constant is a factor you keep the same.'
    },
    {
      id: 'tf-data', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'Data are recorded observations and information.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'Data are recorded observations and organized measurements from an investigation.'
    },
    {
      id: 'tf-theory-guess', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A scientific theory is just a guess.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'A scientific theory is an explanation supported by many observations and investigations; it is not a guess.'
    },
    {
      id: 'tf-law', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A scientific law describes what consistently happens in nature.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'A scientific law describes a consistent natural pattern. It describes what happens, not why.'
    },
    {
      id: 'tf-theory-becomes-law', lessonId: 'lesson-1', bank: 'topic-mc', format: 'true-false',
      prompt: 'A scientific theory becomes a scientific law after enough experiments.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'A theory and a law serve different purposes. A theory does not become a law.'
    },
    {
      id: 'tf-si', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'SI stands for International System of Units.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'SI is the standard measurement system used by scientists worldwide.'
    },
    {
      id: 'tf-mass-unit', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'The SI unit for mass is the gram.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'The SI base unit for mass is the kilogram (kg).'
    },
    {
      id: 'tf-length-unit', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'The SI unit for length is the meter.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'The SI base unit for length is the meter, symbol m.'
    },
    {
      id: 'tf-temp-unit', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'The SI unit for temperature is the degree Celsius.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'The SI base unit for thermodynamic temperature is the kelvin (K).'
    },
    {
      id: 'tf-kilo', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'The prefix kilo- means 1,000.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'Kilo- means 1,000 times the base unit, or 10³.'
    },
    {
      id: 'tf-milli', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'The prefix milli- means 0.01.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'Milli- means 0.001, or one thousandth. Centi- means 0.01.'
    },
    {
      id: 'tf-nano-micro', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'Nano- is a smaller prefix than micro-.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'Micro- means 0.000001 (10⁻⁶). Nano- means 0.000000001 (10⁻⁹), which is smaller.'
    },
    {
      id: 'tf-volume-formula', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'The volume of a rectangular solid is length × width × height.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'V = length × width × height.'
    },
    {
      id: 'tf-density-formula', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'Density equals volume divided by mass.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'Density equals mass divided by volume: ρ = m / V.'
    },
    {
      id: 'tf-ml', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: '1 mL equals 1 cm³.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'One milliliter and one cubic centimeter represent the same volume.'
    },
    {
      id: 'tf-matter', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'Matter is anything that takes up space and has mass.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'That is the lesson definition of matter.'
    },
    {
      id: 'tf-mass-volume', lessonId: 'lesson-2', bank: 'topic-mc', format: 'true-false',
      prompt: 'Mass is the amount of space an object occupies.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'Mass is the quantity of matter in an object. Volume is the amount of space occupied.'
    },
    {
      id: 'tf-bar', lessonId: 'lesson-3', bank: 'topic-mc', format: 'true-false',
      prompt: 'A bar graph is used to compare categories or data that do not change continuously.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'Bar graphs compare separate categories.'
    },
    {
      id: 'tf-line', lessonId: 'lesson-3', bank: 'topic-mc', format: 'true-false',
      prompt: 'A line graph is the best choice for showing how a whole is divided into parts.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'A circle graph or pie chart shows parts of a whole. A line graph shows how a dependent variable changes as an independent variable changes.'
    },
    {
      id: 'tf-circle', lessonId: 'lesson-3', bank: 'topic-mc', format: 'true-false',
      prompt: 'A circle graph shows how a whole is divided into parts.',
      choices: ['True', 'False'],
      answer: 'True',
      explanation: 'A circle graph, or pie chart, shows parts of one fixed whole, usually as percentages.'
    },
    {
      id: 'tf-axes', lessonId: 'lesson-3', bank: 'topic-mc', format: 'true-false',
      prompt: 'The independent variable is plotted on the y-axis.',
      choices: ['True', 'False'],
      answer: 'False',
      explanation: 'The independent variable goes on the horizontal x-axis. The dependent variable goes on the vertical y-axis.'
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
  // Core bank = original mixed-format items. Topic-MC bank is the
  // all-multiple-choice check that covers every highlighted term.
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
