import { match } from 'ts-pattern';

import { Instruction, Mover } from './types';

export function clampDistance(distance: number) {
  const divisor = 100;

  return {
    quotient: Math.floor(distance / divisor),
    remainder: distance % divisor,
  };
}

function getNewPosition(currentPosition: number, remainder: number, direction: 'L' | 'R'): number {
  return match(direction)
    .with('L', () => {
      const newPosition = currentPosition - remainder;
      return newPosition < 0 ? newPosition + 100 : newPosition;
    })
    .with('R', () => {
      const newPosition = currentPosition + remainder;
      return newPosition > 99 ? newPosition - 100 : newPosition;
    })
    .exhaustive();
}

export const movePartOne: Mover = function (currentPosition, instruction, onZero) {
  const { direction, distance } = instruction;
  const { remainder } = clampDistance(distance);

  const newPosition = getNewPosition(currentPosition, remainder, direction);

  if (currentPosition === 0) {
    onZero(1);
  }

  return newPosition;
};

export const movePartTwo: Mover = function (currentPosition: number, instruction: Instruction, onZero: (times: number) => void): number {
  const { direction, distance } = instruction;
  const { quotient, remainder } = clampDistance(distance);

  if (quotient > 0) {
    onZero(quotient);
    if (remainder === 0) {
      return currentPosition;
    }
  }

  if (direction === 'L') {
    const newPosition = currentPosition - remainder;

    if (newPosition < 0) {
      if (currentPosition !== 0) {
        onZero(1);
      }
      return newPosition + 100;
    }

    if (newPosition === 0) {
      onZero(1);
    }

    return newPosition;
  }

  // turning right
  const newPosition = currentPosition + remainder;

  if (newPosition <= 99) {
    return newPosition;
  }

  onZero(1);
  return newPosition - 100;
}

export function safeControl(onZero: (times: number) => void, mover: Mover) {
  let currentPosition = 50;

  function turn(instruction: Instruction): void {
    currentPosition = mover(currentPosition, instruction, onZero);
  }

  return {
    turn,
  };
}
