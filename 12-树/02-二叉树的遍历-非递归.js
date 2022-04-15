/**
 * @description 先序遍历
 */

const { nodes } = require('./data')

// 递归可以用栈去模拟
const prev = (root) => {
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    n.right && stack.push(n.right)
    n.left && stack.push(n.left)
  }
}

// prev(nodes)
/**
 * @description 中序遍历
 */
const center = (root) => {
  if (!root) return
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
// center(nodes)

/**
 * @description 后序遍历
 */

// const last = (root) => {
//   if (!root) return
//   last(root.left)
//   last(root.right)
//   console.log(root.val)
// }
// last(nodes)
