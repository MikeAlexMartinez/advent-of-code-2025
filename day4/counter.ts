import { Grid, Position } from "./types";

function buildPositions(position: Position): Position[] {
  return [
    { x: position.x - 1, y: position.y - 1 },
    { x: position.x, y: position.y - 1 },
    { x: position.x + 1, y: position.y - 1 },
    { x: position.x - 1, y: position.y },
    // { x: position.x, y: position.y }, don't count the target cell
    { x: position.x + 1, y: position.y },
    { x: position.x - 1, y: position.y + 1 },
    { x: position.x, y: position.y + 1 },
    { x: position.x + 1, y: position.y + 1 },
  ];
}

export function removeAccessibleRoll(position: Position, grid: Grid): void {
  const positions = buildPositions(position);

  positions.forEach(({ x, y }) => {
    if (x < 0 || x >= grid.width || y < 0 || y >= grid.height) {
      return;
    }
    grid.map[y][x] = 'x';
  });
}

export function countAdjacentRolls(position: Position, grid: Grid): boolean {
  let count = 0;

  const positions = buildPositions(position);

  positions.forEach(({ x, y }) => {
    if (x < 0 || x >= grid.width || y < 0 || y >= grid.height) {
      return;
    }

    if (grid.map[y][x] === '@') {
      count++;
    }
  });

  return count < 4;
}
