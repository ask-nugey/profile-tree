import { QuestionType } from "@/types";
import { useState } from "react";

type UseChoicesReturn = [
  (string | number | undefined)[],
  (choiceValue?: string | number) => void
];

export const useChoices = (
  questionType: QuestionType,
  initialSelectedValues: (string | number)[]
): UseChoicesReturn => {
  const [selectedValues, setSelectedValues] = useState<(string | number | undefined)[]>(
    initialSelectedValues
  );

  const handleChoice = (choiceValue?: string | number) => {
    let newSelectedValues: (string | number | undefined)[] = [];

    if (questionType === QuestionType.SINGLE_CHOICE) {
      newSelectedValues = [choiceValue];
    } else if (questionType === QuestionType.MULTIPLE_CHOICE) {
      const isAlreadySelected = selectedValues.includes(choiceValue);
      newSelectedValues = isAlreadySelected
        ? selectedValues.filter((val) => val !== choiceValue)
        : [...selectedValues, choiceValue];
    }
    setSelectedValues(newSelectedValues);
  };

  return [selectedValues, handleChoice];
};
