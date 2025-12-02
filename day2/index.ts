import { readInput } from '../shared/readInput';
import { sumInvalidIds } from './sumInvalidIds';
import { parseInput } from './parser';

function main(): void {
  const input = readInput(2);

  const ids = parseInput(input);
  const invalidIdSum = sumInvalidIds(ids);

  console.log("invalidIdSum: ", invalidIdSum);
}

main();
