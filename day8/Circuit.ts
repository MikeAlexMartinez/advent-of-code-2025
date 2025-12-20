import { JunctionBox } from "./JunctionBox";

export class Circuit {
  public id: string;
  public junctionBoxes: JunctionBox[] = [];

  constructor(id: string) {
    this.id = id;
  }

  addJunctionBox(junctionBox: JunctionBox): void {
    this.junctionBoxes.push(junctionBox);
  }

  getSize(): number {
    return this.junctionBoxes.length;
  }

  hasJunctionBox(junctionBox: JunctionBox): boolean {
    return this.junctionBoxes.some(box => box.id === junctionBox.id);
  }
}
