const mergeSort = (arr) => {
  const rec = (arr) => {
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    debugger
    const orderLeft = rec(left)
    const orderRight = rec(right)

    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] > orderRight[0] ? orderRight.shift() : orderLeft.shift()
        )
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  return rec(arr)
}

// 4, 5,
const arr = [2, 3, 1]

console.log(mergeSort(arr))
