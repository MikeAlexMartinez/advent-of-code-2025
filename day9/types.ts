export type Tile = '.' | '#' | 'X';
export type TilePosition = {
  x: number;
  y: number;
};
export type FloorGrid = Tile[][];
export type Floor = {
  grid: FloorGrid;
  maxX: number;
  maxY: number;
};
