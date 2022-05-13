/**
 * Promise 是一个类
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
  resolve = (value) => {
    this.value = value
    while (this.successCallback.length) {
      this.successCallback.shift()()
    }
    this.status = FULFILLED
  }
  reject = (reason) => {
    this.reason = reason
    while (this.failureCallback.length) {
      this.failureCallback.shift()()
    }
    this.status = REJECTED
  }
  then = (successCallback, failureCallback) => {
    const promise2 = new AcPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        successCallback(this.value)
      } else if (this.status === REJECTED) {
        failureCallback(this.reason)
      } else {
        this.successCallback.push(successCallback)
        this.failureCallback.push(failureCallback)
      }
    })
    return promise2
  }
  catch = () => {}
  static all = () => {}
  static resolve = () => {}
}

module.exports = AcPromise
