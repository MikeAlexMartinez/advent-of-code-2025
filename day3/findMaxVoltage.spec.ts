import { findLargestNthDigit, findMaxVoltageTwo } from "./findMaxVoltage";

describe('findLargestNthDigit', () => {
  it('should return the largest nth digit', () => {
    const digits = [1, 2, 3, 4, 5];
    const start = 0;
    const targetLength = 1;
    const result = findLargestNthDigit(digits, start, targetLength);
    expect(result).toEqual([5, 4]);
  });

  it('should return the largest nth digit for mixed values', () => {
    const digits = [1, 2, 3, 9, 7, 6, 9, 8, 9, 0];
    const start = 0;
    const targetLength = 1;
    const result = findLargestNthDigit(digits, start, targetLength);
    expect(result).toEqual([9, 3]);
  });

  it('should return the largest nth digit for mixed values', () => {
    const digits = [9, 2, 3, 9, 7, 6, 9, 8, 9, 0];
    const start = 0;
    const targetLength = 1;
    const result = findLargestNthDigit(digits, start, targetLength);
    expect(result).toEqual([9, 0]);
  });

  it('should return the largest nth digit for mixed values starting from the second index', () => {
    const digits = [9, 2, 3, 9, 7, 6, 9, 8, 9, 0];
    const start = 3;
    const targetLength = 1;
    const result = findLargestNthDigit(digits, start, targetLength);
    expect(result).toEqual([9, 3]);
  });

  it('should return the largest nth digit for mixed values length is greater than 1', () => {
    const digits = [1, 2, 3, 5, 7, 6, 9, 8, 9, 0];
    const start = 3;
    const targetLength = 5;
    const result = findLargestNthDigit(digits, start, targetLength);
    expect(result).toEqual([7, 4]);
  });

  describe('example values', () => {
    describe('with full length', () => {
      const values = [
        ['987654321111111'.split('').map(Number), [9, 0]],
        ['811111111111119'.split('').map(Number), [9, 14]],
        ['234234234234278'.split('').map(Number), [8, 14]],
        ['818181911112111'.split('').map(Number), [9, 6]],
      ];

      it.each(values)('should return the largest nth digit for the value: %s', (digits, expected) => {
        const start = 0;
        const targetLength = 1;
        const result = findLargestNthDigit(digits, start, targetLength);
        expect(result).toEqual(expected);
      });
    });

    describe('with partial length', () => {
      const values = [
        ['987654321111111'.split('').map(Number), [9, 0]],
        ['811111111111119'.split('').map(Number), [8, 0]],
        ['234234234234278'.split('').map(Number), [4, 2]],
        ['818181911112111'.split('').map(Number), [8, 0]],
      ];

      it.each(values)('should return the largest nth digit for the value: %s', (digits, expected) => {
        const start = 0;
        const targetLength = 12;
        const result = findLargestNthDigit(digits, start, targetLength);
        expect(result).toEqual(expected);
      });
    });
  });
});

describe('findMaxVoltageTwo', () => {
  it('should return the largest voltage for the value: 987654321111111', () => {
    const value = '987654321111111';
    const result = findMaxVoltageTwo(value, 4);
    expect(result).toEqual(9876);
  });

  it('should return the largest voltage for the value: 1111114321111111', () => {
    const value = '1111114321111111';
    const result = findMaxVoltageTwo(value, 4);
    expect(result).toEqual(4321);
  });

  describe('example values', () => {
    const values: [string, number][] = [
      ['987654321111111', 987654321111],
      ['811111111111119', 811111111119],
      ['234234234234278', 434234234278],
      ['818181911112111', 888911112111],
    ];

    it.each(values)('should return the largest voltage for the value: %s', (value, expected) => {
      const result = findMaxVoltageTwo(value, 12);
      expect(result).toEqual(expected);
    });
  });
});
