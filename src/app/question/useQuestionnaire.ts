"use client"

import { useEffect, useState } from 'react';

const TOTAL_QUESTIONS = 5;

export const useQuestionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [answers, setAnswers] = useState<string[]>([]);

  const goToNextQuestion = (answer: string): void => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);

  return {
    currentIndex,
    answers,
    goToNextQuestion,
    isComplete: currentIndex >= TOTAL_QUESTIONS + 1
  };
};
