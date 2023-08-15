"use client"

import { useEffect, useState } from "react";

export default function useRetrieveAnswers() {
  const [storedAnswers, setStoredAnswers] = useState<string[]>([]);

  useEffect(() => {
    const retrievedAnswers = localStorage.getItem('answers');
    if (retrievedAnswers) {
      setStoredAnswers(JSON.parse(retrievedAnswers));
    }
  }, []);

  return storedAnswers;
};
