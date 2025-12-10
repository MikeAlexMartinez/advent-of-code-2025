export type Start = 'S';
export type Empty = '.';
export type Splitter = '^';
export type Beam = '|';
export type Timeline = number;
export type Cell = Start | Empty | Splitter | Beam;
export type TimelineCell = Start | Empty | Splitter | Timeline;
export type Grid<T> = T[][];

export function isStart(cell: unknown): cell is Start {
  return cell === 'S';
}

export function isEmpty(cell: unknown): cell is Empty {
  return cell === '.';
}

export function isSplitter(cell: unknown): cell is Splitter {
  return cell === '^';
}

export function isBeam(cell: unknown): cell is Beam {
  return cell === '|';
}

export function isTimeline(cell: unknown): cell is Timeline {
  return typeof cell === 'number';
}

export function isCell(cell: unknown): cell is Cell {
  return isStart(cell) || isEmpty(cell) || isSplitter(cell) || isBeam(cell);
}

export function isTimelineCell(cell: unknown): cell is TimelineCell {
  return isStart(cell) || isEmpty(cell) || isSplitter(cell) || isTimeline(cell);
}
