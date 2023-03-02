const fs = require('fs');
const path = require('path')

// 创建可写流
const ws = fs.createWriteStream(path.join(__dirname, 'file/流式文件写入.txt'))

ws.on('open', function () {
    console.log('可写流打开了');
})
ws.on('close', function () {
    console.log('可写流关闭了');
})



ws.write('lala!!')
ws.end()