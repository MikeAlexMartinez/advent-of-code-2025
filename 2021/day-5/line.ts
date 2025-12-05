import { Grid, Line } from "./types";

export function filterHorizontalAndVerticalLines(lines: Line[]): Line[] {
  return lines.filter((line) => {
    const { start, end } = line;
    const { x: startX, y: startY } = start;
    const { x: endX, y: endY } = end;
    return startX === endX || startY === endY;
  });
}

export function drawLine(grid: Grid, line: Line) {
  const { start, end } = line;
  const { x: startX, y: startY } = start;
  const { x: endX, y: endY } = end;

  if (startX === endX) {
    if (startY < endY) {
      for (let y = startY; y <= endY; y++) {
        grid[y][startX]++;
      }
    } else {
      for (let y = startY; y >= endY; y--) {
        grid[y][startX]++;
      }
    }
  }

  if (startY === endY) {
    if (startX < endX) {
      for (let x = startX; x <= endX; x++) {
        grid[startY][x]++;
      }
    } else {
      for (let x = startX; x >= endX; x--) {
        grid[startY][x]++;
      }
    }
  }
}

function printGrid(grid: Grid) {
  console.log('\n========================================');
  console.log(grid.map(row => row.join('')).join('\n'));
  console.log('========================================\n');
}

export function drawLines(grid: Grid, lines: Line[]) {
  lines.forEach(line => {
    drawLine(grid, line);
  });
}

export function countOverlaps(grid: Grid) {
  return grid.flat()
    .reduce((acc, point) => point > 1 ? acc + 1 : acc, 0);
}
