import { solver } from "../shared/solver";
import { countSplits } from "./countSplits";
import { countTimelines } from "./countTimelines";
import { parseInput } from "./parser";
import { Cell, TimelineCell } from "./types";

export function solvePartOne(input: string): number {
  const grid = parseInput<Cell>(input);
  return countSplits(grid);
}

export function solvePartTwo(input: string): number {
  const grid = parseInput<TimelineCell>(input);
  return countTimelines(grid);
}

export const solve = solver(solvePartOne, solvePartTwo);
