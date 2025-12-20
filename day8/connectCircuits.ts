import { JunctionBox } from "./JunctionBox";

export type JunctionBoxDistance = {
  distance: number;
  junctionBoxes: JunctionBox[];
};

export function getDistancesBetweenJunctionBoxes(JunctionBoxes: JunctionBox[]) {
  const distances: JunctionBoxDistance[] = [];

  for (let i = 0; i < JunctionBoxes.length - 1; i++) {
    for (let j = i + 1; j < JunctionBoxes.length; j++) {
      const distance = JunctionBoxes[i].getDistance(JunctionBoxes[j]);
      distances.push({
        distance,
        junctionBoxes: [JunctionBoxes[i], JunctionBoxes[j]],
      });
    }
  }

  return distances.sort((a, b) => a.distance - b.distance);
}
