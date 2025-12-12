import { Machine } from "./types";
import { init } from 'z3-solver';

export function addSchematics(schematic1: number[], schematic2: number[]): number[] {
  return schematic1.map((value, index) => value + schematic2[index]);
}

export function arraysAreEqual(array1: number[], array2: number[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((value, index) => value === array2[index]);
}

function stripVoltageRequirements(voltageRequirements: string): number[] {
  return voltageRequirements.replace('{', '').replace('}', '').split(',').map(Number);
}

export function convertJoltageRequirementsToArray({ joltageRequirements }: Machine): number[] {
  return stripVoltageRequirements(joltageRequirements);
}

function convertSchematicToIndexes(schematic: number[], length: number): number[] {
  const schematicArray = Array(length).fill(0);
  for (const index of schematic) {
    schematicArray[index] = 1;
  }
  return schematicArray
}

export function mapSchematicToArrays(machine: Machine): number[][] {
  const voltageRequirements = convertJoltageRequirementsToArray(machine);
  return machine.buttonWiringSchematics.map(schematic => {
    const indexes = schematic.replace('(', '').replace(')', '').split(',').map(Number);
    return convertSchematicToIndexes(indexes, voltageRequirements.length);
  });
}

export function serializeState(state: number[]): string {
  return state.join(',');
}

export async function findPressesForVoltageZ3Optimized(
  buttons: number[][],
  target: number[]
): Promise<number | null> {
  const { Context } = await init();
  const { Optimize, Int } = Context('main');

  const optimizer = new Optimize();

  const buttonVars = buttons.map((_, i) => Int.const(`button_${i}`));

  buttonVars.forEach(btn => optimizer.add(btn.ge(0)));

  for (let counterIdx = 0; counterIdx < target.length; counterIdx++) {
    const affectingButtons = buttons
      .map((button, buttonIdx) =>
        button[counterIdx] === 1 ? buttonVars[buttonIdx] : null
      )
      .filter(btn => btn !== null);

    if (affectingButtons.length === 0 && target[counterIdx] !== 0) {
      return null;
    }

    if (affectingButtons.length > 0) {
      const sum = affectingButtons.reduce((acc, btn) => acc.add(btn));
      optimizer.add(sum.eq(target[counterIdx]));
    }
  }

  const totalPresses = buttonVars.reduce((acc, btn) => acc.add(btn));
  optimizer.minimize(totalPresses);

  const result = await optimizer.check();

  if (result !== 'sat') {
    return null;
  }

  const model = optimizer.model();

  const presses = buttonVars.map(btn => {
    const value = model.eval(btn);
    return Number(value.toString());
  });
  return presses.reduce((sum, p) => sum + p, 0);
}
