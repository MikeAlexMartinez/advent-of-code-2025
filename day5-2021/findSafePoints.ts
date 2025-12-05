import { buildGrid } from "./grid";
import { countOverlaps, drawLines, filterHorizontalAndVerticalLines } from "./line";
import { Line } from "./types";

export function findSafePoints(lines: Line[]): number {
  const grid = buildGrid(lines);
  const filteredLines = filterHorizontalAndVerticalLines(lines);
  drawLines(grid, filteredLines);
  return countOverlaps(grid);
}

