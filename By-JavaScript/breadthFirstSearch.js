/**
 * @param Breadth_First_Search
 * Time complexity: O(V + E)
 * Space complexity: O(V)
 * Where V is the number of vertices and E is the number of edges in the graph.
 */

class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  bfs(startingVertex) {
    const visited = new Set();
    const queue = [];

    visited.add(startingVertex);
    queue.push(startingVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      const neighbors = this.adjacencyList.get(currentVertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  printGraph() {
    for (const vertex of this.vertices) {
      const neighbors = this.adjacencyList.get(vertex);
      const neighborList = neighbors.join(', ');
      console.log(`${vertex} -> ${neighborList}`);
    }
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
graph.bfs('A');

graph.printGraph();
