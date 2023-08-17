export type NavLink = {
  href: string;
  name: string;
}

export type Question = {
  id: number;
  tag: string,
  type: string,
  content: string;
  choices: string[];
};
