import { CircuitManager } from "./CircuitManager";
import { JunctionBoxPosition } from "./types";

export class JunctionBox {
  public circuitId?: string;

  constructor(
    public id: string,
    public position: JunctionBoxPosition,
    private circuitManager: CircuitManager,
  ) {}

  getDistance(other: JunctionBox): number {
    return Math.sqrt(
      Math.pow(this.position.x - other.position.x, 2) +
      Math.pow(this.position.y - other.position.y, 2) +
      Math.pow(this.position.z - other.position.z, 2)
    );
  }

  addToCircuit(circuitId?: string): void {
    this.circuitId = this.circuitManager.attachToCircuit(this, circuitId);
  }
}
