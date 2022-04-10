/*
  分：计算中间元素，分割数组
  解：递归地在较大或者较小的数组进行二分搜索
  合：不需要此步，因为在子数组中搜到就返回了
*/

const guess = () => {}

const guessNumber = function (n) {
  const rec = (low, high) => {
    if (low > high) return
    const mid = Math.floor((low + high) / 2)
    const res = guess(mid)
    if (res === 0) {
      return mid
    } else if (res === -1) {
      return rec(1, mid - 1)
    } else {
      return rec(mid + 1, high)
    }
  }
  return rec(1, n)
}
