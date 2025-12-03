import { match } from "ts-pattern";
import { Part } from "./types";

export function solver(
  solvePartOne: (input: string) => number,
  solvePartTwo: (input: string) => number
): (part: Part, input: string) => number {
  return (part, input) => match(part)
    .with(1, () => {
      return solvePartOne(input);
    })
    .with(2, () => {
      return solvePartTwo(input);
    })
    .exhaustive();
}
