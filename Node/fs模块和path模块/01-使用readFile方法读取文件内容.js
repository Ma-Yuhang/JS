// 1.引入fs模块
const fs = require('fs');

// 2.调用 fs.readFile() 方法读取文件
fs.readFile('./file/1.txt', 'utf8', (err, dataStr) => {
    // 打印失败的结果
    // 如果读取成功 err的值为null
    // 如果读取失败 err的值为 错误对象，dataStr 的值为 undefined
    console.log(err);
    console.log('-------');
    // 打印成功的结果
    console.log(dataStr);
})