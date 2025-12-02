import { readInput } from '../shared/readInput';
import { sumInvalidIds } from './sumInvalidIds';
import { parseInput } from './parser';
import { isInvalidId, isInvalidIdTwo } from './isInvalidId';

function main(): void {
  const input = readInput(2);

  const ids = parseInput(input);
  // const invalidIdSum = sumInvalidIds(ids, isInvalidId);
  const invalidIdSum = sumInvalidIds(ids, isInvalidIdTwo);

  console.log("invalidIdSum: ", invalidIdSum);
}

main();
