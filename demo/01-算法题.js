/*
  由于 3^2 + 4^2 = 5^2，所以称3、4、5为勾股数，求n以内所有勾股数数组
  10 -> ['3,4,5', '6,8,10']
 */

function find(n) {
  let result = []
  let a, b, c
  for (a = 3; a <= n; a++) {
    for (b = a; b <= n; b++) {
      for (c = b; c <= n; c++) {
        if (a * a + b * b === c * c) {
          result.push(`${a},${b},${c}`)
        }
      }
    }
  }
  return result
}
console.log(find(50))

/*
  根据传入字符串创建一个循环输出字符的方法，每次调用该方法时返回下一个字符，全部返回完毕后从头部重新开始
*/

// function createPrint(str) {
//   let i = 0
//   let strArr = str.split('')
//   let len = str.length
//   return function print() {
//     if (i >= len) {
//       i = 0
//     }
//     console.log(strArr[i++])
//   }
// }

// const print = createPrint('abc')
// print()
// print()
// print()
// print()
// print()
