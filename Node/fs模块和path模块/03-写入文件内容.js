const fs = require('fs');

// 参数一：文件要存放的路径
// 参数二：要写入的内容
// 参数三：传入的配置对象（可选）
//  encoding:设置文件的编码格式 默认utf8
//  mode: 0o666(默认) 文件可被读写
//      0o111 文件可执行
//      0o222 文件只可写入 不可读
//      0o444 文件只可读取 不可写入
//  flag: 默认 'w' 替换文件内容
//             'a' 追加文件内容
// 参数四：回调函数
fs.writeFile('./file/2.txt', '追加上的', { flag: 'a' }, (err) => {
    // 如果写入成功则err的值为null
    // 如果写入失败则err的值为一个错误对象
    if (err) {
        return console.log('文件写入失败' + err.message);
    };
    console.log('文件写入成功');
})