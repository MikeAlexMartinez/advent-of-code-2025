import { Cell, Grid, isBeam, isSplitter, isStart } from "./types";


function aboveIsBeam(grid: Grid<Cell>, i: number, j: number): boolean {
  const aboveCell = grid[i - 1][j];
  return isBeam(aboveCell);
}

function aboveIsStart(grid: Grid<Cell>, i: number, j: number): boolean {
  const aboveCell = grid[i - 1][j];
  return isStart(aboveCell);
}

function setBeam(grid: Grid<Cell>, i: number, j: number): void {
  grid[i][j] = '|';
}

function createBeams(grid: Grid<Cell>, i: number, j: number): void {
  grid[i][j - 1] = '|';
  grid[i][j + 1] = '|';
  grid[i + 1][j - 1] = '|';
  grid[i + 1][j + 1] = '|';
}

function printGrid(grid: Grid<Cell>): void {
  console.log('\n--------------------------------');
  const stringGrid = grid.map(row => row.join('')).join('\n');
  console.log(stringGrid);
  console.log('--------------------------------\n');
}

export function countSplits(grid: Grid<Cell>): number {
  let count = 0;
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;
  for (let i = 1; i < gridHeight; i++) {
    const row = grid[i];
    for (let j = 0; j < gridWidth - 1; j++) {
      const cell = row[j];
      if (aboveIsStart(grid, i, j)) {
        setBeam(grid, i, j);
        continue;
      }
      if (isSplitter(cell) && aboveIsBeam(grid, i, j)) {
        count++;
        createBeams(grid, i, j);
        continue;
      }
      if (aboveIsBeam(grid, i, j)) {
        setBeam(grid, i, j);
        continue;
      }
    }
    printGrid(grid);
  }
  return count;
}
