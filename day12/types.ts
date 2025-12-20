export type Cell = '.' | '#';
export type Shape = Cell[][];
export type ShapeList = Shape[];

export type Region = {
  width: number;
  height: number;
  shapeCounts: number[];
}

export type RegionList = Region[];

export type ParsedInput = {
  shapes: ShapeList;
  regions: RegionList;
}
