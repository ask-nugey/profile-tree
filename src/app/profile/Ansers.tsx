"use client"

import useRetrieveAnswers from "@/app/profile/useRetrieveAnswers";

export default function Ansers() {
  const answers = useRetrieveAnswers();

  return (
    <ul className="c-answerList">
      {answers.map((answer, index) => (
        <li className="c-answerItem" key={index}>
          {answer?.questionId}
          {answer?.values.map((value) => ( value ))}
        </li>
      ))}
    </ul>
  );
};
