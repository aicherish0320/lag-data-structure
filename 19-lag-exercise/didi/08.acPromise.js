/**
 * 手写 Promise
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
  reason = undefined
  successCallback = []
  failureCallback = []
  // 这里使用箭头函数，目的是在调用此函数的时候，this 指向当前 promise
  resolve = (value) => {
    this.value = value
    this.status = FULFILLED
    while (this.successCallback.length) {
      this.successCallback.shift()(this.value)
    }
  }
  reject = (reason) => {
    this.reason = reason
    this.status = REJECTED
    while (this.failureCallback.length) {
      this.failureCallback.shift()(this.value)
    }
  }
  then = (successCallback, failureCallback) => {
    const promise2 = new AcPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        this.successValue = successCallback(this.value)
        resolve(this.successValue)
      } else if (this.status === REJECTED) {
        this.failureReason = failureCallback(this.reason)
        reject(this.failureReason)
      } else {
        this.successCallback.push(successCallback)
        this.failureCallback.push(failureCallback)
      }
    })
    return promise2
  }
}

module.exports = AcPromise
