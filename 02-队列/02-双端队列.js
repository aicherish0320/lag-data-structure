class Deque {
  constructor() {
    this.queue = {}
    // 长度 -1 代表队尾
    this.count = 0
    // 队首
    this.head = 0
  }
  // 队首添加
  addFront(item) {
    this.queue[--this.head] = item
  }
  // 队尾添加
  addBack(item) {
    this.queue[this.count++] = item
  }
  // 队首删除
  removeFront() {
    if (this.isEmpty()) {
      return
    }
    const headData = this.queue[this.head]
    delete this.queue[this.head]
    this.head++
    return headData
  }
  // 队尾删除
  removeBack() {
    if (this.isEmpty()) {
      return
    }
    const backData = this.queue[this.count - 1]
    delete this.queue[this.count - 1]
    this.count--
    return backData
  }
  // 获取队首值
  frontTop() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[this.head]
  }
  // 获取队尾值
  backTop() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[this.count - 1]
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count - this.head
  }
}
