/*
  原数组：[[0],[2,3,4],1,[1,[2,3]]]，写一段代码，将该数组扁平化
*/

const source = [[0], [2, 3, 4], 1, [1, [2, 3]]]
// !解法一
// const flat = (source) => {
//   let ret = []
//   const rec = (val) => {
//     val.forEach((item) => {
//       if (Array.isArray(item)) {
//         rec(item)
//       } else {
//         ret = ret.concat(item)
//       }
//     })
//   }
//   rec(source)
//   return ret
// }
// !解法二
const flat = (source) => source.toString().split(',').map(Number)
console.log(flat(source))
