// 11-22
// 95-115
// 998-1012
// 1188511880-1188511890
// 222220-222224
// 1698522-1698528
// 446443-446449
// 38593856-38593862

import { ID } from "./types";

export function trimZeros(id: string): string {
  return id.replace(/^0+/, '');
}

function generateIds(start: string, end: string): string[] {
  const ids = [];
  for (let i = parseInt(start); i <= parseInt(end); i++) {
    ids.push(i.toString());
  }
  return ids;
}

export function parseIdPair(input: string): ID[] {
  const range = input.split('-');
  const start = trimZeros(range[0]);
  const end = trimZeros(range[1]);

  const ids = generateIds(start, end);

  return ids.map(value => {
    return { value, length: value.length };
  });
}

export function parseInput(input: string): ID[] {
  return input.split(',').flatMap(parseIdPair);
}
