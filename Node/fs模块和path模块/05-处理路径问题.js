const fs = require('fs');
const path = require('path');
// fs.readFile('./file/1.txt', 'utf8', (err, data) => {
//     console.log(data);
// })

// fs.readFile(__dirname + '/file/1.txt', 'utf8', (err, data) => {
//     console.log(data);
// })

// __dirname是当前文件所处的目录
// console.log(__dirname);

fs.readFile(path.join(__dirname, 'file/1.txt'), 'utf8', (err, data) => {
    if(err) {
        return console.log('文件读取失败');
    };
    console.log('文件读取成功');
});
console.log(path.join(__dirname, './file/1.txt'));
// D:\Desktop\PC端\Node\file\1.txt