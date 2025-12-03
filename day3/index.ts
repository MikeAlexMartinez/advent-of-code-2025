import { readInput } from "../shared/readInput";
import { solver } from "../shared/solver";
import { findTotalVoltage, findTotalVoltageTwo } from "./findTotalVoltage";
import { parseInput } from "./parser";

const DAY = 3;

export function solvePartOne(): number {
  const input = readInput(DAY);
  const banks = parseInput(input);
  return findTotalVoltage(banks);
}

export function solvePartTwo(): number {
  const input = readInput(DAY);
  const banks = parseInput(input);
  return findTotalVoltageTwo(banks);
}

export const solve = solver(solvePartOne, solvePartTwo);
