import { Grid } from "./types";

export function parseInput<T>(input: string): Grid<T> {
  return input.split('\n').map((row) => row.split('') as T[]);
}
