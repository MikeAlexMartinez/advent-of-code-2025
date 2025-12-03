import { readInput } from '../shared/readInput';
import { solver } from '../shared/solver';
import { getPassword } from './getPassword';
import { parseInput } from './parser';
import { movePartOne, movePartTwo } from './safeControl';

export function solvePartTwo(input: string): number {
  const instructions = parseInput(input);

  return getPassword(instructions, movePartTwo);
}

export function solvePartOne(input: string): number {
  const instructions = parseInput(input);

  return getPassword(instructions, movePartOne);
}

export const solve = solver(solvePartOne, solvePartTwo);
