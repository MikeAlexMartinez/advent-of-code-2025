
import { readInput } from '../shared/readInput';
import { parseInput } from './parser';
import { getPassword } from './getPassword';

function main(): void {
  const input = readInput(1);
  const instructions = parseInput(input);

  const password = getPassword(instructions);

  console.log("password: ", password);
}

main();
