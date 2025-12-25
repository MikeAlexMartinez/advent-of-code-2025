import { TilePosition } from "./types";

export function findArea(tileA: TilePosition, tileB: TilePosition): number {
  const width = Math.abs(tileA.x - tileB.x) + 1;
  const height = Math.abs(tileA.y - tileB.y) + 1;
  return width * height;
}

export function findLargestArea(tilePositions: TilePosition[]): number {
  let maxArea = 0;

  for (let tileAIndex = 0; tileAIndex < tilePositions.length; tileAIndex++) {
    const tileA = tilePositions[tileAIndex];
    for (let tileBIndex = tileAIndex + 1; tileBIndex < tilePositions.length; tileBIndex++) {
      const tileB = tilePositions[tileBIndex];
      const area = findArea(tileA, tileB);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
}
