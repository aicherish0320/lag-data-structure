/*
  1. 合并两个有序链表：
  将两个升序链表合并为一个新的 升序链表 并返回。新链表是通过拼接给定的两个链表的所有节点组成的
  2. 解题思路
  与归并排序中的合并两个有序数组很相似
  将数组替换成链表就能解此题
  3. 解题步骤
  新建一个新链表，作为返回结果
  用指针遍历两个有序链表，并比较两个链表的当前节点，较小者先接入新链表，并将指针后移
  链表遍历结束，返回新链表
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const ret = new ListNode(0)
  const p = ret
  const p1 = list1
  const p2 = list2

  while (p1 && p2) {
    if (p1.val > p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  if (p1) {
    p.next = p1
  }
  if (p2) {
    p.next = p2
  }
  return ret.next
}
