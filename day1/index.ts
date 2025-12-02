import fs from 'node:fs';

import { parseInput } from './parser';
import { safeControl } from './safeControl';
import { getPassword } from './getPassword';

function main(): void {
  const path = new URL('./input.txt', import.meta.url);
  const input = fs.readFileSync(path, 'utf8');
  const instructions = parseInput(input);

  const password = getPassword(instructions);

  console.log("password: ", password);
}

main();
