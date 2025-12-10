import { Grid, isSplitter, isStart, isTimeline, Timeline, TimelineCell } from "./types";

function aboveIsTimeline(grid: Grid<TimelineCell>, i: number, j: number): boolean {
  const aboveCell = grid[i - 1][j];
  return isTimeline(aboveCell);
}

function aboveIsStart(grid: Grid<TimelineCell>, i: number, j: number): boolean {
  const aboveCell = grid[i - 1][j];
  return isStart(aboveCell);
}

function setTimeline(grid: Grid<TimelineCell>, i: number, j: number, timeline: Timeline): void {
  if (isTimeline(grid[i][j])) {
    grid[i][j] += timeline;
  } else {
    grid[i][j] = timeline;
  }
}

function incrementTimeline(grid: Grid<TimelineCell>, i: number, j: number, incomingTimeline: Timeline): void {
  if (isTimeline(grid[i][j])) {
    grid[i][j] += incomingTimeline;
  } else {
    grid[i][j] = incomingTimeline;
  }
}

function splitTimelines(grid: Grid<TimelineCell>, i: number, j: number): void {
  const incomingTimeline = grid[i - 1][j] as Timeline;
  incrementTimeline(grid, i, j - 1, incomingTimeline);
  incrementTimeline(grid, i, j + 1, incomingTimeline);
}

function printGrid(grid: Grid<TimelineCell>): void {
  console.log('\n--------------------------------');
  const stringGrid = grid.map(row => row.join('  ')).join('\n');
  console.log(stringGrid);
  console.log('--------------------------------\n');
}

export function countTimelines(grid: Grid<TimelineCell>): number {
  let count = 0;
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;
  for (let i = 1; i < gridHeight; i++) {
    const row = grid[i];
    for (let j = 0; j < gridWidth; j++) {
      const cell = row[j];
      if (aboveIsStart(grid, i, j)) {
        setTimeline(grid, i, j, 1);
        continue;
      }
      if (isSplitter(cell) && aboveIsTimeline(grid, i, j)) {
        splitTimelines(grid, i, j);
        continue;
      }
      if (aboveIsTimeline(grid, i, j)) {
        setTimeline(grid, i, j, grid[i - 1][j] as Timeline);
        continue;
      }
    }
    printGrid(grid);
  }

  const finalRow = grid[gridHeight - 1];

  return finalRow.reduce<number>(
    (acc, cell) =>
      isTimeline(cell) ? cell + acc : acc
    , 0);
}
