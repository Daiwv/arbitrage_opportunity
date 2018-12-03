
// let dist be a V X V array of min distances
// initialized to Infinity

// let next be a V X V array of vertex indices
// initialized to null

// procedure FloydWarshallWithPathReconstruction ()
//    for each edge (u,v)
//       dist[u][v] ← w(u,v)  // the weight of the edge (u,v)
//       next[u][v] ← v
//    for k from 1 to |V| // standard Floyd-Warshall implementation
//       for i from 1 to |V|
//          for j from 1 to |V|
//             if dist[i][j] > dist[i][k] + dist[k][j] then
//                dist[i][j] ← dist[i][k] + dist[k][j]
//                next[i][j] ← next[i][k]

// procedure Path(u, v)
//    if next[u][v] = null then
//        return []
//    path = [u]
//    while u ≠ v
//        u ← next[u][v]
//        path.append(u)
//    return path

function floydWarshall(G) {
  let V = G.adjMatrix.length
  let dist = new Array(V)
  for (let i = 0; i < V; i++) {
    dist[i] = new Array(V)
  }
  debugger
  for (let v = 0; v < V; v++) {
    dist[v][v] = 1
  }
  debugger
  for (let u = 0; u < V; u++) {
    for (let v = 0; v < V; v++) {
      dist[u][v] = G.adjMatrix[u][v]
    }
  }
  debugger
  console.log(dist)

}










