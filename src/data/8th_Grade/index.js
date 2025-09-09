import scienceQuizData from './Science/quizData';
import computerApplicationsQuizData from './Computer Applications/quizData';
import theologyQuizData from './Theology/quizData';

const allQuizData = {
  subjects: {
    Science: scienceQuizData,
    "Computer Applications": computerApplicationsQuizData,
    Theology: theologyQuizData
  },
  // Legacy lessons structure for backward compatibility
  lessons: [
    ...Object.values(scienceQuizData.chapters).flatMap(chapter => chapter.lessons),
    ...Object.values(computerApplicationsQuizData.chapters).flatMap(chapter => chapter.lessons),
    ...Object.values(theologyQuizData.chapters).flatMap(chapter => chapter.lessons)
  ]
};

export default allQuizData;
