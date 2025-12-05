import { buildGrid } from "./grid";

describe('buildGrid', () => {
  it('should build a grid with the correct dimensions', () => {
    const grid = buildGrid([
      { start: { x: 0, y: 9 }, end: { x: 5, y: 9 } },
      { start: { x: 9, y: 4 }, end: { x: 3, y: 4 } },
      { start: { x: 2, y: 2 }, end: { x: 2, y: 1 } },
      { start: { x: 7, y: 0 }, end: { x: 7, y: 4 } },
      { start: { x: 0, y: 9 }, end: { x: 2, y: 9 } },
      { start: { x: 3, y: 4 }, end: { x: 1, y: 4 } },
    ]);
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});
