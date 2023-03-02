const fs = require('fs');

fs.readFile('./file/3成绩.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log('文件读取失败!');
    }
    // console.log('文件读取成功!');
    // 1.先把文件的内容按照空格分割成一个数组
    const arrOld = data.split(' ');
    // 创建一个新数组
    let newArr = [];
    // 遍历旧数组
    arrOld.forEach(item => {
        // 将旧数组里的=替换成： 并添加到新数组中
        newArr.push(item.replace('=', '：'));
    })
    console.log(newArr);
    newArr = newArr.join('\r\n');
    console.log(newArr);
    fs.writeFile('./file/4成绩ok.txt', newArr, err => {
        if (err) {
            return console.log('文件写入失败!');
        }
        console.log('文件写入成功!');
    });
});
