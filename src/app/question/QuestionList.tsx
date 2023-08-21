import { Question } from "@/types";
import React from "react";

interface Props {
  question: Question | null;
  handleChoiceClick: Function;
}

export default function QuestionList({
  question,
  handleChoiceClick
}: Props) {
  return (
    <ul className="c-questionList">
      {question?.choices.map((choice, choiceIdx) => (
        <button
          className="c-questioItem"
          key={choiceIdx}
          onClick={() => handleChoiceClick(question.id, choice.value)}
          style={{
            color: choice.colorCode,
            borderColor: choice.colorCode,
          }}
        >
          {choice.displayValue}
        </button>
      ))}
    </ul>
  );
}
