/*
  题目：定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的min函数在该栈中，调用min、push及pop的
  时间复杂度都是O(1)。
*/

/*
  思路分析：在存储数据的栈外，再新建一个栈，用于存储最小值
*/

class MinStack {
  constructor() {
    // stackA 用于存储数据
    this.stackA = []
    this.countA = 0
    // stackB 用于将数据降序存储（栈顶值为最小值）
    this.stackB = []
    this.countB = 0
  }
  // 入栈
  push(item) {
    // stackA 正常入栈
    this.stackA[this.countA++] = item
    // stackB 如果没有数据，直接入栈
    // 如果 item 的值 <= stackB 的最小值，入栈
    if (this.countB === 0 || item <= this.min()) {
      this.stackB[this.countB++] = item
    }
  }
  // 最小值函数
  min() {
    return this.stackB[this.countB - 1]
  }
  // 获取栈顶元素
  top() {
    return this.stackA[this.countA - 1]
  }
  // 出栈
  pop() {
    // 先进行 stackB 的检测
    // 如果 stackA 的栈顶值 === stackB 的栈顶值，stackB 出栈
    if (this.top() === this.min()) {
      delete this.stackB[--this.countB]
    }
    delete this.stackA[--this.countA]
  }
}

const m = new MinStack()
