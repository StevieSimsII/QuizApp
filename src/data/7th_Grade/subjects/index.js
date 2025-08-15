import englishQuizData from './English/quizData';
import socialStudiesQuizData from './Social Studies/quizData';
import scienceQuizData from './Science/quizData';
import peQuizData from './PE/quizData';

const allQuizData = {
  subjects: {
    English: englishQuizData,
    "Social Studies": socialStudiesQuizData,
    Science: scienceQuizData,
    PE: peQuizData
  },
  lessons: [
    ...englishQuizData.lessons,
    ...socialStudiesQuizData.lessons,
    ...scienceQuizData.lessons,
    ...peQuizData.lessons
  ]
};

export default allQuizData; 