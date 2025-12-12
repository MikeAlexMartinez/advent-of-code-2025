import { convertLightDiagramToBinary, convertPowersToBinary, findMinTogglesToTarget, mapSchematicToBinaryValues } from "./minTogglesToTarget";

describe('convertPowersToBinary', () => {
  it('should convert powers to binary', () => {
    const result = convertPowersToBinary([1, 3], 4);
    expect(result).toEqual(0b0101);
  });
});


describe('convertLightDiagramToBinary', () => {
  it('should convert light diagram to binary', () => {
    const result = convertLightDiagramToBinary('[.##.]');
    expect(result).toEqual(0b0110);
  });

  it('should convert light diagram to binary for second machine', () => {
    const result = convertLightDiagramToBinary('[...#.]');
    expect(result).toEqual(0b00010);
  });
});

describe('mapSchematicToBinaryValues', () => {
  it('should map schematic to binary', () => {
    const result = mapSchematicToBinaryValues({
      indicatorLightDiagram: '[.##.]',
      buttonWiringSchematics: ['(3)', '(1,3)', '(2)', '(2,3)', '(0,2)', '(0,1)'],
      joltageRequirements: '{3,5,4,7}'
    });
    expect(result).toEqual([0b0001, 0b0101, 0b0010, 0b0011, 0b1010, 0b1100]);
  });
});

describe('findMinTogglesToTarget', () => {
  it('should find the minimum number of toggles to target', () => {
    const result = findMinTogglesToTarget([0b0001, 0b0101, 0b0100, 0b0011, 0b1010, 0b1100], 0b0110);
    expect(result).toEqual({ count: 2, operations: [0b0101, 0b0011] });
  });
});
