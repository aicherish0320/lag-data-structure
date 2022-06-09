/**
 * 二叉树的先中后续遍历
 */

const nodes = {
  val: 'a',
  left: {
    val: 'b',
    left: {
      val: 'd'
    },
    right: {
      val: 'f'
    }
  },
  right: {
    val: 'c',
    left: {
      val: 'e'
    },
    right: {
      val: 'g'
    }
  }
}
// 先序遍历
// const fn = (root) => {
//   console.log(root.val)
//   root.left && fn(root.left)
//   root.right && fn(root.right)
// }
// const fn = (root) => {
//   const stack = [root]
//   while (stack.length) {
//     const node = stack.pop()
//     console.log(node.val)
//     node.right && stack.push(node.right)
//     node.left && stack.push(node.left)
//   }
// }
// 中序遍历
// const fn = (root) => {
//   root.left && fn(root.left)
//   console.log(root.val)
//   root.right && fn(root.right)
// }
const fn = (root) => {
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}
// 后续遍历
// const fn = (root) => {
//   root.left && fn(root.left)
//   root.right && fn(root.right)
//   console.log(root.val)
// }

console.log(fn(nodes))
