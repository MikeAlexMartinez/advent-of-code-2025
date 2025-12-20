import { solver } from "../shared/solver";
import { CircuitManager } from "./CircuitManager";
import { getDistancesBetweenJunctionBoxes, JunctionBoxDistance } from "./connectCircuits";
import { JunctionBox } from "./JunctionBox";
import { parseInput } from "./parser";

interface ProblemSetup {
  circuitManager: CircuitManager;
  distances: JunctionBoxDistance[];
}

function setup(input: string): ProblemSetup {
  const circuitManager = new CircuitManager();
  const junctionBoxPositions = parseInput(input);
  const junctionBoxes = junctionBoxPositions.map((position, i) => {
    return new JunctionBox(`JunctionBox-${i + 1}`, position, circuitManager);
  });

  junctionBoxes.forEach((junctionBox) => {
    junctionBox.addToCircuit();
  });

  const distances = getDistancesBetweenJunctionBoxes(junctionBoxes);

  return { circuitManager, distances };
}

export function solvePartOne(input: string, count: number = 1000): number {
  const { circuitManager, distances } = setup(input);

  let distanceIndex = 0;
  while (distanceIndex < count) {
    const distance = distances[distanceIndex];
    const [junctionBox1, junctionBox2] = distance.junctionBoxes;
    circuitManager.mergeCircuits(junctionBox1.circuitId!, junctionBox2.circuitId!);
    distanceIndex++;
  }

  return circuitManager.getLargestCircuitsProduct(3);
}

export function solvePartTwo(input: string): number {
  const { circuitManager, distances } = setup(input);

  let distanceIndex = 0;
  while (distanceIndex < distances.length) {
    const distance = distances[distanceIndex];
    const [junctionBox1, junctionBox2] = distance.junctionBoxes;
    const newCount = circuitManager.mergeCircuits(junctionBox1.circuitId!, junctionBox2.circuitId!);
    if (newCount === 1) {
      return junctionBox1.position.x * junctionBox2.position.x;
    }
    distanceIndex++;
  }

  return 0;
}

export const solve = solver(solvePartOne, solvePartTwo);
