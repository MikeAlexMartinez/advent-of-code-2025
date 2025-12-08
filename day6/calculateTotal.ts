import { match } from "ts-pattern";
import { Operation, Problems } from "./types";

export function calculateProblemValue(
  operation: Operation,
  values: number[]
): number {
  return match(operation)
    .with('+', () => {
      return values.reduce((acc, num) => acc + num, 0);
    })
    .with('*', () => {
      return values.reduce((acc, num) => acc * num, 1);
    })
    .exhaustive();
}

export function calculateTotal(problems: Problems): number {
  return problems.reduce((acc, problem) => {
    return acc + calculateProblemValue(problem.operation, problem.values);
  }, 0);
}
