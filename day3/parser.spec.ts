import { parseInput } from "./parser";

describe('parseInput', () => {
  it('should parse the input', () => {
    const input = '1234567890\n1234567890';
    const result = parseInput(input);
    expect(result).toEqual(['1234567890', '1234567890']);
  });
});
