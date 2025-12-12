import { match } from "ts-pattern";

import { Part } from "../shared/types";
import { convertJoltageRequirementsToArray, findPressesForVoltageZ3Optimized, mapSchematicToArrays } from "./findPressesForVoltage";
import { convertLightDiagramToBinary, findMinTogglesToTarget, mapSchematicToBinaryValues } from "./minTogglesToTarget";
import { parseInput } from "./parser";

export function solver(
  solvePartOne: (input: string) => Promise<number>,
  solvePartTwo: (input: string) => Promise<number>
): (part: Part, input: string) => Promise<number> {
  return async (part, input) => match(part)
    .with(1, () => {
      return solvePartOne(input);
    })
    .with(2, () => {
      return solvePartTwo(input);
    })
    .exhaustive();
}

export async function solvePartOne(input: string): Promise<number> {
  const machines = parseInput(input);
  return machines.reduce((runningTotal, machine) => {
    const lightDiagramBinary = convertLightDiagramToBinary(machine.indicatorLightDiagram);
    const availableSchematics = mapSchematicToBinaryValues(machine);
    const minTogglesToTarget = findMinTogglesToTarget(availableSchematics, lightDiagramBinary);

    return runningTotal + (minTogglesToTarget?.count ?? 0);
  }, 0);
}

export async function solvePartTwo(input: string): Promise<number> {
  const machines = parseInput(input);
  const machinesToSolve = machines.length;
  let solvedMachines = 0;
  let runningTotal = 0;

  for (const machine of machines) {
    console.log(`Solving machine ${solvedMachines + 1} of ${machinesToSolve}`);
    const joltageRequirements = convertJoltageRequirementsToArray(machine);
    const availableSchematics = mapSchematicToArrays(machine);
    const pressesForVoltage = await findPressesForVoltageZ3Optimized(availableSchematics, joltageRequirements);
    runningTotal += (pressesForVoltage ?? 0);
    solvedMachines++;
    console.log(`Solved machine ${solvedMachines} with ${pressesForVoltage ?? 0} presses, ${machinesToSolve - solvedMachines} remaining`);
  }

  return runningTotal;
}

export const solve = solver(solvePartOne, solvePartTwo);
