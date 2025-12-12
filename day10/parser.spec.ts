import { parseInput } from "./parser";

describe('parseInput', () => {
  it('should parse the input', () => {
    const input = '[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}';
    const result = parseInput(input);
    expect(result).toEqual([{
      indicatorLightDiagram: '[.##.]',
      buttonWiringSchematics: ['(3)', '(1,3)', '(2)', '(2,3)', '(0,2)', '(0,1)'],
      joltageRequirements: '{3,5,4,7}',
    }]);
  });
});
