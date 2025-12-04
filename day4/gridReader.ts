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
    let result: Bouncing = fn();
    while (typeof result === 'function') {
      result = result();
    }
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
    let accessibleCells: Position[] = [];
    let updatedGrid: Grid = { ...grid };

    grid.map.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === targetCell) {
          if (conditional({ x, y }, grid, targetCell)) {
            accessibleCells.push({ x, y });
          }
        }
      });
    });

    accessibleCells.forEach(({ x, y }) => {
      updatedGrid.map[y][x] = 'x';
    });

    // printGrid(updatedGrid);
    const newCount = count + accessibleCells.length;
    // console.log(`previous count: ${count}, new count: ${newCount}`);

    return { count: newCount, grid: updatedGrid };
  };
}
