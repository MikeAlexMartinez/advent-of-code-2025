import { parseInput } from "./parser";

describe('parseInput', () => {
  it('should parse the input', () => {
    const input = `.......S.......
...............
.......^.......`;
    const result = parseInput(input);
    expect(result).toEqual([
      ['.', '.', '.', '.', '.', '.', '.', 'S', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '^', '.', '.', '.', '.', '.', '.', '.'],
    ]);
  });
});
