function bfs(rootNode, vertices, edges){

}


const findAdjacent = (nodeName, vertices, edges) => {
  const filtered_edges = edges.filter( edge => {
    return edge.includes(nodeName);
  })

  const mapped_filtered_edges = filtered_edges.map( name => {
    return findNode(node !== nodeName);
  })[0].map( name => {
    return findNode(name, vertices)
  }).filter( node => {
    return node.distance == null;
  });
}

const markDistanceAndPredecessor = (predecessor, adjacentNodes) => {
  adjacentNodes.map( node => {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  });
}

const findNode = (nodeName, vertices) => {
  return vertices.find( vertex => {
    return vertex.name == nodeName
  })
}
