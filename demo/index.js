/**
 * 使用 js 反转单向链表
 */

const node = {
  val: 1
}
node.next = {
  val: 2
}
node.next.next = {
  val: 3
}

const reverseList = (head) => {
  let p1 = head
  let p2 = null
  while (p1) {
    let temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
}

console.log(reverseList(node))
