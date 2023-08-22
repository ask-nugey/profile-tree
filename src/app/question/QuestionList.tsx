import { Question, QuestionType } from "@/types";
import React, { useEffect, useState } from "react";

interface Props {
  question: Question | null;
  handleChoiceClick: Function;
  // handleNextQuestion: Function;
}

export default function QuestionList({
  question,
  handleChoiceClick,
  // handleNextQuestion,
}: Props) {
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);

  useEffect(() => {
    setSelectedValues([]); // 質問が変更されたときに selectedValues をリセット
  }, [question?.id]); // question.id の変更を監視

  const handleChoice = (questionId: number, choiceValue: string | number) => {
    if (question?.type === QuestionType.SINGLE_CHOICE) {
      setSelectedValues([choiceValue]);
      handleChoiceClick(questionId, [choiceValue]);
    } else if (question?.type === QuestionType.MULTIPLE_CHOICE) {
      const isAlreadySelected = selectedValues.includes(choiceValue);
      if (isAlreadySelected) {
        setSelectedValues((prev) => prev.filter((val) => val !== choiceValue));
      } else {
        setSelectedValues((prev) => [...prev, choiceValue]);
      }
    }
  };

  const handleNextClick = () => {
    if (question) {
      handleChoiceClick(question.id, selectedValues);
      // handleNextQuestion();
    }
  };

  return (
    <div>
      {question &&
        (question.type === QuestionType.SINGLE_CHOICE ||
          question.type === QuestionType.MULTIPLE_CHOICE) && (
          <ul className="c-questionList">
            {question.choices.map((choice, choiceIdx) => (
              <button
                className={`c-questioItem ${
                  selectedValues.includes(choice.value) ? "selected" : ""
                }`}
                key={choiceIdx}
                onClick={() => handleChoice(question.id, choice.value)}
                style={{
                  color: selectedValues.includes(choice.value)
                    ? choice.colorCode
                    : "",
                  borderColor: selectedValues.includes(choice.value)
                    ? choice.colorCode
                    : "",
                }}
              >
                {choice.displayValue}
              </button>
            ))}
          </ul>
        )}
      {question?.type === QuestionType.MULTIPLE_CHOICE && (
        <button
          className={`c-nextButton ${
            selectedValues.length > 0 ? "selected" : ""
          }`}
          onClick={handleNextClick}
        >
          次へ
        </button>
      )}
    </div>
  );
}
