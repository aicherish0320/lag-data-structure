// ! 冒泡排序
// 比较相邻元素，如果第一个比第二个大，则交换他们
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
}

// const arr = [2, 4, 5, 3, 1]
const arr = [5, 4, 3, 2, 1]
arr.bubbleSort()
console.log(arr)

// ! 选择排序
// 找到数组中的最小值，选中它并将它放置在第一位

// Array.prototype.selectionSort = function () {
//   for (let i = 0; i < this.length; i++) {
//     let minIndex = i
//     for (let j = i + 1; j < this.length; j++) {
//       if (this[minIndex] > this[j]) {
//         minIndex = j
//       }
//     }
//     if (minIndex !== i) {
//       const temp = this[i]
//       this[i] = this[minIndex]
//       this[minIndex] = temp
//     }
//   }
// }

// const arr = [2, 4, 5, 3, 1]
// arr.selectionSort()
// console.log(arr)

// ! 插入排序
// 从第二个数往前比，遇到比它大的就往前排

// Array.prototype.insertionSort = function () {
//   for (let i = 1; i < this.length; i++) {
//     let j = i
//     const temp = this[i]
//     while (j > 0) {
//       if (this[j - 1] > temp) {
//         this[j] = this[j - 1]
//       } else {
//         break
//       }
//       j--
//     }
//     this[j] = temp
//   }
// }

// const arr = [2, 4, 5, 3, 1]
// arr.insertionSort()
// console.log(arr)
