import { Inventory } from "./types";

export function parseInput(input: string): Inventory {
  const [ranges, ids] = input.split('\n\n');

  return {
    ranges: ranges.split('\n').map(range => {
      const [first, second] = range.split('-');
      const firstNumber = parseInt(first);
      const secondNumber = parseInt(second);
      return {
        start: Math.min(firstNumber, secondNumber),
        end: Math.max(firstNumber, secondNumber),
      };
    }),
    ids: ids.split('\n').map(Number),
  };
}
