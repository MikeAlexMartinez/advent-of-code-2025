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

import { isInvalidId } from "./isInvalidId";
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