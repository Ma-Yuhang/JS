module.exports = function initAllSettled(Promise) {
  Promise.allSettled = function (promiseArr) { // 返回一个成功的数组
    let result = []
    let index = 0
    function collectResult(i, data, status, resolve) {
      index++
      result[i] = {
        status: status,
        value: data
      }
      if (index === promiseArr.length) {
        resolve(result)
      }
    }
    return new Promise((resolve, reject) => {

      for (let i in promiseArr) {
        promiseArr[i].then(value => {
          collectResult(i, value, 'fulfilled', resolve)
        }, err => {
          collectResult(i, err, 'rejected', resolve)
        })
      }
    })
  }
}