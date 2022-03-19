/*
  请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。

题目数据保证需要删除的节点 不是末尾节点 。
*/

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}
