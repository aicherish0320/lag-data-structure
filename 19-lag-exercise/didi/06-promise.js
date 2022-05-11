/**
 * Promise 是一个构造函数，初始化 promise 实例的会传入一个 executor
 * executor 会立即执行并接收两个形参 resolve reject；当异步任务顺利完成且返回结果时，会调用 resolve 函数；当异步任务失败且返回失败原因时，会调用 reject 函数。
 * Promise 有三种状态 pending fulfilled rejected，默认时 pending
 * then 方法，实例方法，接收两个参数，onFulfilled：当 Promise 变成接受状态时调用的函数。该函数有一个参数，即接受的最终结果。onRejected：当Promise 变成拒绝状态时调用的函数。该函数有一个参数，即拒绝的原因。
 */

const AcPromise = require('./08.acPromise')

const promise = new AcPromise((resolve, reject) => {
  console.log('executor')
  // 如果调用 resolve 方法，会将当前的 promise 状态改为 fulfilled
  // 如果调用 reject 方法，会将当前的 promise 状态改为 rejected
  setTimeout(() => {
    resolve('success')
  }, 1000)
  // reject('failure')
})

promise.then(
  (value) => {
    // 当 promise 是 fulfilled 态的时候调用
    console.log('value >>> ', value)
  },
  (reason) => {
    // 当 promise 是 rejected 态的时候调用
    console.log('reason >>> ', reason)
  }
)
