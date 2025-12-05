import { solver } from "../shared/solver";

import { findSafePoints } from "./findSafePoints";
import { parseInput } from "./parser";

export function solvePartOne(input: string): number {
  const lines = parseInput(input);
  return findSafePoints(lines);
}

export function solvePartTwo(input: string): number {
  const lines = parseInput(input);
  return findSafePoints(lines);
}

export const solve = solver(solvePartOne, solvePartTwo);
