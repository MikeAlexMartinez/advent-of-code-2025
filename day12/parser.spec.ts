import { parseInput } from "./parser";

const testInput = `0:
###
##.
##.

1:
###
##.
.##

2:
.##
###
##.

3:
##.
###
##.

4:
###
#..
###

5:
###
.#.
###

4x4: 0 0 0 0 2 0
12x5: 1 0 1 0 2 2
12x5: 1 0 1 0 3 2`;

describe('parseInput', () => {
  it('should parse the input', () => {
    const result = parseInput(testInput);
    expect(result.shapes[0]).toEqual([
      ['#', '#', '#'],
      ['#', '#', '.'],
      ['#', '#', '.'],
    ]);
    expect(result.shapes[1]).toEqual([
      ['#', '#', '#'],
      ['#', '#', '.'],
      ['.', '#', '#'],
    ]);
    expect(result.shapes[5]).toEqual([
      ['#', '#', '#'],
      ['.', '#', '.'],
      ['#', '#', '#'],
    ]);

    expect(result.regions).toEqual([
      { width: 4, height: 4, shapeCounts: [0, 0, 0, 0, 2, 0] },
      { width: 12, height: 5, shapeCounts: [1, 0, 1, 0, 2, 2] },
      { width: 12, height: 5, shapeCounts: [1, 0, 1, 0, 3, 2] },
    ]);
  });
});
