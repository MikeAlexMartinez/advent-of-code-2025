export type Direction = 'L' | 'R';

export interface Instruction {
  direction: Direction;
  distance: number;
}

export type OnZeroCallback = (times: number) => void;

export type Mover = (
  currentPosition: number,
  instruction: Instruction,
  onZero: OnZeroCallback
) => number;
