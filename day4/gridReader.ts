import { Cell, Conditional, Grid, Position, GridManagerResult, Bouncing } from "./types";

export function countAllAccessibleCells(grid: Grid, conditional: Conditional, targetCell: Cell): number {
  const updateGrid = gridManager(conditional, targetCell);

  const findAllAccessibleCells = ({ grid, count: runningCount }: GridManagerResult): Bouncing => {
    const { count, grid: updatedGrid } = updateGrid({ grid, count: runningCount });
    if (count === runningCount) {
      return { count, grid: updatedGrid };
    }
    return () => findAllAccessibleCells({ grid: updatedGrid, count });
  }

  const trampoline = (fn: () => Bouncing): GridManagerResult => {
    let loops = 1;
    let result: Bouncing = fn();
    while (typeof result === 'function') {
      result = result();
      loops++;
    }
    console.log(`loops: ${loops}`);
    return result;
  }

  const { count: finalCount } = trampoline(() => findAllAccessibleCells({ grid, count: 0 }));

  return finalCount;
}

function printGrid(grid: Grid): void {
  console.log('\n--------------------------------');
  grid.map.forEach((row) => {
    console.log(row.join(''));
  });
  console.log('--------------------------------\n');
}

export function gridManager(conditional: Conditional, targetCell: Cell): (props: GridManagerResult) => GridManagerResult {
  return ({ grid, count }: GridManagerResult): GridManagerResult => {
    let updatedCount = 0;
    let updatedGrid: Grid = { ...grid };

    grid.map.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === targetCell) {
          if (conditional({ x, y }, grid)) {
            updatedCount++;
            updatedGrid.map[y][x] = 'x';
          }
        }
      });
    });

    const newCount = count + updatedCount;

    return { count: newCount, grid: updatedGrid };
  };
}
