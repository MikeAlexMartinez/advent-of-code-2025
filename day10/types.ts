export type indicatorLightDiagram = string;
export type buttonWiringSchematic = string;
export type joltageRequirement = string;

export interface Machine {
  indicatorLightDiagram: indicatorLightDiagram;
  buttonWiringSchematics: buttonWiringSchematic[];
  joltageRequirements: joltageRequirement;
}

export interface MinTogglesToTargetResult {
  count: number;
  operations: number[];
}
