import { describe, it, expect } from 'vitest';

import { getPassword } from "./getPassword";
import { Instruction } from "./parser";
import { move } from './safeControl';
import { before } from 'node:test';

/**
 * The dial is rotated L68 to point at 82.
The dial is rotated L30 to point at 52.
The dial is rotated R48 to point at 0.
The dial is rotated L5 to point at 95.
The dial is rotated R60 to point at 55.
The dial is rotated L55 to point at 0.
The dial is rotated L1 to point at 99.
The dial is rotated L99 to point at 0.
The dial is rotated R14 to point at 14.
The dial is rotated L82 to point at 32.
 */

const instructions: Instruction[] = [
  { direction: 'L', distance: 68 }, // 1 - 50 -> 82
  { direction: 'L', distance: 30 }, // 0 - 82 -> 52
  { direction: 'R', distance: 48 }, // 1 - 52 -> 0
  // { direction: 'L', distance: 5 },  // 0
  // { direction: 'R', distance: 60 }, // 1
  // { direction: 'L', distance: 55 }, // 1
  // { direction: 'L', distance: 1 }, // 0
  // { direction: 'L', distance: 99 }, // 1
  // { direction: 'R', distance: 14 }, // 0
  // { direction: 'L', distance: 82 }, // 1
];

// describe('getPassword', () => {
//   it('should return the correct password', () => {
//     const result = getPassword(instructions);
//     expect(result).toBe(3);
//   });
// });

describe('move', () => {
  const onZero = vi.fn();

  beforeEach(() => {
    onZero.mockClear();
  });

  it('should move left', () => {
    const result = move(50, { direction: 'L', distance: 10 }, onZero);
    expect(onZero).not.toHaveBeenCalled();
    expect(result).toBe(40);
  });

  it('should move right', () => {
    const result = move(50, { direction: 'R', distance: 10 }, onZero);
    expect(onZero).not.toHaveBeenCalled();
    expect(result).toBe(60);
  });

  it('should wrap around left', () => {
    const result = move(50, { direction: 'L', distance: 51 }, onZero);
    expect(onZero).toHaveBeenCalledWith(1);
    expect(result).toBe(99);
  });

  it('should wrap around right', () => {
    const result = move(50, { direction: 'R', distance: 51 }, onZero);
    expect(onZero).toHaveBeenCalledWith(1);
    expect(result).toBe(1);
  });
});

describe('getPassword', () => {
  it('should return the correct password when wrapping around right', () => {
    const instructions: Instruction[] = [
      { direction: 'L', distance: 68 }, // 1 - 50 -> 82
      { direction: 'L', distance: 30 }, // 0 - 82 -> 52
      { direction: 'R', distance: 148 }, // 2 - 52 -> 0 finishes on zero
      { direction: 'L', distance: 100 }, // 1 - 0 -> 0 finishes on zero
    ];
    const result = getPassword(instructions);
    expect(result).toBe(4);
  });

  it.only('should return the correct password when wrapping around left', () => {
    const instructions: Instruction[] = [
      { direction: 'L', distance: 100 }, // 1 - 50 -> 50
      { direction: 'L', distance: 25 }, // 0 - 50 -> 25
      { direction: 'L', distance: 125 }, // 2 - 25 -> 0
      { direction: 'L', distance: 200 }, // 2 - 0 -> 0
      { direction: 'L', distance: 2 }, // 0 - 0 -> 98
      { direction: 'R', distance: 2 }, // 1 - 98 -> 0
    ];

    const result = getPassword(instructions);
    expect(result).toBe(6);
  });

  it('should return the correct password when wrapping around multiple times', () => {
    const instructions: Instruction[] = [
      { direction: 'L', distance: 200 }, // 2 - 50 -> 50
      { direction: 'L', distance: 25 }, // 0 - 50 -> 25
      { direction: 'L', distance: 25 }, // 1 - 25 -> 0
      { direction: 'R', distance: 100 }, // 1 - 0 -> 0
      { direction: 'L', distance: 300 }, // 3 - 0 -> 0
    ];

    const result = getPassword(instructions);
    expect(result).toBe(7);
  });
});