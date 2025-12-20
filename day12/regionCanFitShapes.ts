import { Region, ShapeList } from "./types";

export function regionCanFitShapes(region: Region, shapes: ShapeList): boolean {
  const maxArea = region.width * region.height;
  const shapesTotalArea = region.shapeCounts.reduce((acc, shapeCount, i) => acc + shapeCount * 9, 0);

  if (shapesTotalArea <= maxArea) {
    return true;
  }

  return false;
}
