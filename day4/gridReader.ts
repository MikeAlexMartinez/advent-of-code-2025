import { Cell, Grid, Position } from "./types";

type Conditional = (position: Position, grid: Grid, targetCell: Cell) => boolean;

export function countAdjacentRolls(position: Position, grid: Grid): boolean {
  let count = 0;

  const positions = [
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

  positions.forEach((position) => {
    if (position.x < 0 || position.x >= grid.width || position.y < 0 || position.y >= grid.height) {
      return;
    }

    if (grid.map[position.y][position.x] === '@') {
      count++;
    }
  });

  return count < 4;
}

export function cellCounter(grid: Grid, conditional: Conditional, targetCell: Cell): number {
  let count = 0;

  grid.map.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === targetCell) {
        if (conditional({ x, y }, grid, targetCell)) {
          count++;
        }
      }
    });
  });

  return count;
}
