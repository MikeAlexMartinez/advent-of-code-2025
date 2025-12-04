import { Cell, Conditional, Grid } from "./types";

export function countAllAccessibleCells(grid: Grid, conditional: Conditional, targetCell: Cell): number {
  let count = 0;

  while (true) {
    const accessibleCells = cellCounter(grid, conditional, targetCell);
    console.log('accessibleCells: ', accessibleCells);
    if (accessibleCells === 0) {
      break;
    }
    count += accessibleCells;
    console.log('running count: ', count);
  }

  return count;
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
