import { solver } from "../shared/solver";
import { cellCounter, countAllAccessibleCells } from "./gridReader";
import { countAdjacentRolls } from "./counter";
import { parseInput } from "./parser";

export function solvePartOne(input: string): number {
  const grid = parseInput(input);
  return cellCounter(grid, countAdjacentRolls, '@');
}

export function solvePartTwo(input: string): number {
  const grid = parseInput(input);
  return countAllAccessibleCells(grid, countAdjacentRolls, '@');
}

export const solve = solver(solvePartOne, solvePartTwo);
