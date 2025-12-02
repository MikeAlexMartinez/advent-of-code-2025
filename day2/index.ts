import { readInput } from '../shared/readInput';
import { solver } from '../shared/solver';
import { sumInvalidIds } from './sumInvalidIds';
import { parseInput } from './parser';
import { isInvalidId, isInvalidIdTwo } from './isInvalidId';

export function solvePartOne(): number {
  const input = readInput(2);
  const ids = parseInput(input);
  return sumInvalidIds(ids, isInvalidId);
}

export function solvePartTwo(): number {
  const input = readInput(2);
  const ids = parseInput(input);
  return sumInvalidIds(ids, isInvalidIdTwo);
}

export const solve = solver(solvePartOne, solvePartTwo);
