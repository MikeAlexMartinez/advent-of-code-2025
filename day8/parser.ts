import { JunctionBoxPosition } from "./types";

export function parseInput(input: string): JunctionBoxPosition[] {
  return input.split('\n').map((line) => {
    const [x, y, z] = line.split(',').map(Number);
    return { x, y, z };
  });
}
