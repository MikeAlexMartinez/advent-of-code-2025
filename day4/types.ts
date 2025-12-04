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

export interface GridManagerResult {
  count: number;
  grid: Grid;
}

export type Conditional = (position: Position, grid: Grid, targetCell: Cell) => boolean;
export type GridManager = (grid: Grid, conditional: Conditional, targetCell: Cell) => GridManagerResult;

export type Bouncing = GridManagerResult | (() => Bouncing);
