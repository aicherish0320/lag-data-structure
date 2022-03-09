/*
  题目：定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的min函数在该栈中，调用min、push及pop的
  时间复杂度都是O(1)。
*/
// 1.
// class Stack {
//   constructor() {
//     this.stackA = []
//     this.countA = 0
//     // 用于将数据降序存储 （栈顶值为最小值）
//     this.stackB = []
//     this.countB = 0
//   }
//   push(item) {
//     this.stackA[this.countA++] = item

//     if (this.countB === 0 || item <= this.min()) {
//       this.stackB[this.countB++] = item
//     }
//   }
//   min() {
//     return this.stackB[this.countB - 1]
//   }
//   top() {
//     return this.stackA[this.countA - 1]
//   }
//   pop() {
//     if (this.top() === this.min()) {
//       delete this.stackB[--this.countB]
//     }

//     delete this.stackA[--this.countA]
//   }
// }
// 2. 使用数组方法实现
class Stack {
  constructor() {
    this.stack = []
  }
  min() {
    return Math.min.apply(null, this.stack)
  }
  push(item) {
    this.stack.push(item)
  }
}

const s = new Stack()
