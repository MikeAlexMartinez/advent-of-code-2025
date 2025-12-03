export function findMaxVoltage(bank: string): number {
  const expandedValues = expand(bank.split(''));
  return Math.max(...expandedValues);
}

export function expand(bank: string[]): number[] {
  const results = [];

  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      const value = parseInt(`${bank[i]}${bank[j]}`);
      results.push(value);
    }
  }

  return results;
}

export function findMaxVoltageTwo(bank: string, length = 12): number {
  const digits = bank.split('').map(Number);
  let combination = [];

  let targetLength = length;
  let i = 0;

  while (targetLength > 0) {
    const [value, index] = findLargestNthDigit(digits, i, targetLength);
    combination.push(value);
    i = index + 1;
    targetLength--;
  }

  return parseInt(combination.join(''));
}

export function findLargestNthDigit(digits: number[], start: number, targetLength: number): LargestNthDigit {
  let maxIndex = start;
  let max = 0;

  for (let i = start; i <= digits.length - targetLength; i++) {
    const value = digits[i];
    if (value > max) {
      max = value;
      maxIndex = i;
    }
  }

  return [max, maxIndex];
}
