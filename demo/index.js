/**
 * 把一个数组旋转 K 步
 */

const arr = [1, 2, 3, 4, 5, 6]
const fn = (arr, k) => {
  const a1 = arr.slice(0, k)
  const a2 = arr.slice(k)
  return a2.concat(a1)
}
console.log(fn(arr, 3))
