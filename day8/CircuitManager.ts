import { Circuit } from "./Circuit";
import { JunctionBox } from "./JunctionBox";

export class CircuitManager {
  private circuits: Map<string, Circuit> = new Map();

  constructor() {}

  addCircuit(circuit: Circuit): void {
    this.circuits.set(circuit.id, circuit);
  }

  getCircuitById(id: string): Circuit | undefined {
    return this.circuits.get(id);
  }

  getCircuits(): Circuit[] {
    return Array.from(this.circuits.values());
  }

  countCircuits(): number {
    return this.circuits.size;
  }

  getLargestCircuitsProduct(count: number): number {
    const firstCountCircuits = this.getCircuits()
      .sort((a, b) => b.getSize() - a.getSize())
      .slice(0, count);

    console.log('First count circuits: ', firstCountCircuits);

    return firstCountCircuits.reduce((acc, circuit) => {
      console.log('Circuit size: ', circuit.getSize());
      return acc * circuit.getSize();
    }, 1);
  }

  attachToCircuit(junctionBox: JunctionBox, circuitId?: string): string {
    if (circuitId) {
      const circuit = this.getCircuitById(circuitId);
      if (circuit) {
        circuit.addJunctionBox(junctionBox);
        return circuit.id;
      }
    }

    const circuit = new Circuit(`Circuit-${this.circuits.size + 1}`);
    circuit.addJunctionBox(junctionBox);
    this.circuits.set(circuit.id, circuit);
    return circuit.id;
  }

  mergeCircuits(circuitId1: string, circuitId2: string): number {
    // console.log('\n--------------------------------');
    // console.log('Merging circuits: ', circuitId1, circuitId2);
    if (circuitId1 === circuitId2) {
      // console.log('Circuits are the same');
      // console.log('--------------------------------\n');
      return this.countCircuits();
    }

    const circuit1 = this.getCircuitById(circuitId1);
    const circuit2 = this.getCircuitById(circuitId2);
    if (circuit1 && circuit2) {
      const circuit2JunctionBoxes = circuit2.junctionBoxes;
      circuit2JunctionBoxes.forEach((junctionBox) => {
        junctionBox.addToCircuit(circuit1.id);
      });
      this.circuits.delete(circuit2.id);
      // console.log(this.getCircuits());
    }
    // console.log('--------------------------------\n');
    return this.countCircuits();
  }
}
