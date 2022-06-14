// 计算任意个数的和

function addAsync() {
  return new Promise((resolve, reject) => {
    resolve(Array.from(arguments).reduce((sum, cur) => sum + cur, 0))
  })
}

addAsync(1, 2, 3, 4).then((value) => {
  console.log(value)
})
