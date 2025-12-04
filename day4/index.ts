import { solver } from "../shared/solver";
import { cellCounter, countAdjacentRolls } from "./gridReader";
import { parseInput } from "./parser";

export function solvePartOne(input: string): number {
  const grid = parseInput(input);
  return cellCounter(grid, countAdjacentRolls, '@');
}

export function solvePartTwo(input: string): number {
  const grid = parseInput(input);
  return cellCounter(grid, countAdjacentRolls, '@');
}

export const solve = solver(solvePartOne, solvePartTwo);
