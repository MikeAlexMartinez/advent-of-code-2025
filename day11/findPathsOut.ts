import { Graph } from "./graph";

function memoize<TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => TResult,
  keyFn: (...args: TArgs) => string
): (...args: TArgs) => TResult {
  const cache = new Map<string, TResult>();

  return (...args: TArgs): TResult => {
    const key = keyFn(...args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function findPathsOutImpl(
  graph: Graph,
  startDeviceId: string,
  endDeviceId: string,
): number {
  if (startDeviceId === endDeviceId) {
    return 1;
  }

  let pathCount = 0;
  const neighbors = graph.getNode(startDeviceId).neighbors || [];

  for (const neighbor of neighbors) {
    pathCount += findPathsOut(graph, neighbor.id, endDeviceId);
  }

  return pathCount;
}

export const findPathsOut = memoize(
  findPathsOutImpl,
  (_graph, start, end) => `${start}->${end}`
);
