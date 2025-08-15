import scienceQuizData from './Science/quizData';

const allQuizData = {
  subjects: {
    Science: scienceQuizData
  },
  lessons: [
    ...scienceQuizData.lessons
  ]
};

export default allQuizData;
