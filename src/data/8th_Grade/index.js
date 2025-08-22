import scienceQuizData from './Science/quizData';

const allQuizData = {
  subjects: {
    Science: scienceQuizData
  },
  // Legacy lessons structure for backward compatibility
  lessons: [
    ...Object.values(scienceQuizData.chapters).flatMap(chapter => chapter.lessons)
  ]
};

export default allQuizData;
