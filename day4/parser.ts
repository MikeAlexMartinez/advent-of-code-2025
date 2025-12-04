import { Grid, Row } from "./types";

export function buildGrid(input: string): Grid {
  const map = input.split('\n').map(row => row.split('') as Row);

  return {
    map,
    width: map[0].length,
    height: map.length,
  };
}

export function parseInput(input: string): Grid {
  return buildGrid(input);
}
