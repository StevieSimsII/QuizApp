import englishQuizData from './English/quizData';
import socialStudiesQuizData from './SocialStudies/quizData';
import scienceQuizData from './Science/quizData';
import peQuizData from './PE/quizData';

const allQuizData = {
  subjects: {
    English: englishQuizData,
    SocialStudies: socialStudiesQuizData,
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