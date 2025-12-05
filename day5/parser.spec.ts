import { parseInput } from "./parser";
import { Inventory } from "./types";

describe('parseInput', () => {
  it('should parse the input', () => {
    const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;
    const result = parseInput(input);
    expect(result).toEqual({
      ranges: [
        { start: 3, end: 5 },
        { start: 10, end: 14 },
        { start: 16, end: 20 },
        { start: 12, end: 18 },
      ],
      ids: [1, 5, 8, 11, 17, 32],
    });
  });
});
