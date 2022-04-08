Array.prototype.binarySearch = function (item) {
  let low = 0
  let high = this.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (item > this[mid]) {
      low = mid + 1
    } else if (item < this[mid]) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

const arr = [1, 2, 3, 4, 5]

const res = arr.binarySearch(2)
console.log(res)
