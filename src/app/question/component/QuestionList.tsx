import { ChoiceButton } from "@/app/question/component/ChoiceButton";
import { NumericChoice, QuestionType, RangeChoice, TextChoice } from "@/types";

export const QuestionList = ({
  choices,
  selectedValues,
  onChoiceClick,
}: {
  choices: TextChoice[] | NumericChoice[] | RangeChoice[];
  selectedValues: (string | number | undefined)[];
  onChoiceClick: (value?: string | number) => void;
}) => {
  return (
    <ul className="c-questionList">
      {choices.map((choice, index: number) => {
        let ButtonComponent;

        if (!choice.value) {
          choice.value = "";
        }

        switch (choice.type) {
          case "text":
            ButtonComponent = ChoiceButton;
            break;
          case "numeric":
            ButtonComponent = ChoiceButton;
            break;
          default:
            ButtonComponent = ChoiceButton;
            break;
        }

        return (
          <li key={index}>
            <ButtonComponent
              isSelected={selectedValues.includes(choice.value)}
              colorCode={choice.colorCode}
              value={choice.value}
              displayValue={choice.displayValue}
              onClick={onChoiceClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
