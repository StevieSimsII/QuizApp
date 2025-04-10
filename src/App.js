import React, { useState } from 'react';
import { quizData } from './data/quizData';
import QuizSelector from './components/QuizSelector';
import Quiz from './components/Quiz';
import './styles/App.css';

function App() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(null);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setQuizComplete(false);
    setScore(null);
  };

  const handleQuizComplete = (finalScore) => {
    setQuizComplete(true);
    setScore(finalScore);
  };

  const handleRestart = () => {
    setSelectedLesson(null);
    setQuizComplete(false);
    setScore(null);
  };

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
                {!selectedLesson ? (
                  <QuizSelector
                    lessons={quizData.lessons}
                    onLessonSelect={handleLessonSelect}
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