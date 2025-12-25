import { findArea, findLargestArea } from "./findLargestArea";

describe('findArea', () => {
  it('should return the area', () => {
    const tileA = { x: 0, y: 0 };
    const tileB = { x: 1, y: 0 };
    const result = findArea(tileA, tileB);
    expect(result).toEqual(2);
  });
});

// describe('findLargestArea', () => {
//   it('should return the largest area', () => {
//     const tilePositions = [
//       { x: 0, y: 0 },
//       { x: 1, y: 0 },
//       { x: 0, y: 1 },
//       { x: 1, y: 1 },
//     ];
//     const result = findLargestArea(tilePositions);
//     expect(result).toEqual(1);
//   });
// });
