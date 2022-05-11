const binaryTree = {
  val: 'a',
  left: {
    val: 'b',
    left: {
      val: 'c'
    },
    right: {
      val: 'g'
    }
  },
  right: {
    val: 'd',
    left: {
      val: 'e'
    },
    right: {
      val: 'f'
    }
  }
}

const flipTree = (root) => {
  if (!root) return
  return {
    val: root.val,
    left: flipTree(root.right),
    right: flipTree(root.left)
  }
}

console.log(flipTree(binaryTree))
