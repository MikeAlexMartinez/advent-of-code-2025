export type Operation = '+' | '*';
export type OperationRow = Operation[];

export type NumberValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type NumberRow = NumberValue[];

export type UntypedInputRows = {
  operationsRow: string[];
  numberRows: string[][];
}

export type InputRows = {
  operationsRow: OperationRow;
  numberRows: NumberRow[];
}

export function isOperation(input: string): input is Operation {
  return input === '+' || input === '*';
}

type Problem = {
  values: number[];
  operation: Operation;
}

export type Problems = Problem[];

export type OperationColumn = {
  width: number;
  operation: Operation;
}
