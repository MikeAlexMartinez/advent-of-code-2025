import { match } from "ts-pattern";
import { isOperation, Operation, UntypedInputRows } from "./types";

type PositionedOperator = {
  operation: Operation;
  nextIndex: number;
}

export function getOperator(operationsRow: string[], startIndex: number): PositionedOperator {
  let operator = '';
  let index = startIndex - 1;

  while (!operator) {
    const operation = operationsRow[index];
    if (isOperation(operation)) {
      operator = operation;
      break;
    }
    index--;
  }

  return {
    operation: operator as Operation,
    nextIndex: index,
  };
}

export function getValues(numberRows: string[][], startIndex: number, steps: number): number[] {
  console.log('getValues, startIndex', startIndex, 'steps', steps);
  let values: number[] = [];
  for (let i = startIndex; i > startIndex - steps; i--) {
    let value = '';
    for (let j = 0; j < numberRows.length; j++) {
      const number = numberRows[j][i];
      if (number !== ' ') {
        value += numberRows[j][i];
      }
    }
    const numberValue = parseInt(value, 10);
    if (!isNaN(numberValue)) {
      values.push(numberValue);
    }
  }
  return values;
}

export function calculateProblemValue(operation: Operation, values: number[]): number {
  return match(operation)
    .with('+', () => {
      return values.reduce((acc, num) => acc + num, 0);
    })
    .with('*', () => {
      return values.reduce((acc, num) => acc * num, 1);
    })
    .exhaustive();
}

export function calculateVerticalTotal(inputRows: UntypedInputRows): number {
  const { operationsRow, numberRows } = inputRows;

  let totalLength = operationsRow.length;
  let index = totalLength - 1;
  let sum = 0;

  while (index > 0) {
    const { operation, nextIndex: operatorIndex } = getOperator(operationsRow, index);
    const steps = index - operatorIndex + 1;
    const values = getValues(numberRows, index, steps);
    index -= steps;
    const problemValue = calculateProblemValue(operation, values);
    sum += problemValue;
  }

  return sum;
}
