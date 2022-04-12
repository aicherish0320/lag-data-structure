class ListNode {
  constructor(val, next) {
    this.val = val || 0
    this.next = next || null
  }
}

const reverseList = (head) => {
  // 声明变量记录 prev cur
  let prev = null
  let cur = head
  while (cur) {
    // 先保存当前节点的下一个节点
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

const node1 = new ListNode('a')
const node2 = new ListNode('b')
const node3 = new ListNode('c')
node1.next = node2
node2.next = node3
// console.log(node1)
console.log(reverseList(node1))
