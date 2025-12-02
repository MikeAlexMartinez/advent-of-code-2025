import fs from 'node:fs';

import { Day } from './types';

export function readInput(day: Day): string {
  const filePath = `../day${day}/input.txt`;
  const path = new URL(filePath, import.meta.url);
  return fs.readFileSync(path, 'utf8');
}
