export enum Color {
  red,
  black,
  blue,
  green,
  gray,
  brown,
  purple,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
