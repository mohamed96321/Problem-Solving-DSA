/**
 * @param Graph_Finding_Shortest_Path
 */

function shortestPath(strArr) {
  const n = parseInt(strArr[0]);
  const nodes = strArr.slice(1, n + 1);
  const edges = strArr.slice(n + 1);

  // Build an adjacency list representation of the graph
  const adjList = {};
  nodes.forEach(node => {
    adjList[node] = [];
  });
  edges.forEach(edge => {
    const [node1, node2] = edge.split('-');
    adjList[node1].push(node2);
    adjList[node2].push(node1);
  });

  // Perform a breadth-first search to find the shortest path
  const queue = [{ node: nodes[0], path: [] }];
  const visited = new Set();
  while (queue.length > 0) {
    const { node, path } = queue.shift();
    if (node === nodes[n - 1]) {
      // Found the shortest path
      return [...path, node].join('-');
    }
    if (!visited.has(node)) {
      visited.add(node);
      adjList[node].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          queue.push({ node: neighbor, path: [...path, node] });
        }
      });
    }
  }

  // No path between the first and last node exists
  return -1;
}

console.log(shortestPath
  (["5","a","b","c","d","f","a-b","a-c","b-c","c-d","d-f"])); // Output: a-c-d-f
console.log(shortestPath
  (["4","x","y","z","w","x-y","y-z","x-w"])); // Output: x-w
console.log(shortestPath
  (["7","a","b","c","d","e","f","g","a-b","a-e","b-c","c-d","d-f","e-d","f-g"])); // Output: a-e-d-f-g
