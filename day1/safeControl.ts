import { Instruction } from './parser';

export function clampDistance(distance: number) {
  const divisor = 100;

  return {
    quotient: Math.floor(distance / divisor),
    remainder: distance % divisor,
  };
}

export function move(currentPosition: number, instruction: Instruction, onZero: (times: number) => void): number {
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

export function safeControl(onZero: (times: number) => void) {
  let currentPosition = 50;

  function turn(instruction: Instruction): void {
    currentPosition = move(currentPosition, instruction, onZero);
  }

  return {
    turn,
  };
}
