/*
  对于给定的二叉树，判断是否存在一条完整路径（从根结点开始，到叶节点结束的连线），启路径上节点的值之和为 target，输出布尔值
*/

const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  }
}

const hasFullPath = (root, sum) => {
  let ret = false
  const dfs = (n, s) => {
    if (!n.left && !n.right && s === sum) {
      ret = true
    }
    n.left && dfs(n.left, s + n.left.val)
    n.right && dfs(n.right, s + n.right.val)
  }
  dfs(root, root.val)
  return ret
}

console.log(hasFullPath(binaryTree, 10))
