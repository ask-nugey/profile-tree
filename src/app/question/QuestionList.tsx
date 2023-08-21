import React from 'react'

const QuestionList = ({ question }) => {
  return (
    <div>
      <div key={question.id}>
        <ul>
          {question.choices.map((choice, choiceIdx) => (
            <li key={choiceIdx}>{choice.displayValue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionList
