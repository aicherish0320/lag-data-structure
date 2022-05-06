const source = [[0], [2, 3, 4], 1, [1, [2, 3]]]

let target = []

// ! 解法一
// const fn = (source) => {
//   source.forEach((n) => {
//     if (Array.isArray(n)) {
//       fn(n)
//     } else {
//       target.push(n)
//     }
//   })
// }
// fn(source)

// !解法二
const fn = (source) => {
  target = source.toString().split(',')
  target = target.map((item) => Number(item))
}
fn(source)

console.log(target)
