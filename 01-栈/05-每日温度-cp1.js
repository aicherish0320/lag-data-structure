/**
 * @param {number[]} temperatures [73,74,75,71,69,72,76,73]
 * @return {number[]} [1,1,4,2,1,1,0,0]
 */
// 方法1：暴力循环查找
// const dailyTemperatures = function (temperatures) {
//   const len = temperatures.length
//   let count
//   const result = new Array(len).fill(0)

//   for (let i = 0; i < len; i++) {
//     count = i + 1
//     while (temperatures[i] >= temperatures[count]) {
//       count++
//     }
//     if (count === len) {
//       result[i] = 0
//     } else {
//       result[i] = count - i
//     }
//   }
//   return result
// }
// 方法2：栈结构
// const dailyTemperatures = function (temperatures) {
//   // 单调递减的单调栈
//   const stack = [0]
//   let count = 1

//   const len = temperatures.length
//   const arr = new Array(len).fill(0)

//   for (let i = 1; i < len; i++) {
//     const temp = temperatures[i]
//     while (count && temp > T[stack[count - 1]]) {
//       let index = stack.pop()
//       count--
//       arr[index] = i - index
//     }
//     stack.push(i)
//     count++
//   }
//   return arr
// }

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
console.log(dailyTemperatures([30, 60, 90]))
console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]))
