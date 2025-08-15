import React, { useState } from 'react';
import './styles/App.css';
import allGradeData from './data';
import QuizSelector from './components/QuizSelector';
import Quiz from './components/Quiz';

function App() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(null);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setQuizComplete(false);
    setScore(null);
  };

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  const handleBackToGrades = () => {
    setSelectedGrade(null);
    setSelectedSubject(null);
    setSelectedLesson(null);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setSelectedLesson(null);
  };

  const handleQuizComplete = (finalScore) => {
    setQuizComplete(true);
    setScore(finalScore);
  };

  const handleRestart = () => {
    setSelectedGrade(null);
    setSelectedSubject(null);
    setSelectedLesson(null);
    setQuizComplete(false);
    setScore(null);
  };

  const renderGradeSelector = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center mb-6">Select a Grade Level</h2>
      <div className="grid gap-4">
        {Object.keys(allGradeData).map((grade) => (
          <button
            key={grade}
            onClick={() => handleGradeSelect(grade)}
            className="w-full px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
          >
            <h3 className="text-lg font-medium text-blue-900">{grade}</h3>
            <p className="text-sm text-blue-600">
              {Object.keys(allGradeData[grade].subjects).length} subjects available
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderSubjectSelector = () => (
    <div className="space-y-4">
      <div className="mb-10">
        <div className="flex justify-center mb-6">
          <button
            onClick={handleBackToGrades}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
          >
            Back to Grades
          </button>
        </div>
        <h2 className="text-xl font-semibold text-center">Select a Subject</h2>
      </div>
      <div className="grid gap-4">
        {Object.keys(allGradeData[selectedGrade].subjects).map((subject) => (
          <button
            key={subject}
            onClick={() => handleSubjectSelect(subject)}
            className="w-full px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
          >
            <h3 className="text-lg font-medium text-blue-900">{subject}</h3>
            <p className="text-sm text-blue-600">
              {allGradeData[selectedGrade].subjects[subject].lessons.length} quizzes available
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                  QuizApp
                </h1>
                {!selectedGrade ? (
                  renderGradeSelector()
                ) : !selectedSubject ? (
                  renderSubjectSelector()
                ) : !selectedLesson ? (
                  <QuizSelector
                    lessons={allGradeData[selectedGrade].subjects[selectedSubject].lessons}
                    onLessonSelect={handleLessonSelect}
                    onBackToSubjects={handleBackToSubjects}
                  />
                ) : (
                  <Quiz
                    lesson={selectedLesson}
                    onComplete={handleQuizComplete}
                    onRestart={handleRestart}
                    isComplete={quizComplete}
                    score={score}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 