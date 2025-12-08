import { InputRows, isOperation, Operation, Problems, UntypedInputRows } from "./types";

export function parseInputPartTwo(input: string): UntypedInputRows {
  const inputRows = input.split('\n');
  const rowCount = inputRows.length;
  const operationsRow = inputRows[rowCount - 1].split('');
  const numberRows = inputRows.slice(0, rowCount - 1).map(v => v.split(''));

  if (!numberRows.every((row) => row.length === operationsRow.length)) {
    throw new Error('input rows are unexpected length');
  }

  return {
    operationsRow,
    numberRows,
  };
}

function convertToNumbers(input: string): number[] {
  return input.trim().split(/\s+/).map(Number);
}

function convertToOperation(input: string): Operation {
  if (isOperation(input)) {
    return input;
  }
  throw new Error(`Invalid operation: ${input}`);
}

function convertToOperations(input: string): Operation[] {
  return input.trim().split(/\s+/).map(convertToOperation);
}

export function parseInput(input: string): Problems {
  const problemRows = input.split('\n');
  const rowCount = problemRows.length;
  const operationsRow = convertToOperations(problemRows[rowCount - 1]);
  const numberRows = problemRows.slice(0, rowCount - 1)
    .map(convertToNumbers);

  const problemCount = operationsRow.length;

  const problems: Problems = [];
  for (let i = 0; i < problemCount; i++) {
    const values = numberRows.map(row => row[i]);
    const operation = operationsRow[i];
    problems.push({ values, operation });
  }

  return problems;
}
