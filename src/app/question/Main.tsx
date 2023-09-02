"use client";

import { NavigationButtons } from "@/app/question/component/NavigationButtons";
import { QuestionList } from "@/app/question/component/QuestionList";
import { useAnswerHandling } from "@/app/question/hook/useAnswerHandling";
import { useChoices } from "@/app/question/hook/useChoices";
import { Question } from "@/types";

export const Main = ({
  questions,
  index,
  limit,
}: {
  questions: Question[];
  index: number;
  limit: number;
}) => {
  const question = questions[index];

  const [selectedValues, handleChoice] = useChoices(question?.type, []);
  const [answers, handleComplete] = useAnswerHandling();

  return (
    <>
      <QuestionList
        choices={question.choices}
        selectedValues={selectedValues}
        onChoiceClick={handleChoice}
      />
      <NavigationButtons
        index={index}
        limit={limit}
        onNavigate={handleComplete}
        questionId={question.id}
        selectedValues={selectedValues}
      />
    </>
  );
};
