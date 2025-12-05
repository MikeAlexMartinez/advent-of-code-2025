import { Grid, Line } from "./types";

export function buildGrid(lines: Line[]): Grid {
  const maxX = Math.max(...lines.map(
    (line) => Math.max(line.start.x, line.end.x)
  ));
  const maxY = Math.max(...lines.map(
    (line) => Math.max(line.start.y, line.end.y)
  ));

  const grid: Grid = Array.from(
    { length: maxX + 1 },
    () => Array.from({ length: maxY + 1 }, () => 0)
  );

  return grid;
}
