import { Line } from "./types";

export function parseInput(input: string): Line[] {
  const lines = input.split('\n');

  return lines.map((line) => {
    const [start, end] = line.split(' -> ');
    const [x1, y1] = start.split(',').map(Number);
    const [x2, y2] = end.split(',').map(Number);
    return {
      start: { x: x1, y: y1 },
      end: { x: x2, y: y2 },
    };
  });
}
