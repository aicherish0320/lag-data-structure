/**
  1. Promise 是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
  2. Promise 中有三种状态 分别为 成功 fulfilled rejected pending
    pending -> fulfilled
    pending -> rejected
  3. resolve 和 reject 函数是用来更改状态的
    resolve: fulfilled
    reject: rejected 
  4. then 方法内部做的事情就判断状态 如果状态是成功 调用成功的回调函数 如果状态是失败 调用失败的回调函数
  5. then 成功回调有一个参数 表示成功之后的值 then 失败回调有一个参数 表示失败后的原因
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class AcPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error.message)
    }
  }
  // promise 状态
  status = PENDING
  // 成功之后的值
  value = undefined
  // 失败后的原因
  reason = undefined
  // 成功回调
  successCallback = []
  // 失败回调
  failCallback = []
  resolve = (value) => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return
    // 状态更改为成功
    this.status = FULFILLED
    // 保存成功之后的值
    this.value = value
    // 判断成功回调是否存在 如果存在 调用
    while (this.successCallback.length) {
      this.successCallback.shift()()
    }
  }
  reject = (reason) => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return
    // 将状态更改为失败
    this.status = REJECTED
    // 保存失败后的原因
    this.reason = reason
    // 判断失败回调是否存在 如果存在 调用
    while (this.failCallback.length) {
      this.failCallback.shift()()
    }
  }
  then(successCallback, failCallback) {
    successCallback = successCallback ? successCallback : (value) => value
    failCallback = failCallback
      ? failCallback
      : (reason) => {
          throw reason
        }

    const promise2 = new AcPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = successCallback(this.value)
            // 判断 x 的值是普通值还是 promise 对象
            // 如果是普通值 直接调用 resolve
            // 如果是 promise 对象 查看 promise 对象返回的结果
            // 再根据 promise 对象返回的结果 决定调用 resolve 还是调用 reject
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error.message)
          }
        }, 0)
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason)
            // 判断 x 的值是普通值还是 promise 对象
            // 如果是普通值 直接调用 resolve
            // 如果是 promise 对象 查看 promise 对象返回的结果
            // 再根据 promise 对象返回的结果 决定调用 resolve 还是调用 reject
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else {
        // 等待
        // 将成功回调和失败回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value)
              // 判断 x 的值是普通值还是 promise 对象
              // 如果是普通值 直接调用 resolve
              // 如果是 promise 对象 查看 promise 对象返回的结果
              // 再根据 promise 对象返回的结果 决定调用 resolve 还是调用 reject
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error.message)
            }
          }, 0)
        })
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason)
              // 判断 x 的值是普通值还是 promise 对象
              // 如果是普通值 直接调用 resolve
              // 如果是 promise 对象 查看 promise 对象返回的结果
              // 再根据 promise 对象返回的结果 决定调用 resolve 还是调用 reject
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error.message)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
  static all(array) {
    const result = []
    let index = 0
    return new AcPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value
        index++

        if (index === array.length) {
          resolve(result)
        }
      }

      array.forEach((item, index) => {
        if (item instanceof AcPromise) {
          // AcPromise
          item.then(
            (value) => addData(index, value),
            (reason) => addData(index, reason)
          )
        } else {
          // 普通值
          addData(index, item)
        }
      })
    })
  }
  static resolve(value) {
    if (value instanceof AcPromise) return value
    return new AcPromise((resolve) => resolve(value))
  }
  finally(callback) {
    return this.then(
      (value) => {
        return AcPromise.resolve(callback()).then(() => value)
      },
      (reason) => {
        return AcPromise.resolve(callback()).then(() => {
          throw reason
        })
      }
    )
  }
  catch(failCallback) {
    return this.then(undefined, failCallback)
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>')
    )
  }
  if (x instanceof AcPromise) {
    // promise 对象
    x.then(resolve, reject)
  } else {
    // 普通值
    resolve(x)
  }
}

module.exports = AcPromise
