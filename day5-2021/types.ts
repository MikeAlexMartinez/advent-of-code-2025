export type Range = {
  start: number;
  end: number;
}

export type PositionRange = {
  x: Range;
  y: Range;
}

export type Position = {
  x: number;
  y: number;
}

export type Line = {
  start: Position;
  end: Position;
}

export type ParsedInput = {
  lines: Line[];
  width: number;
  height: number;
}

export type Point = number;

export type Grid = Point[][];

