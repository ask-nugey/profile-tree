import { DisplayType, Question, QuestionType, RangeDisplayType } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    content: "あなたの好きな色は何ですか？",
    displayType: DisplayType.TEXT_AND_ICON,
    categoryIds: 1,
    tagIds: [1, 2],
    groupIds: [1],
    prefix: "好きな色",
    icon: "color_icon",
    type: QuestionType.SINGLE_CHOICE,
    choices: [
      {
        type: "text",
        value: "red",
        displayValue: "赤",
        answerText: "赤",
        description: "情熱的な色",
        colorCode: "#FF0000",
        icon: "red_icon",
      },
      {
        type: "text",
        value: "blue",
        displayValue: "青",
        answerText: "青",
        description: "落ち着いた色",
        colorCode: "#0000FF",
        icon: "blue_icon",
      },
    ],
  },
  {
    id: 2,
    content: "あなたの年齢は？",
    displayType: DisplayType.TEXT,
    categoryIds: 2,
    tagIds: [3],
    prefix: "年齢",
    type: QuestionType.RANGE,
    choices: [
      {
        type: "range",
        minValue: 0,
        maxValue: 150,
        stepSize: 1,
        default: 75,
        unit: "歳",
        displayType: RangeDisplayType.SLIDER,
        answerText: "年齢",
      },
    ],
  },
  {
    id: 3,
    content: "好きな数字を選んでください。",
    displayType: DisplayType.TEXT,
    categoryIds: 3,
    tagIds: [4, 5],
    prefix: "好きな数字",
    type: QuestionType.MULTIPLE_CHOICE,
    choices: [
      {
        type: "text",
        value: "one",
        displayValue: "1",
        answerText: "1",
      },
      {
        type: "text",
        value: "two",
        displayValue: "2",
        answerText: "2",
      },
      {
        type: "text",
        value: "three",
        displayValue: "3",
        answerText: "3",
      },
    ],
  },
];
