export type Cell = '.' | '@' | 'x';
export type Row = Cell[];
export interface Grid {
  map: Row[];
  width: number;
  height: number;
}

export type Position = {
  x: number;
  y: number;
};

export type Conditional = (position: Position, grid: Grid, targetCell: Cell) => boolean;
