
import { Inventory, Range } from "./types";

export function mergeRanges(sortedRanges: Range[]): Range[] {
  const [first, ...rest] = sortedRanges;

  return rest.reduce((merged, current) => {
    const last = merged[merged.length - 1];
    if (current.start <= last.end + 1) {
      last.end = Math.max(last.end, current.end);
    } else {
      merged.push(current);
    }
    return merged;
  }, [first]);
}

function sumRanges(ranges: Range[]): number {
  return ranges.reduce((sum, range) => sum + (range.end - range.start + 1), 0);
}

export function countFreshIngredients({ ranges }: Inventory): number {
  const sorted = ranges.sort((a, b) => a.start - b.start);
  const merged = mergeRanges(sorted);
  const count = sumRanges(merged);
  return count;
}
