import { Graph } from "./graph";
import { DeviceId } from "./types";

export function parseInput(input: string): Graph {
  const deviceLines = input.split('\n');

  const graph = new Graph();

  deviceLines.forEach(deviceLine => {
    const [id, connectionsString] = deviceLine.split(': ');
    const connections = connectionsString.split(' ').map(connection => connection as DeviceId);
    graph.addNode(id as DeviceId);
    connections.forEach(connection => graph.addEdge(id as DeviceId, connection as DeviceId));
  });

  return graph;
}
