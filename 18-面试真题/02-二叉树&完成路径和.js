/**
  对于给定的二叉树，判断是否存在一条完整路径，其路径节点的值和为 target，输出布尔值
 */

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
}

const hasPathSum = (root, sum) => {
  if (!root) {
    return false
  }
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

console.log(hasPathSum(tree, 12))
