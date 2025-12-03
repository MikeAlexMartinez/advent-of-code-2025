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

export function findMaxVoltageTwo(bank: string): number {
  const digits = bank.split('').map(Number);
  let combination = [];

  for (let i = 0; i < digits.length - 12; i++) {
    const [value, index] = findLargestNthDigit(digits, i, digits.length);
    combination.push(value);
    i = index;
  }

  return parseInt(combination.join(''));
}

function findLargestNthDigit(digits: number[], start: number, end: number): LargestNthDigit {
  let maxIndex = 0;
  let max = 0;

  for (let i = start; i < end; i++) {
    if (digits[i] > max) {
      max = digits[i];
      maxIndex = i;
    }
  }

  return [max, maxIndex];
}
