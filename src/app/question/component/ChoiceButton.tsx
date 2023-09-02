export const ChoiceButton = ({
  isSelected,
  colorCode,
  value,
  displayValue,
  onClick,
}: {
  isSelected: boolean;
  colorCode: string;
  value: string | number;
  displayValue: string;
  onClick: (value: string | number) => void;
}) => (
  <button
    className={`c-questioItem ${isSelected ? "selected" : ""}`}
    style={{
      color: isSelected ? colorCode : "",
      borderColor: isSelected ? colorCode : "",
    }}
    onClick={() => onClick(value)}
  >
    {displayValue}
  </button>
);
