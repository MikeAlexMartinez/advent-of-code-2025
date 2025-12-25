import { Floor, FloorGrid, Tile, TilePosition } from "./types";

export function parseInput(input: string): TilePosition[] {
  return input.split('\n').map((line) => {
    const [x, y] = line.split(',').map(Number);
    return { x, y };
  });
}

function printGrid(floor: Floor) {
  console.log('\n--------------------------------');
  floor.grid.forEach((row) => {
    console.log(row.join(''));
  });
  console.log('--------------------------------\n');
}

export function buildFloor(tilePositions: TilePosition[]): Floor {
  console.log('tilePositions', tilePositions);
  const floor: FloorGrid = [];

  const maxX = Math.max(...tilePositions.map((tile) => tile.x));
  const maxY = Math.max(...tilePositions.map((tile) => tile.y));

  console.log('maxX', maxX);
  console.log('maxY', maxY);

  for (let y = 0; y <= maxY; y++) {
    const row: Tile[] = [];
    for (let x = 0; x <= maxX; x++) {
      row.push('.');
    }
    floor.push(row);
  }

  printGrid({ grid: floor, maxX, maxY });

  tilePositions.forEach((tile) => {
    const { x, y } = tile;
    floor[y][x] = '#';
  });

  return { grid: floor, maxX, maxY };
}
