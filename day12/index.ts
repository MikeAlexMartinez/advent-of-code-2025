import { solver } from "../shared/solver";
import { parseInput } from "./parser";
import { countRegions } from "./countRegions";

export function solvePartOne(input: string): number {
  const parsedInput = parseInput(input);
  return countRegions(parsedInput);
}

export function solvePartTwo(input: string): number {
  const parsedInput = parseInput(input);
  return countRegions(parsedInput);
}

export const solve = solver(solvePartOne, solvePartTwo);
