import { parseInput, trimZeros } from "./parser";

describe('trimZeros', () => {
  it('should trim zeros from the start and end of a string', () => {
    expect(trimZeros('11')).toBe('11');
    expect(trimZeros('220')).toBe('220');
    expect(trimZeros('330')).toBe('330');
    expect(trimZeros('4500')).toBe('4500');
    expect(trimZeros('0067')).toBe('67');
  });
});

describe('parseInput', () => {
  it('should parse the input', () => {
    const input = parseInput('11-14,99-101');

    expect(input).toEqual([
      { value: '11', length: 2 },
      { value: '12', length: 2 },
      { value: '13', length: 2 },
      { value: '14', length: 2 },
      { value: '99', length: 2 },
      { value: '100', length: 3 },
      { value: '101', length: 3 },
    ]);
  });
});
