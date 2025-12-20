import { Cell, ParsedInput, RegionList, ShapeList } from "./types";

function parseShapes(shapeRows: string[], count: number): ShapeList {
  let shapes: ShapeList = [];

  for (let i = 0; i < count; i++) {
    const shape = [];
    const rows = shapeRows.slice((i * 5) + 1, (i * 5) + 4);
    for (const row of rows) {
      shape.push(row.split('') as Cell[]);
    }
    shapes.push(shape);
  }
  return shapes;
}

function parseRegions(regionRows: string[]): RegionList {
  return regionRows.map(regionRow => {
    const region = regionRow.split(' ');

    const [width, height] = region[0]
      .replace(':', '')
      .split('x')
      .map(Number);

    return {
      width,
      height,
      shapeCounts: region.slice(1).map(Number),
    };
  });
}

export function parseInput(input: string): ParsedInput {
  const rows = input.split('\n');

  const finalRow = rows[rows.length - 1];
  const finalRowValues = finalRow.split(' ');
  const shapeCount = finalRowValues.length - 1;

  const shapeRows = rows.slice(0, shapeCount * 5);
  const regionRows = rows.slice(shapeCount * 5);

  return {
    shapes: parseShapes(shapeRows, shapeCount),
    regions: parseRegions(regionRows),
  };
}
