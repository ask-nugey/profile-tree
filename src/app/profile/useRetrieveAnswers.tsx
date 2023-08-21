"use client"

import { Answer } from "@/types";
import { useEffect, useState } from "react";

export default function useRetrieveAnswers() {
  const [storedAnswers, setStoredAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const retrievedAnswers = localStorage.getItem('answers');
    if (retrievedAnswers) {
      setStoredAnswers(JSON.parse(retrievedAnswers));
    }
  }, []);

  return storedAnswers;
};
