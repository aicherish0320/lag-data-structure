const AcPromise = require('./08.acPromise')

const p1 = new AcPromise((resolve, reject) => {
  // resolve(100)
  reject('failure')
})
const p2 = new AcPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(200)
  }, 1000)
})

p1.then(() => {}).catch((reason) => {
  console.log('reason >>> ', reason)
})
