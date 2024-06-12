import React, { useState } from 'react';

const QuizAdmin = () => {
  const [quiz, setQuiz] = useState({ title: '', questions: [] });

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, { question: '', options: ['', '', '', ''], correct: 0 }],
    });
  };

  const handleInputChange = (e, index, field) => {
    const newQuestions = quiz.questions.map((q, i) => {
      if (i === index) {
        return { ...q, [field]: e.target.value };
      }
      return q;
    });
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleOptionChange = (e, qIndex, oIndex) => {
    const newQuestions = quiz.questions.map((q, i) => {
      if (i === qIndex) {
        const newOptions = q.options.map((option, j) => (j === oIndex ? e.target.value : option));
        return { ...q, options: newOptions };
      }
      return q;
    });
    setQuiz({ ...quiz, questions: newQuestions });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create Quiz</h2>
      <input
        type="text"
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
        className="border p-2 w-full mb-4"
        placeholder="Quiz Title"
      />
      {quiz.questions.map((q, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            value={q.question}
            onChange={(e) => handleInputChange(e, index, 'question')}
            className="border p-2 w-full mb-2"
            placeholder={`Question ${index + 1}`}
          />
          {q.options.map((option, oIndex) => (
            <input
              key={oIndex}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(e, index, oIndex)}
              className="border p-2 w-full mb-2"
              placeholder={`Option ${oIndex + 1}`}
            />
          ))}
        </div>
      ))}
      <button onClick={addQuestion} className="bg-blue-500 text-white p-2 rounded">
        Add Question
      </button>
    </div>
  );
};

export default QuizAdmin;
