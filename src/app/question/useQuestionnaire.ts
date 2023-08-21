"use client";

import { Answer } from "@/types";
import { useEffect, useState } from "react";

const TOTAL_QUESTIONS = 4;

export const useQuestionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [answers, setAnswers] = useState<
    Answer[]
  >([]);

  const goToNextQuestion = (
    questionId: number,
    values: (string | number)[]
  ): void => {
    values = Array.isArray(values) ? values : [values];
    const newAnswer = { questionId, values };
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  return {
    currentIndex,
    answers,
    goToNextQuestion,
    isComplete: currentIndex >= TOTAL_QUESTIONS + 1,
  };
};
