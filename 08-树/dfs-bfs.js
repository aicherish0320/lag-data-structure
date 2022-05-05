const tree = {
  val: 'aa',
  children: [
    {
      val: 'a',
      children: [
        {
          val: 'c',
          children: [
            {
              val: 'g',
              children: []
            }
          ]
        },
        {
          val: 'd',
          children: []
        }
      ]
    },
    {
      val: 'b',
      children: [
        {
          val: 'e',
          children: []
        },
        {
          val: 'f',
          children: []
        }
      ]
    }
  ]
}

// ! 深度优先遍历

const dfs = (n) => {
  console.log(n.val)
  n.children.forEach((c) => dfs(c))
}

// dfs(tree)

// ! 广度优先遍历
const bfs = (r) => {
  const queue = [r]
  while (queue.length > 0) {
    const n = queue.shift()
    console.log(n.val)
    n.children.forEach((c) => queue.push(c))
  }
}

bfs(tree)
