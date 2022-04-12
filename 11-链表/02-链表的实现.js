/*
  节点类：value、next
  链表类：
    addAtTail 尾部添加节点
    addAtHead 头部添加节点
    addAtIndex 指定位置添加节点
    get 获取节点
    removeAtIndex 删除指定节点
*/

// 节点类
class LinkedNode {
  constructor(value) {
    this.value = value
    // 用于存储下一个节点的引用
    this.next = null
  }
}

// 链表类
class LinkedList {
  constructor() {
    this.count = 0
    this.head = null
  }
  // 添加节点
  addAtTail(val) {
    // 根据传入的数据 创建新的节点
    const node = new LinkedNode(val)
    // 检测链表是否存在数据
    if (this.count === 0) {
      this.head = node
    } else {
      // 找到链表尾部节点，将最后一个节点的 next 设置为 node
      let cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.count++
  }
}

const l = new LinkedList()
