// Companies
// You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

// You are given two arrays redEdges and blueEdges where:

// redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
// blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
// Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.



var shortestAlternatingPaths = function (n, red_edges, blue_edges) {
  // Generate Graph
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = { r: [], b: [] };
  red_edges.forEach(([i, j]) => graph[i].r.push(j));
  blue_edges.forEach(([i, j]) => graph[i].b.push(j));

  const res = Array(n).fill(-1);
  const visited = {
    r: new Set(),
    b: new Set(),
  };

  const queue = [
    [0, 'r'],
    [0, 'b'],
  ];

  let len = 0;

  while (queue.length) {
    const j = queue.length;

    for (let i = 0; i < j; i++) {
      const [currValue, currColor] = queue.shift();

      // First time reaching this node
      if (res[currValue] === -1) {
        res[currValue] = len; // Update node with current len of paths
      }

      const nextValues = graph[currValue][currColor];
      const nextColor = currColor === 'b' ? 'r' : 'b';

      nextValues.forEach((nextValue) => {
        // If next node is not visited, update visited and push to queue
        if (!visited[nextColor].has(nextValue)) {
          visited[nextColor].add(nextValue);
          queue.push([nextValue, nextColor]);
        }
      });
    }
    len++;
  }

  return res;
};