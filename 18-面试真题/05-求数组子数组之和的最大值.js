/*
  一个有 N 个整数项的一维数组，这个数组有很多连续的子数组，那么子数组之和的最大值是多少？
*/

const numbers = [1, -3, 3, 4, 5, -3] // 12
// const numbers = [-1,-2,-3,-4,-9,-8] // -1

let maxSum = -Infinity
// !解法一
// for (let i = 0; i < numbers.length; i++) {
//   let sum = 0
//   for (let j = i; j < numbers.length; j++) {
//     sum += numbers[j]
//     if (sum > maxSum) {
//       maxSum = sum
//     }
//   }
// }

// !解法二 动态规划
let currentSum = 0
for (let i = 0; i < numbers.length; i++) {
  currentSum += numbers[i]
  if (numbers[i] > currentSum) {
    currentSum = numbers[i]
  }
  if (currentSum > maxSum) {
    maxSum = currentSum
  }
}

console.log(maxSum)
