import { solver } from "../shared/solver";
import { findFreshIngredients } from "./findFreshIngredients";
import { countFreshIngredients } from "./countFreshIngredients";
import { parseInput } from "./parser";

export function solvePartOne(input: string): number {
  const inventory = parseInput(input);

  return findFreshIngredients(inventory);
}

export function solvePartTwo(input: string): number {
  const inventory = parseInput(input);

  return countFreshIngredients(inventory);
}

export const solve = solver(solvePartOne, solvePartTwo);
