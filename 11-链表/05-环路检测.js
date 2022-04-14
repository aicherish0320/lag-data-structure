/*
  环路检测
  - slow 指针每次移动一位，fast 指针每次移动两位
  - 如果相遇，则说明链表存在环
*/

const detectCycle = (head) => {
  if (!head || !head.next) {
    return null
  }
  // 声明快慢指针
  let slow = head
  let fast = head
  while (fast) {
    // 慢指针移动一位
    slow = slow.next
    // 如果满足条件，说明 fast 为尾部节点，不存在环
    if (!fast.next) {
      return null
    }
    // 快指针移动两位
    fast = fast.next.next

    // 检测是否存在环
    if (fast === slow) {
      // 找到环的起点位置
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next
        slow = slow.next
      }
      // ptr 和 slow 的交点，就是环的起始节点
      return ptr
    }
  }
  // while 结束，说明 fast 为 null，说明链没有环
  return null
}
