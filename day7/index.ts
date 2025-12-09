import { solver } from "../shared/solver";
import { countSplits } from "./countSplits";
import { parseInput } from "./parser";

export function solvePartOne(input: string): number {
  const grid = parseInput(input);
  return countSplits(grid);
}

export function solvePartTwo(input: string): number {
  const instructions = parseInput(input);
  return instructions.length;
}

export const solve = solver(solvePartOne, solvePartTwo);
