import { buildGrid } from "./grid";
import { drawLine, filterHorizontalAndVerticalLines } from "./line";


describe('filterHorizontalAndVerticalLines', () => {
  it('should filter horizontal and vertical lines', () => {
    const lines = [
      { start: { x: 0, y: 9 }, end: { x: 5, y: 9 } },
      { start: { x: 8, y: 0 }, end: { x: 0, y: 8 } },
      { start: { x: 9, y: 4 }, end: { x: 3, y: 4 } },
      { start: { x: 2, y: 2 }, end: { x: 2, y: 1 } },
      { start: { x: 7, y: 0 }, end: { x: 7, y: 4 } },
      { start: { x: 6, y: 4 }, end: { x: 2, y: 0 } },
      { start: { x: 0, y: 9 }, end: { x: 2, y: 9 } },
      { start: { x: 3, y: 4 }, end: { x: 1, y: 4 } },
      { start: { x: 0, y: 0 }, end: { x: 8, y: 8 } },
      { start: { x: 5, y: 5 }, end: { x: 8, y: 2 } },
    ];
    const result = filterHorizontalAndVerticalLines(lines);
    expect(result).toEqual([
      { start: { x: 0, y: 9 }, end: { x: 5, y: 9 } },
      { start: { x: 9, y: 4 }, end: { x: 3, y: 4 } },
      { start: { x: 2, y: 2 }, end: { x: 2, y: 1 } },
      { start: { x: 7, y: 0 }, end: { x: 7, y: 4 } },
      { start: { x: 0, y: 9 }, end: { x: 2, y: 9 } },
      { start: { x: 3, y: 4 }, end: { x: 1, y: 4 } },
    ]);
  });
});

function testGrid() {
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

describe('drawLine', () => {
  it('should draw a line', () => {
    const grid = testGrid();
    drawLine(grid, { start: { x: 0, y: 9 }, end: { x: 5, y: 9 } });
    expect(grid).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    ]);
  });

  it.only('should draw a line from 9,4 to 3,4', () => {
    const grid = testGrid();
    drawLine(grid, { start: { x: 9, y: 4 }, end: { x: 3, y: 4 } });
    expect(grid).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});