import englishQuizData from './English/quizData';
import socialStudiesQuizData from './SocialStudies/quizData';
import scienceQuizData from './Science/quizData';

const allQuizData = {
  lessons: [
    ...englishQuizData.lessons,
    ...socialStudiesQuizData.lessons,
    ...scienceQuizData.lessons
  ]
};

export default allQuizData; 