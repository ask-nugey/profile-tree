import { ChoiceButton } from "@/app/question/component/ChoiceButton";

export const QuestionList = ({
  choices,
  selectedValues,
  onChoiceClick,
}: {
  choices: any;
  selectedValues: (string | number)[];
  onChoiceClick: (value: string | number) => void;
}) => (
  <ul className="c-questionList">
    {choices.map((choice: any, index: number) => (
      <li key={index}>
        <ChoiceButton
          isSelected={selectedValues?.includes(choice.value)}
          colorCode={choice.colorCode}
          value={choice.value}
          displayValue={choice.displayValue}
          onClick={onChoiceClick}
        />
      </li>
    ))}
  </ul>
);
