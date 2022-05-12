const arr = [4, 9, 1, 5, 2, 7]

/**
 * 冒泡排序
 */
const bubbleSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}
// bubbleSort(arr)

/**
 * 选择排序
 */
const selectSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
    console.log(JSON.stringify(arr))
  }
}

selectSort(arr)

console.log(arr)
