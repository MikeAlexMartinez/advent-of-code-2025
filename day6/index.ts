import { solver } from "../shared/solver";
import { calculateTotal } from "./calculateTotal";
import { calculateVerticalTotal } from "./calculateVerticalTotal";
import { parseInput, parseInputPartTwo } from "./parser";

export function solvePartOne(input: string): number {
  const problems = parseInput(input);
  return calculateTotal(problems);
}

export function solvePartTwo(input: string): number {
  const inputRows = parseInputPartTwo(input);
  return calculateVerticalTotal(inputRows);
}

export const solve = solver(solvePartOne, solvePartTwo);
