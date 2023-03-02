const path = require('path');

// 定义一个文件的路径
const fpath = 'a/b/c/index.html';

const fullName = path.basename(fpath);
console.log(fullName); // index.html


// 输出 html格式的文件名称（不包含.html）
const nameWithoutExt = path.basename(fpath, '.html');
console.log(nameWithoutExt);   // index