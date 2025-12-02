// 11 - true
// 22 - true
// 95 - false
// 115 - false
// 998 - false
// 1012 - false
// 1188511880 - true
// 1188511890 - false
// 222220 - true
// 222224 - 
// 1698522
// 1698528
// 446443
// 446449
// 38593856
// 38593862

import { containsRepeatedSequences, isInvalidId, isInvalidIdTwo } from "./isInvalidId";
import { ID } from "./types";

describe('isInvalidId', () => {
  const inputs: [string, boolean][] = [
    ['11', true],
    ['22', true],
    ['95', false],
    ['115', false],
    ['998', false],
    ['999', false],
    ['1012', false],
    ['11881188', true],
    ['11881189', false],
    ['222222', true],
    ['222224', false],
    ['1698522', false],
    ['1698528', false],
    ['446443', false],
    ['446449', false],
    ['38593856', false],
    ['38593862', false],
    ['38593859', true],
  ];

  it.each(inputs)('should return expected value for the id: %s', (input, expected) => {
    expect(
      isInvalidId({ value: input, length: input.length }),
      `isInvalidId(${input}) should be ${expected}`
    ).toBe(expected);
  });
});

describe('containsRepeatedSequence', () => {
  it('should return true if the value contains a repeated sequence of the given length', () => {
    expect(containsRepeatedSequences('1111')(1)).toBe(true);
    expect(containsRepeatedSequences('1212')(2)).toBe(true);
    expect(containsRepeatedSequences('121212')(2)).toBe(true);
  });

  it('should return false if the value does not contain a repeated sequence of the given length', () => {
    expect(containsRepeatedSequences('1234')(1)).toBe(false);
    expect(containsRepeatedSequences('1234')(2)).toBe(false);
    expect(containsRepeatedSequences('1214')(1)).toBe(false);
    expect(containsRepeatedSequences('1214')(2)).toBe(false);
  });
});

describe('isInvalidIdTwo', () => {
  it('should return true if the value contains a repeated sequence of the given length', () => {
    expect(isInvalidIdTwo({ value: '1', length: 1 })).toBe(false);
    expect(isInvalidIdTwo({ value: '11', length: 2 })).toBe(true);
    expect(isInvalidIdTwo({ value: '1010', length: 4 })).toBe(true);
    expect(isInvalidIdTwo({ value: '1111', length: 4 })).toBe(true);
    expect(isInvalidIdTwo({ value: '112112', length: 6 })).toBe(true);
    expect(isInvalidIdTwo({ value: '123123123', length: 9 })).toBe(true);
    expect(isInvalidIdTwo({ value: '123123124', length: 9 })).toBe(false);
    expect(isInvalidIdTwo({ value: '123451234512345', length: 15 })).toBe(true);
    expect(isInvalidIdTwo({ value: '123451234512545', length: 15 })).toBe(false);
  });
});