import { Floor } from "./types";

export function buildPerimeter(floor: Floor): Floor {
  const updatedFloor = { ...floor };
  let addTiles = false;

  for (let y = 0; y <= floor.maxY; y++) {
    for (let x = 0; x <= floor.maxX; x++) {
      if (updatedFloor.grid[y][x] === '#') {
        addTiles = !addTiles;
        continue;
      }

      if (addTiles) {
        updatedFloor.grid[y][x] = 'X';
      }
    }
  }

  addTiles = false;
  for (let x = 0; x <= floor.maxX; x++) {
    for (let y = 0; y <= floor.maxY; y++) {
      if (updatedFloor.grid[y][x] === '#') {
        addTiles = !addTiles;
        continue;
      }

      if (addTiles) {
        updatedFloor.grid[y][x] = 'X';
      }
    }
  }

  return updatedFloor;
}
