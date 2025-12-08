import { parseInput, parseInputPartTwo } from "./parser";

const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;

describe('parseInput', () => {
  it('should parse the input', () => {
    const result = parseInput(input);
    expect(result).toEqual([
      { values: [123, 45, 6], operation: '*' },
      { values: [328, 64, 98], operation: '+' },
      { values: [51, 387, 215], operation: '*' },
      { values: [64, 23, 314], operation: '+' },
    ]);
  });
});

describe('parseInputPartTwo', () => {
  it('should parse the input', () => {
    const result = parseInputPartTwo(input);

    expect(result).toEqual({
      numberRows: [
        ['1', '2', '3', ' ', '3', '2', '8', ' ', ' ', '5', '1', ' ', '6', '4', ' '],
        [' ', '4', '5', ' ', '6', '4', ' ', ' ', '3', '8', '7', ' ', '2', '3', ' '],
        [' ', ' ', '6', ' ', '9', '8', ' ', ' ', '2', '1', '5', ' ', '3', '1', '4'],
      ],
      operationsRow: ['*', ' ', ' ', ' ', '+', ' ', ' ', ' ', '*', ' ', ' ', ' ', '+', ' ', ' '],
    });
  });
});
