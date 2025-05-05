import React from 'react';

function QuizSelector({ lessons, onLessonSelect, onBackToSubjects }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBackToSubjects}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
        >
          Back to Subjects
        </button>
        <h2 className="text-xl font-semibold text-center">Select a Quiz</h2>
        <div className="w-24"></div> {/* Spacer for alignment */}
      </div>
      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onLessonSelect(lesson)}
            className="w-full px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
          >
            <h3 className="text-lg font-medium text-blue-900">{lesson.title}</h3>
            <p className="text-sm text-blue-600">
              {lesson.subject} - {lesson.questions.length} questions
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizSelector; 