"use client";

import {
  Answer,
  NumericChoice,
  Question,
  QuestionType,
  TextChoice,
} from "@/types";
import { useEffect } from "react";

interface Props {
  answers: Answer[];
  questions: Question[] | null;
  setQuestions: Function;
}

export default function Ansers({ answers, questions, setQuestions }: Props) {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/question/api/`, {
        next: { revalidate: 60 },
      });
      const data = await res.json();

      setQuestions(data);
    };

    getData();
  }, []);

  // questionId から prefix を取得するヘルパー関数
  const getQuestionPrefix = (id: number): string | undefined => {
    const question = questions?.find((q) => q.id === id);
    return question?.prefix;
  };

  // value から対応する answerText を取得するヘルパー関数
  const getAnswerText = (
    questionId: number,
    value: string | number
  ): string | undefined => {
    const question = questions?.find((q) => q.id === questionId);

    if (!question) return;

    switch (question.type) {
      case QuestionType.SINGLE_CHOICE:
      case QuestionType.MULTIPLE_CHOICE:
        return question.choices.find(
          (choice: TextChoice) => choice.value === value
        )?.answerText;

      case QuestionType.NUMERIC:
        return question.choices.find(
          (choice: NumericChoice) => choice.value === value
        )?.answerText;

      case QuestionType.RANGE:
        // RANGE タイプの場合の取得ロジックを追加
        break;

      default:
        return;
    }
  };

  return (
    <div className="c-answerList">
      {answers.map((answer, index) => (
        <div className="c-answerItem" key={index}>
          <p className="title">{getQuestionPrefix(answer?.questionId)}</p>
          <ul className="c-answerTextList">
            {answer?.values.map((value, valueIndex) => (
              <li className="text" key={valueIndex}>
                {getAnswerText(answer?.questionId, value)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
