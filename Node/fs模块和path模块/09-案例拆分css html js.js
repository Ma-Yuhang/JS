const fs = require('fs');
const path = require('path');

// 定义匹配css的正则
const styleReg = /<style>[\d\D]*<\/style>/;
// 定义匹配js的正则
const scriptReg = /<script>[\d\D]*<\/script>/;

// 读取file文件夹下的index.html文件
fs.readFile(path.join(__dirname, 'file/index.html'), 'utf8', (err, data) => {
    if (err) return console.log('文件读取失败！' + err.message);
    // console.log('文件读取成功！');
    // 文件读取成功后 分别调用对应的三个方法 解析出 html css js
    resolveCSS(data);
    resolveJS(data);
    resolveHTML(data);
})

// 定义解析CSS的函数
function resolveCSS(htmlStr) {
    // 使用正则匹配所需要的内容   r1[0]为所匹配的内容
    const r1 = styleReg.exec(htmlStr);
    // console.log(r1[0]);
    // 将<style></style> 替换为空
    const cssStr = r1[0].replace('<style>', '').replace('</style>', '');
    // 将css代码写入到目标文件夹中
    fs.writeFile(path.join(__dirname, '拆分案例目标文件夹/index.css'), cssStr, err => {
        if (err) return console.log('css 文件写入失败！' + err.message);
        console.log('css文件写入成功！');
    })
}

// 定义解析js的函数
function resolveJS(htmlStr) {
    const r2 = scriptReg.exec(htmlStr);
    const jsStr = r2[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, '拆分案例目标文件夹/index.js'), jsStr, err => {
        if (err) return console.log('js 文件写入失败！' + err.message);
        console.log('js文件写入成功！');
    })
}

// 定义解析html的函数
function resolveHTML(htmlStr) {
    // 将css代码和js代码替换为 引入样式
    const newHTML = htmlStr
        .replace(styleReg, '<link rel="stylesheet" href="./index.css">')
        .replace(scriptReg, '<script src="./index.js"></script>');
    // 将替换后的html代码 写入到index.html中
    fs.writeFile(path.join(__dirname, '拆分案例目标文件夹/index.html'), newHTML, err => {
        if(err) return console.log('html文件写入失败！' + err.message);
        console.log('html文件写入成功！');
    })
}