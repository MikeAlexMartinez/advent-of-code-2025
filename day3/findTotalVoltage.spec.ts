import { findTotalVoltage, findTotalVoltageTwo } from "./findTotalVoltage";

describe('findTotalVoltage', () => {
  it('should return the total voltage for the values: 987654321111111, 811111111111119, 234234234234278, 818181911112111', () => {
    const values = ['987654321111111', '811111111111119', '234234234234278', '818181911112111'];
    const result = findTotalVoltage(values);
    expect(result).toEqual(357);
  });
});

describe('findTotalVoltageTwo', () => {
  it('should return the total voltage for the values: 987654321111111, 811111111111119, 234234234234278, 818181911112111', () => {
    const values = ['987654321111111', '811111111111119', '234234234234278', '818181911112111'];
    const result = findTotalVoltageTwo(values);
    expect(result).toEqual(3121910778619);
  });
});
