const initResolve = require('../手写Promise/Promise.resolve')
const initReject = require('../手写Promise/Promise.reject')
const initAll = require('../手写Promise/Promise.all')
const initRace = require('../手写Promise/Promise.race')
const initAny = require('../手写Promise/Promise.any')
const initAllSettled = require('../手写Promise/Promise.allSettled')


// 三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECT = 'reject'

/**
 * 将回调放入微队列
 * @param {Function} callback 放入微队列的函数
 */
function runMicrotask(callback) {
  // 如果是node环境
  if (process && process.nextTick) {
    process.nextTick(callback)
  } else if (MutationObserver) {
    // 如果是浏览器环境且支持MutationObserver
    const p = document.createElement('p')
    const observer = new MutationObserver(callback)
    observer.observe(p, {
      childList: true // 观察该元素内部的变化
    })
    p.innerHTML = '1'
  } else {
    setTimeout(callback, 0)
  }
}

function isPromise(obj) {
  return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')
}

class myPromise {
  constructor(executor) {
    this._state = PENDING
    this._value = undefined
    this._handlers = [] // 存储回调
    try {
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (error) {
      this._reject(error)
    }
  }


  _pushHandler(executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject
    })
  }

  /**
   * 依次运行队列中的任务
   * @returns 
   */
  _runHandler() {
    if (this._state === PENDING) {
      return
    }
    while (this._handlers[0]) {
      const handler = this._handlers[0]
      this._runOneHandler(handler)
      this._handlers.shift()
    }
  }

  /**
   * 处理每一个任务
   * @param {Object} handler 
   */
  _runOneHandler({ executor, state, resolve, reject }) {
    runMicrotask(() => {
      if (this._state !== state) {
        return // 状态不一致不做处理
      } else if (typeof executor !== 'function') {
        this._state === FULFILLED ? resolve(this._value) : reject(this._value)
        return
      }
      try {
        const result = executor(this._value)
        if (isPromise(result)) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }

    })
  }

  /**
   * Promise A+的then函数
   * @param {Function} onFulfilled 成功的回调
   * @param {Function} onRejected 失败的回调
   * @returns 
   */
  then(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => {
      this._pushHandler(onFulfilled, FULFILLED, resolve, reject)
      this._pushHandler(onRejected, REJECT, resolve, reject)
      this._runHandler()
    })
  }
  /**
   * 改变状态
   * @param {string} newState 新的状态
   * @param {any} newValue 成功的值或失败的原因
   */
  _changeState(newState, newValue) {
    if (this._state !== PENDING) {
      return
    }
    this._state = newState
    this._value = newValue
    this._runHandler() // 状态改变执行队列
  }

  /**
   * 标记当前任务完成
   * @param {any} data 任务完成的数据
   */
  _resolve(data) {
    this._changeState(FULFILLED, data)
  }

  /**
   * 标记当前任务失败
   * @param {any} reason 任务失败的原因
   */
  _reject(reason) {
    this._changeState(REJECT, reason)
  }
}

setTimeout(() => {
  console.log(3);
})
new myPromise((resolve, reject) => {
  // setTimeout(() => {
  resolve(123)
  // }, 100);
}).then((data) => {
  console.log(data);
  return 1
})

console.log(2);

// initResolve(myPromise)
// initReject(myPromise)
// initAll(myPromise)
// initRace(myPromise)
// initAny(myPromise)
// initAllSettled(myPromise)

// const p1 = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(1)
//   }, 300);
// })
// const p2 = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2)
//   }, 200);
// })
// const p3 = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3)
//   }, 100);
// })

// myPromise.allSettled([p1, p2, p3]).then((data) => {
//   console.log(data);
// })