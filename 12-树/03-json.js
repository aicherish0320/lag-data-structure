/*
  遍历 json 所有的节点值
*/

const o = {
  a: {
    b: {
      c: 1
    }
  },
  arr: [1, 2, 3]
}

const dfs = (n, path) => {
  console.log(n)
  Object.keys(n).forEach((c) => dfs(n[c], path.concat(c)))
}

dfs(o, [])
