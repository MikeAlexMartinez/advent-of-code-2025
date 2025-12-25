import { solver } from "../shared/solver";
import { buildPerimeter } from "./buildPerimeter";
import { findLargestArea } from "./findLargestArea";
import { buildFloor, parseInput } from "./parser";
import { Floor } from "./types";

export function solvePartOne(input: string): number {
  const tilePositions = parseInput(input);
  return findLargestArea(tilePositions);
}

function printGrid(floor: Floor) {
  console.log('\n--------------------------------');
  floor.grid.forEach((row) => {
    console.log(row.join(''));
  });
  console.log('--------------------------------\n');
}

export function solvePartTwo(input: string): number {
  const tilePositions = parseInput(input);
  const floor = buildFloor(tilePositions);
  printGrid(floor);
  const updatedFloor = buildPerimeter(floor);
  printGrid(updatedFloor);
  return 1;
}

export const solve = solver(solvePartOne, solvePartTwo);
