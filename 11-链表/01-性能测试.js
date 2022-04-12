const arr = []
console.time('perfTest')
for (let i = 0; i < 10 * 10000; i++) {
  // arr.push(i) // 4.347900390625 ms
  // 因为数组在内存中存储是连续的内存结构，在非尾部进行添加、移除操作会导致元素的位移
  arr.unshift(i) // 430.08935546875 ms
}
console.timeEnd('perfTest')
