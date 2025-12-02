import { readInput } from "../shared/readInput";
import { solver } from "../shared/solver";
import { parseInput } from "./parser";

export function solvePartOne(): number {
  const input = readInput(3);
  const instructions = parseInput(input);
  return instructions.length;
}

export function solvePartTwo(): number {
  const input = readInput(3);
  const instructions = parseInput(input);
  return instructions.length;
}

export const solve = solver(solvePartOne, solvePartTwo);
