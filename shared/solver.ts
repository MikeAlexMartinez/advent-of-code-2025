import { match } from "ts-pattern";
import { Part } from "./types";

export function solver(
  solvePartOne: () => number,
  solvePartTwo: () => number
): (part: Part) => number {
  return (part: Part) => match(part)
    .with(1, () => {
      return solvePartOne();
    })
    .with(2, () => {
      return solvePartTwo();
    })
    .exhaustive();
}
