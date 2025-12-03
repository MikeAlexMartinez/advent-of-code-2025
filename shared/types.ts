export type Part = 1 | 2;
export type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export function isPart(part: number): part is Part {
  return part === 1 || part === 2;
}

export function isDay(day: number): day is Day {
  return day >= 1 && day <= 12;
}
