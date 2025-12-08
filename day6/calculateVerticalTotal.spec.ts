import { calculateVerticalTotal, getOperator, getValues } from "./calculateVerticalTotal";

describe('getOperator', () => {
  it('should get the operator', () => {
    const operationsRow = ['*', ' ', ' ', ' ', '+', ' ', ' ', ' ', '*', ' ', ' ', ' ', '+', ' ', ' '];
    const startIndex = 15;
    const result = getOperator(operationsRow, startIndex);
    expect(result).toEqual({ operation: '+', nextIndex: 12 });
  });

  it('should get the operator the next operator', () => {
    const operationsRow = ['*', ' ', ' ', ' ', '+', ' ', ' ', ' ', '*', ' ', ' ', ' ', '+', ' ', ' '];
    const startIndex = 12;
    const result = getOperator(operationsRow, startIndex);
    expect(result).toEqual({ operation: '*', nextIndex: 8 });
  });

  it('should get the operator the next operator', () => {
    const operationsRow = ['*', ' ', ' ', ' ', '+', ' ', ' ', ' ', '*', ' ', ' ', ' ', '+', ' ', ' '];
    const startIndex = 8;
    const result = getOperator(operationsRow, startIndex);
    expect(result).toEqual({ operation: '+', nextIndex: 4 });
  });
});

describe('getValues', () => {
  it('should get the values', () => {
    const numberRows = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    const startIndex = 2;
    const steps = 3;
    const result = getValues(numberRows, startIndex, steps);
    expect(result).toEqual([369, 258, 147]);
  });

  it('should get the values when there are spaces', () => {
    const numberRows = [[' ', '6', ' '], ['4', '5', ' '], ['7', '8', '9']];
    const startIndex = 2;
    const steps = 3;
    const result = getValues(numberRows, startIndex, steps);
    expect(result).toEqual([9, 658, 47]);
  });

  it('should ignore empty columns', () => {
    const numberRows = [[' ', '6', ' ', ' '], ['4', '5', ' ', ' '], ['7', '8', '9', ' ']];
    const startIndex = 3;
    const steps = 4;
    const result = getValues(numberRows, startIndex, steps);
    expect(result).toEqual([9, 658, 47]);
  });
});

describe('calculateVerticalTotal', () => {
  it('should calculate the total with a single + operation', () => {
    const inputRows = {
      operationsRow: ['+', ' ', ' ', ' '],
      numberRows: [['1', '2', '3', ' '], ['4', '5', '6', ' '], ['7', '8', '9', ' ']]
    };
    const result = calculateVerticalTotal(inputRows);
    expect(result).toEqual(369 + 258 + 147);
  });

  it('should calculate the total with a single * operation', () => {
    const inputRows = {
      operationsRow: ['*', ' ', ' ', ' '],
      numberRows: [[' ', '1', '2', ' '], [' ', '0', '0', ' '], ['2', '0', '0', ' ']]
    };
    const result = calculateVerticalTotal(inputRows);
    expect(result).toEqual(2 * 100 * 200);
  });

  it('should calculate the total with multiple operations', () => {
    const inputRows = {
      operationsRow: ['*', ' ', ' ', '+', ' ', ' ', ' '],
      numberRows: [['2', '1', ' ', '1', '2', '3'], ['0', '0', ' ', '4', '5', '6', ' '], ['0', '0', ' ', '7', '8', '9', ' ']]
    };
    const result = calculateVerticalTotal(inputRows);
    expect(result).toEqual(200 * 100 + 147 + 258 + 369);
  });
});
