import { readInput } from "../shared/readInput";
import { solver } from "../shared/solver";
import { parseInput } from "./parser";

const DAY = 3;

export function solvePartOne(): number {
  const input = readInput(DAY);
  const instructions = parseInput(input);
  return instructions.length;
}

export function solvePartTwo(): number {
  const input = readInput(DAY);
  const instructions = parseInput(input);
  return instructions.length;
}

export const solve = solver(solvePartOne, solvePartTwo);
