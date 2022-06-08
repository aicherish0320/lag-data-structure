/**
 * 实现二分查找
 */

// [1, 2, 3, 4, 5]
const binarySearch = (arr, value) => {
  const length = arr.length
  let low = 0
  let high = length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (value === arr[mid]) {
      return mid
    } else if (value > arr[mid]) {
      low = mid + 1
    } else if (value < arr[mid]) {
      high = mid - 1
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 5))
