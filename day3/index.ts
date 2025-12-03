import { solver } from "../shared/solver";
import { findTotalVoltage, findTotalVoltageTwo } from "./findTotalVoltage";
import { parseInput } from "./parser";

export function solvePartOne(input: string): number {
  const banks = parseInput(input);
  return findTotalVoltage(banks);
}

export function solvePartTwo(input: string): number {
  const banks = parseInput(input);
  return findTotalVoltageTwo(banks);
}

export const solve = solver(solvePartOne, solvePartTwo);
