import Link from "next/link";

export const NavigationButtons = ({
  index,
  limit,
  onNavigate,
  questionId,
  selectedValues,
}: {
  index: number;
  limit: number;
  onNavigate: (questionId: number, values: (string | number | undefined)[]) => void;
  questionId: number;
  selectedValues: (string | number | undefined)[]
}) => (
  <div className="c-btn__wrap">
    {index < limit ? (
      <Link
        className="c-btn"
        href={`?index=${index + 1}`}
        onClick={() => onNavigate(questionId, selectedValues)}
      >
        次の質問へ→
      </Link>
    ) : (
      <Link
        className="c-btn"
        href="/profile"
        onClick={() => onNavigate(questionId, selectedValues)}
      >
        回答を終える
      </Link>
    )}
  </div>
);
