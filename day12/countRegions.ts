import { regionCanFitShapes } from "./regionCanFitShapes";
import { ParsedInput } from "./types";


export function countRegions(input: ParsedInput): number {
  const { regions, shapes } = input;

  return regions.reduce((acc, region) =>
    regionCanFitShapes(region, shapes)
      ? acc + 1
      : acc
    , 0);
}
