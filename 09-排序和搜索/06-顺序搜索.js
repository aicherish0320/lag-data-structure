Array.prototype.sequentialSearch = function (value) {
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    if (item === value) {
      return i
    }
  }
  return -1
}

const arr = [6, 2, 3, 7, 5]

const res = arr.sequentialSearch(5)
console.log(res)
