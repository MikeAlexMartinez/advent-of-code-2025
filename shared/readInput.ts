import fs from 'node:fs';

import { Day, Part } from './types';

export function readInput(day: Day, part: Part, test: boolean = false): string {
  const testSuffix = test ? '.test' : '';
  const partSuffix = `.${part}`;
  const filePath = `../day${day}/input${testSuffix}${partSuffix}.txt`;
  const path = new URL(filePath, import.meta.url);
  return fs.readFileSync(path, 'utf8');
}
