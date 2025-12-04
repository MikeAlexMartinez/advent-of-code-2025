export type Cell = '.' | '@';
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
