const AcPromise = require('./08.acPromise')

const promise = new AcPromise((resolve, reject) => {
  console.log('executor')
  resolve('success')
  // reject('failure')
  // setTimeout(() => {
  //   // reject('failure')
  //   resolve('success')
  // }, 1000)
})

promise
  .then((value) => {
    console.log('value >>> ', value)
    // return 'value2'
    return new AcPromise((resolve, reject) => {
      resolve('promise')
    })
  })
  .then((value) => {
    console.log('value2 >>> ', value)
  })
