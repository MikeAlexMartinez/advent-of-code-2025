import { Machine, MinTogglesToTargetResult } from "./types";

function stripIndicatorLightDiagram(indicatorLightDiagram: string): string {
  return indicatorLightDiagram.replace('[', '').replace(']', '');
}

export function convertPowersToBinary(powers: number[], length: number): number {
  const binary = Array(length).fill('0');
  for (const power of powers) {
    binary[power] = '1';
  }

  return parseInt(binary.join(''), 2);
}

export function convertLightDiagramToBinary(lightDiagram: string): number {
  const strippedIndicatorLightDiagram = stripIndicatorLightDiagram(lightDiagram);
  const binary = Array(strippedIndicatorLightDiagram.length).fill('0');
  for (let i = 0; i < strippedIndicatorLightDiagram.length; i++) {
    if (strippedIndicatorLightDiagram[i] === '#') {
      binary[i] = '1';
    }
  }

  return parseInt(binary.join(''), 2);
}

export function mapSchematicToBinaryValues({ buttonWiringSchematics, indicatorLightDiagram }: Machine): number[] {
  const strippedIndicatorLightDiagram = stripIndicatorLightDiagram(indicatorLightDiagram);
  return buttonWiringSchematics.map(schematic => {
    const numbers = schematic.replace('(', '').replace(')', '').split(',').map(Number);
    return convertPowersToBinary(numbers, strippedIndicatorLightDiagram.length);
  });
}

export function findMinTogglesToTarget(
  available: number[],
  target: number
): MinTogglesToTargetResult | null {
  const queue: Array<{ current: number; ops: number[] }> = [
    { current: 0, ops: [] }
  ];
  const visited = new Set<number>([0]);

  while (queue.length > 0) {
    const { current, ops } = queue.shift()!;

    if (current === target) {
      return { count: ops.length, operations: ops };
    }

    for (const value of available) {
      const next = current ^ value;
      if (!visited.has(next)) {
        visited.add(next);
        queue.push({ current: next, ops: [...ops, value] });
      }
    }
  }

  return null;
}
