/*
  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 
  的方式存储的，并且每个节点只能存储 一位 数字。

  请你将两个数相加，并以相同形式返回一个表示和的链表。

  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0)
  // 表示进位的数
  let temp = 0
  let p1 = l1
  let p2 = l2
  let p3 = l3
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const v3 = v1 + v2 + temp
    temp = Math.floor(v3 / 10)
    p3.next = new ListNode(v3 % 10)

    if (p1) {
      p1 = p1.next
    }
    if (p2) {
      p2 = p2.next
    }
    p3 = p3.next
  }
  if (temp) {
    p3.next = new ListNode(temp)
  }
  return l3.next
}
