import { Machine } from "./types";

export function parseInput(input: string): Machine[] {
  const machineLines = input.split('\n');

  return machineLines.map(machineLine => {
    const [rawIndicatorLightDiagram, ...inputs] = machineLine.split(' ');
    const rawJoltageRequirements = inputs[inputs.length - 1];
    const rawButtonWiringSchematics = inputs.slice(0, -1);

    return {
      indicatorLightDiagram: rawIndicatorLightDiagram,
      buttonWiringSchematics: rawButtonWiringSchematics,
      joltageRequirements: rawJoltageRequirements,
    };
  });
}
