module.exports = function initRace(Promise) {
  Promise.race = function (promiseArr) { // 成功还是失败，取决于最先成功还是失败的那个
    return new Promise((resolve, reject) => {
      for (const i in promiseArr) {
        promiseArr[i].then(resolve, reject)
      }
    })
  }
}