import { Answer } from "@/types";
import { useState } from "react";

type UseAnswerHandlingReturn = [
  Answer[],
  (questionId: number, values: (string | number | undefined)[]) => void
];

export const useAnswerHandling = (): UseAnswerHandlingReturn => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleComplete = (
    questionId: number,
    values?: (string | number | undefined)[]
  ) => {
    const newAnswer = { questionId, values };
    setAnswers((prevAnswers) => {
      // ローカルストレージから現在の回答を取得
      const storedAnswers = JSON.parse(localStorage.getItem("answers") || "[]");

      // 新しい回答と同じquestionIdを持つ回答を削除
      const filteredAnswers = storedAnswers.filter(
        (answer: Answer) => answer.questionId !== questionId
      );

      // filteredAnswersとnewAnswerをマージ
      const updatedAnswers = [...filteredAnswers, newAnswer];

      // マージされた回答リストをローカルストレージに保存
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));

      setAnswers([]);
      return updatedAnswers;
    });
  };

  return [answers, handleComplete];
};
