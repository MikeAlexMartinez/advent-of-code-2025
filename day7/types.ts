export type Start = 'S';
export type Empty = '.';
export type Splitter = '^';
export type Beam = '|';
export type Cell = Start | Empty | Splitter | Beam;
export type Grid = Cell[][];

export function isStart(cell: Cell): cell is Start {
  return cell === 'S';
}

export function isEmpty(cell: Cell): cell is Empty {
  return cell === '.';
}

export function isSplitter(cell: Cell): cell is Splitter {
  return cell === '^';
}

export function isBeam(cell: Cell): cell is Beam {
  return cell === '|';
}

export function isCell(cell: Cell): cell is Cell {
  return isStart(cell) || isEmpty(cell) || isSplitter(cell) || isBeam(cell);
}
