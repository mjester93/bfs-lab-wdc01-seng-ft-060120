function bfs(rootNode, vertices, edges){
  startingNode.distance = 0
    let discovered = [startingNode]
    let discoverOrder = [startingNode]
    while(discovered.length != 0){
      let currentNode = discovered.shift()
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      discoverOrder = discoverOrder.concat(adjacentNodes);
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      discovered = discovered.concat(adjacentNodes)
    }
    return discoverOrder
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
