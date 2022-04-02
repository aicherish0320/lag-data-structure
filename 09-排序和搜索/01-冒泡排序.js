Array.prototype.bubbleSort = function () {
  // 比较 n - 1 轮
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
}

const arr = [5, 4, 3, 2, 1]
arr.bubbleSort()
console.log(arr)
