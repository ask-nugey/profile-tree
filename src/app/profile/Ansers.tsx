"use client"

import { useEffect } from "react";

export default function Ansers({answers, questions, setQuestions}) {
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
    value: string
  ): string | undefined => {
    const question = questions?.find((q) => q.id === questionId);
    const choice = question?.choices.find((c) => c.value === value);
    return choice?.answerText;
  };

  return (
    <div className="c-answerList">
      {answers.map((answer, index) => (
        <div className="c-answerItem" key={index}>
          <p className="title">{getQuestionPrefix(answer?.questionId)}</p>
          {answer?.values.map((value, valueIndex) => (
            <p className="text" key={valueIndex}>
              {getAnswerText(answer?.questionId, value)}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
