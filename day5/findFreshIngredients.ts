import { Inventory, Range } from "./types";

const isFresh = (id: number, ranges: Range[]): boolean => {
  return ranges.some(range => id >= range.start && id <= range.end);
};

export function findFreshIngredients(inventory: Inventory): number {
  return inventory.ids.reduce((acc, id) => {
    if (isFresh(id, inventory.ranges)) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
