/*
  给定一个整数数组 temperatures，表示每天的温度，返回一个数组 answer，其中answer[i] 是指在 第 i天之后，
  才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
  输入: temperatures = [73,74,75,71,69,72,76,73]
  输出: [1,1,4,2,1,1,0,0]
*/
const dailyTemperatures = function (temperatures) {
  const stack = [0]
  let count = 1

  const len = temperatures.length
  const arr = new Array(len).fill(0)

  for (let i = 1; i < len; i++) {
    const temp = temperatures[i]
    while (count && temp > temperatures[stack[count - 1]]) {
      const index = stack.pop()
      arr[index] = i - index
      count--
    }
    stack.push(i)
    count++
  }

  return arr
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
console.log(dailyTemperatures([30, 60, 90]))
console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]))
