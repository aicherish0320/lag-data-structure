const graph = require('./graph')

const visited = new Set()
const bfs = (root) => {
  const queue = [root]
  visited.add(root)

  while (queue.length) {
    const n = queue.shift()
    console.log(n)
    graph[n].forEach((c) => {
      if (!visited.has(c)) {
        queue.push(c)
        visited.add(c)
      }
    })
  }
}

bfs(2)
