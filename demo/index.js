/**
  青蛙跳台阶
  一只青蛙，一次可跳一级，也可跳二级
  问：青蛙跳到 n 级台阶，总共有多少种方式？

  f(n) = fn(n - 1) + f(n - 2)
 */

const fn = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  return fn(n - 1) + fn(n - 2)
}

const fn2 = (n) => {
  let n1 = 2
  let n2 = 1
  let res = 0

  for (let i = 2; i < n; i++) {
    res = n1 + n2
    n2 = n1
    n1 = res
  }

  return res
}

console.time('fn')
console.log(fn(20))
console.timeEnd('fn')

console.time('fn2')
console.log(fn2(20))
console.timeEnd('fn2')
