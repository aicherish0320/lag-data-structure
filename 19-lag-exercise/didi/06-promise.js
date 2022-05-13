const AcPromise = require('./08.acPromise')

const promise = new AcPromise((resolve, reject) => {
  console.log('executor')
  resolve('success')
  // setTimeout(() => {
  // reject('failure')
  // }, 1000)
})

promise
  .then((value) => {
    console.log('value >>> ', value)
  })
  .then(() => {
    console.log('then')
  })
