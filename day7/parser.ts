import { Cell, Grid } from "./types";

export function parseInput(input: string): Grid {
  return input.split('\n').map((row) => row.split('') as Cell[]);
}
