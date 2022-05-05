const graph = require('./graph')

const visited = new Set()
const dfs = (n) => {
  visited.add(n)
  console.log(n)
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c)
    }
  })
}

dfs(1)
