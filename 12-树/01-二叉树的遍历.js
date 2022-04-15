/**
 * @description 先序遍历
 */

const { nodes } = require('./data')

const prev = (root) => {
  if (!root) return
  console.log(root.val)
  prev(root.left)
  prev(root.right)
}

// prev(nodes)
/**
 * @description 中序遍历
 */
const center = (root) => {
  if (!root) return
  center(root.left)
  console.log(root.val)
  center(root.right)
}
// center(nodes)

/**
 * @description 后序遍历
 */

const last = (root) => {
  if (!root) return
  last(root.left)
  last(root.right)
  console.log(root.val)
}
last(nodes)
