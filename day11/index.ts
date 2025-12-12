import { solver } from "../shared/solver";
import { findPathsOut } from "./findPathsOut";
import { parseInput } from "./parser";

export function solvePartOne(input: string): number {
  const graph = parseInput(input);

  return findPathsOut(graph, 'you', 'out');
}

export function solvePartTwo(input: string): number {
  const graph = parseInput(input);

  const svrToFft = findPathsOut(graph, 'svr', 'fft');
  const fftToDac = findPathsOut(graph, 'fft', 'dac');
  const dacToOut = findPathsOut(graph, 'dac', 'out');

  return svrToFft * fftToDac * dacToOut;
}

export const solve = solver(solvePartOne, solvePartTwo);
