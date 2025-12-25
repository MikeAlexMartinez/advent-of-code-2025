import { parseInput } from "./parser";

describe('parseInput', () => {
  it.skip('should parse the input', () => {
    const input = '1234567890';
    const result = parseInput(input);
    expect(result).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  });
});
