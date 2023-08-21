"use client";

import { useRouter } from "next/navigation";
import { useQuestionnaire } from "@/app/question/useQuestionnaire";
import { useQuestion } from "@/app/question/useQuestion";
import { useEffect } from "react";
import QuestionList from "@/app/question/QuestionList";

export default function Page() {
  const router = useRouter();
  const { currentIndex, goToNextQuestion, isComplete } = useQuestionnaire();
  const { question } = useQuestion(currentIndex);

  useEffect(() => {
    if (isComplete) {
      router.push("/profile");
    }
  }, [isComplete, router]);

  const handleChoiceClick = (
    questionId: number,
    values: (string | number)[]
  ): void => {
    goToNextQuestion(questionId, values);
  };

  return (
    <main>
      <div className="c-block">
        <h1 className="c-questionTitle">{question?.content}</h1>

        <QuestionList
          question={question}
          handleChoiceClick={handleChoiceClick}
        />

      </div>
    </main>
  );
}
