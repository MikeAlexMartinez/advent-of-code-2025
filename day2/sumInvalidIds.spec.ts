/*
11-22 has two invalid IDs, 11 and 22.
95-115 has one invalid ID, 99.
998-1012 has one invalid ID, 1010.
1188511880-1188511890 has one invalid ID, 1188511885.
222220-222224 has one invalid ID, 222222.
1698522-1698528 contains no invalid IDs.
446443-446449 has one invalid ID, 446446.
38593856-38593862 has one invalid ID, 38593859.
*/

import { describe, it, expect } from 'vitest';
import { sumInvalidIds } from './sumInvalidIds';
import { parseInput } from './parser';

describe('sumInvalidIds', () => {
  const example = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862";
  it('should sum the invalid ids', () => {
    console.log("example: ", 11 + 22 + 99 + 1010 + 1188511885 + 222222 + 446446 + 38593859);
    const ids = parseInput(example);
    const result = sumInvalidIds(ids);
    expect(result).toBe(1227775554);
  });
});