const { bt } = require('./bt')
/*
  ! 深度优先遍历
*/
// const dfs = (root) => {
//   if (!root) return
//   console.log(root.val)
//   root.left && deep(root.left)
//   root.right && deep(root.right)
// }
// dfs(bt)
/*
  ! 广度优先遍历
*/
// const bfs = (root) => {
//   if (!root) return
//   const queue = [root]
//   while (queue.length) {
//     const n = queue.shift()
//     console.log(n.val)
//     n.left && queue.push(n.left)
//     n.right && queue.push(n.right)
//   }
// }
// bfs(bt)

/*
 !  二叉树先序遍历
*/
// const preOrder = (root) => {
//   if (!root) return
//   console.log(root.val)
//   root.left && x(root.left)
//   root.right && x(root.right)
// }
// preOrder(bt)

// const preOrder = (root) => {
//   if (!root) return
//   const stack = [root]
//   while (stack.length) {
//     const n = stack.pop()
//     console.log(n.val)
//     n.right && stack.push(n.right)
//     n.left && stack.push(n.left)
//   }
// }
// preOrder(bt)

/*
  ! 二叉树中序遍历
*/
// const inOrder = (root) => {
//   if (!root) return
//   root.left && inOrder(root.left)
//   console.log(root.val)
//   root.right && inOrder(root.right)
// }
// inOrder(bt)

// const inOrder = (root) => {
//   if (!root) return
//   const stack = []
//   let p = root
//   while (p || stack.length) {
//     while (p) {
//       stack.push(p)
//       p = p.left
//     }
//     const n = stack.pop()
//     console.log(n.val)
//     p = n.right
//   }
// }
// inOrder(bt)
/*
  ! 二叉树后序遍历
*/
// const postOrder = (root) => {
//   if (!root) return
//   postOrder(root.left)
//   postOrder(root.right)
//   console.log(root.val)
// }
// postOrder(bt)

// const postOrder = (root) => {
//   if (!root) return
//   const outputStack = []
//   const stack = [root]

//   while (stack.length) {
//     const n = stack.pop()
//     outputStack.push(n)

//     n.left && stack.push(n.left)
//     n.right && stack.push(n.right)
//   }

//   while (outputStack.length) {
//     const n = outputStack.pop()
//     console.log(n.val)
//   }
// }

// postOrder(bt)
