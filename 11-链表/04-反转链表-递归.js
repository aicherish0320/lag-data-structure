//* Definition for singly-linked list
function ListNode(val, next) {
  this.val = val || 0
  this.next = next || null
}

/*
  example: 
  输入： 1 -> 2 -> 3 -> 4 -> 5 -> null
  输出： 5 -> 4 -> 3 -> 2 -> 1 -> null
*/

/**
 * 反转链表，使用递归实现
 */
const reverseList = (head) => {
  // 递归终止条件
  if (!head || !head.next) {
    return head
  }
  const newHead = reverseList(head.next)
  // 能够第一次执行这里的节点为 倒数第二个 节点
  head.next.next = head
  // head 的 nex 需要在下一次递归执行时设置，当前设置为 null 不影响
  // 可以让最后一次的 next 设置为 null
  head.next = null
  return newHead
}

const node1 = new ListNode('a')
const node2 = new ListNode('b')
const node3 = new ListNode('c')
node1.next = node2
node2.next = node3

console.log('node1 >>> ', node1)

console.log(reverseList(node1))
