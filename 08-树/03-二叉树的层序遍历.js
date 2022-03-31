/*
  给你二叉树的根节点 root ，返回其节点值的层序遍历。（即逐层地，从左到右访问所有节点）。

  输入：root = [3,9,20,null,null,15,7]
  输出：[[3],[9,20],[15,7]]
*/

const bt = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

const levelOrder = function (root) {
  if (!root) {
    return []
  }
  const queue = [[root, 0]]
  const ret = []
  while (queue.length) {
    const [n, level] = queue.shift()

    if (!ret[level]) {
      ret[level] = [n.val]
    } else {
      ret[level].push(n.val)
    }

    n.left && queue.push([n.left, level + 1])
    n.right && queue.push([n.right, level + 1])
  }
  return ret
}

console.log(levelOrder(bt))
console.log(levelOrder([]))
