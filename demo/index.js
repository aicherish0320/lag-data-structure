/**
 * 找出一个数组中和为 n 的两个数
 */

const arr = [1, 2, 3, 4, 5]

const fn = (arr, value) => {
  const map = {}
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === value) {
  //       return [arr[i], arr[j]]
  //     }
  //   }
  // }
  // for (let i = 0; i < arr.length; i++) {
  //   const other = value - arr[i]
  //   if (!map[other]) {
  //     map[arr[i]] = other
  //   } else {
  //     return [other, arr[i]]
  //   }
  // }
  let i, j
  for (i = 1, j = 0; i < arr.length; i++) {
    if (arr[i] + arr[j] === value) {
      return [arr[j], arr[i]]
    } else {
      if (i === arr.length - 1) {
        let temp = i
        j = temp
        i++
      }
    }
  }
}

console.log(fn(arr, 6))
