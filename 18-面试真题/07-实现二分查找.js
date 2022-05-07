const arr = [1, 2, 3]

const binarySearch = (arr, val) => {
  const start = 0
  const end = arr.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] > val) {
      end = mid - 1
    } else if (arr[mid] < val) {
      start = mid + 1
    }
  }
}

console.log(binarySearch(arr, 22))
