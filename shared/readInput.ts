import fs from 'node:fs';

export function readInput(day: number): string {
  const filePath = `../day${day}/input.txt`;
  const path = new URL(filePath, import.meta.url);
  return fs.readFileSync(path, 'utf8');
}
