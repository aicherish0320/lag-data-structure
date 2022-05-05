/*
  实现步骤
    1. 在类里，声明一个数组，用来装元素
    2. 主要方法：插入、删除堆顶、获取堆顶、获取堆大小
  插入
    1. 将值插入堆的底部，即数组的尾部
    2. 然后上移：将这个值和它的父节点进行交换，直到父节点小于等于这个插入的值
    3. 大小为 k 的堆中插入元素的时间复杂度为 O(log k)
  删除堆顶
    1. 用数组尾部元素替换堆顶（直接删除堆顶会破坏堆结构）
    2. 然后下移：将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶
    3. 大小为 k 的堆中删除堆顶的时间复杂度为 O(log k)
  获取堆顶：
    返回数组的头部
  获取堆的大小
    返回数组的长度
*/

class MinHeap {
  constructor() {
    this.heap = []
  }
  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  getParentIndex(i) {
    // return Math.floor((i - 1) / 2)
    return (i - 1) >> 1
  }
  shiftUp(index) {
    if (index === 0) {
      return
    }
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  getLeftIndex(i) {
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
