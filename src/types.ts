// ＜ナビリンク＞
export type NavLink = {
  href: string;
  name: string;
};

// ＜タグ＞
export type Tag = {
  id: number;
  value: string;
  displayName: string;
};

// ＜カテゴリー＞
export type Category = {
  id: number;
  value: string;
  displayName: string;
};

// ＜表示用グループ＞
export type Group = {
  id: number;
  value: string;
  displayName: string;
  overrideDisplayType?: DisplayType;
};

// ＜質問＞
// 質問のタイプを示すenum
export enum QuestionType {
  SINGLE_CHOICE = "single_choice",
  MULTIPLE_CHOICE = "multiple_choice",
  NUMERIC = "numeric",
  RANGE = "range",
  // ... 他の質問タイプが必要な場合、ここに追加する
}

// 表示方法を示すenum
export enum DisplayType {
  TEXT = "text",
  TEXT_AND_ICON = "text_and_icon",
  // ... 他の表示タイプが必要な場合、ここに追加する
}

// 質問のエンティティ（共通的な部分）を定義
type BaseQuestion = {
  id: number;
  content: string;
};

// 質問の一般的な属性を定義
type QuestionMainAttributes = {
  displayType: DisplayType;
  categoryIds: number;
  tagIds: number[];
  groupIds?: number[];
  prefix?: string;  // 回答を表示するときのタイトル
  icon?: string;
};

// 選択肢の共通項
type BaseChoice = {
  value?: string | number;
  displayValue?: string;
  answerText?: string;
  description?: string;
  relatedLink?: string;
  colorCode?: string;
  icon?: string;
  // ... 他の属性に関連するフィールドもオプショナルとして追加可能
};

// テキスト選択肢のデータ型
export type TextChoice = BaseChoice & {
  type: "text";
  value: string; // BaseChoiceのvalueをオーバーライド
};

// 数値選択肢のデータ型
export type NumericChoice = BaseChoice & {
  type: "numeric";
  value: number; // BaseChoiceのvalueをオーバーライド
  unit?: string;
};

export enum RangeDisplayType {
  SELECT = "select",
  SLIDER = "slider",
  // ... 他の表示タイプが必要な場合、ここに追加する
}

// 範囲選択のデータ型
type RangeChoice = BaseChoice & {
  type: "range";
  minValue: number;
  maxValue: number;
  displayType: RangeDisplayType; // 選択する際の形式を設定
  stepSize?: number; // 1単位ごとに選択可能
  default?: number; // 初期値として中間値を設定
  unit?: string; // 単位を示す
};

// SingleChoice質問とMultipleChoice質問、Numeric、Rangeに特有の属性
type SingleChoiceAttributes = {
  type: QuestionType.SINGLE_CHOICE;
  choices: TextChoice[];
};

type MultipleChoiceAttributes = {
  type: QuestionType.MULTIPLE_CHOICE;
  choices: TextChoice[];
};

type NumericAttributes = {
  type: QuestionType.NUMERIC;
  choices: NumericChoice[];
};

type RangeAttributes = {
  type: QuestionType.RANGE;
  choices: RangeChoice[];
};

// 全ての質問タイプの属性を統一した型
type QuestionAttributes =
  | SingleChoiceAttributes
  | MultipleChoiceAttributes
  | NumericAttributes
  | RangeAttributes;

// 最終的な質問のデータ型
export type Question =
  & BaseQuestion
  & QuestionMainAttributes
  & QuestionAttributes;

// ＜回答＞
export type Answer = {
  questionId: number;
  values: (string | number)[]; // 文字列の選択肢または数値を受け付ける
};
