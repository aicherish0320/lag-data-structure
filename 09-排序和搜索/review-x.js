const arr = [2, 4, 5, 3, 1]
//! 1. 冒泡排序
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }
// bubbleSort(arr)
//! 2. 选择排序
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }
//     if (i !== minIndex) {
//       const temp = arr[i]
//       arr[i] = arr[minIndex]
//       arr[minIndex] = temp
//     }
//   }
// }
// selectionSort(arr)
//! 3. 归并排序
// const mergeSort = (arr) => {
//   const rec = (arr) => {
//     if (arr.length === 1) return arr
//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0, mid)
//     const right = arr.slice(mid)

//     const orderLeft = rec(left)
//     const orderRight = rec(right)

//     const res = []
//     while (orderLeft.length || orderRight.length) {
//       if (orderLeft.length && orderRight.length) {
//         res.push(
//           orderLeft[0] > orderRight[0] ? orderRight.shift() : orderLeft.shift()
//         )
//       } else if (orderLeft.length) {
//         res.push(orderLeft.shift())
//       } else if (orderRight.length) {
//         res.push(orderRight.shift())
//       }
//     }
//     return res
//   }

//   const res = rec(arr)
//   console.log(res)
// }
// mergeSort(arr)
//! 4. 快速排序
// 找到一个基准值
// const quickSort = (arr) => {
//   const rec = (value) => {
//     if (value.length === 1) return value

//     const mid = value[0]
//     const left = []
//     const right = []

//     for (let i = 1; i < value.length; i++) {
//       if (value[i] > mid) {
//         right.push(value[i])
//       } else {
//         left.push(value[i])
//       }
//     }

//     return [...rec(left), mid, ...rec(right)]
//   }
//   const res = rec(arr)

//   res.forEach((item, index) => (arr[index] = item))
// }
// quickSort(arr)
console.log('arr >>> ', arr)
