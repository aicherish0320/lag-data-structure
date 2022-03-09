class Stack {
  constructor() {
    // 存储栈的数据结构
    this.stack = []
    // 记录栈中数据的个数，相当于数据的len
    this.count = 0
  }
  // 入栈
  push(item) {
    this.stack[this.count++] = item
  }
  // 出栈
  pop() {
    const temp = this.stack[this.count - 1]
    delete this.stack[--this.count]
    return temp
  }
  // 获取栈顶值
  top() {
    return this.stack[this.count - 1]
  }
  // 获取栈元素的个数
  size() {
    return this.count
  }
  // 清空栈
  clear() {
    this.stack = []
    this.count = 0
  }
}

const s = new Stack()

/**
   栈是一个后进先出的数据结构
  1. 添加新元素的一端称为栈顶，另一端称为栈低
  2. 只能在栈顶操作元素 入栈/出栈 
 */
