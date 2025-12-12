export class Node {
  public neighbors: Node[] = [];

  constructor(public id: string) {}
}

export class Graph {
  private nodes: Map<string, Node> = new Map();

  addNode(id: string): Node {
    if (this.nodes.has(id)) {
      return this.nodes.get(id)!;
    }

    const newNode = new Node(id);
    this.nodes.set(id, newNode);
    return newNode;
  }

  addEdge(from: string, to: string): void {
    const fromNode = this.nodes.get(from) || this.addNode(from);
    const toNode = this.nodes.get(to) || this.addNode(to);

    fromNode.neighbors.push(toNode);
  }

  getNode(id: string): Node {
    const node = this.nodes.get(id);
    if (!node) {
      throw new Error(`Node ${id} not found`);
    }
    return node;
  }

  getNeighbors(id: string): Node[] {
    const node = this.getNode(id);
    return node.neighbors;
  }
}
