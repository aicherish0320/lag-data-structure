/**
 *
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class AcPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  status = PENDING
  value = undefined
  successCallback = []
  failCallback = []
  reason = undefined
  resolve = (value) => {
    if (this.status !== PENDING) return
    this.value = value
    this.status = FULFILLED

    while (this.successCallback.length) {
      this.successCallback.shift()(value)
    }
  }
  reject = (reason) => {
    if (this.status !== PENDING) return
    this.reason = reason
    this.status = REJECTED

    while (this.failCallback.length) {
      this.failCallback.shift()(reason)
    }
  }
  then(successCallback, errorCallback) {
    if (this.status === FULFILLED) {
      successCallback(this.value)
    } else if (this.status === REJECTED) {
      errorCallback(this.reason)
    } else {
      this.successCallback.push(successCallback)
      this.failCallback.push(errorCallback)
    }
  }
  static all(arr) {
    const result = []
    let index = 0

    return new AcPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value
        index++

        if (index === arr.length) {
          resolve(result)
        }
      }

      arr.forEach((item, index) => {
        item.then(
          (value) => addData(index, value),
          (reason) => addData(index, reason)
        )
      })
    })
  }
}

const p1 = new Promise((resolve, reject) => {
  resolve('success1')
})
const p2 = new Promise((resolve, reject) => {
  // resolve('success2')
  reject('error')
})
// p.then((payload) => {
//   console.log(payload)
// })

Promise.all([p1, p2])
  .then((success) => {
    console.log('success >>> ', success)
  })
  .catch((error) => {
    console.log(error)
  })
