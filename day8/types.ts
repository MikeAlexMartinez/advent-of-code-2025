import { JunctionBox } from "./JunctionBox";

export type Circuit = {
  id: string;
  junctionBoxes: JunctionBox[];
  size: number;
};

export type Circuits = Circuit[];

export type JunctionBoxPosition = {
  x: number;
  y: number;
  z: number;
};