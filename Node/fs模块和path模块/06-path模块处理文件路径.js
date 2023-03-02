const path = require('path');


// 注意 ../ 会抵消前面的一层路径
const pathStr = path.join('/a', '/b/c', '../', '/d', '/e');
console.log(pathStr);  // \a\b\d\e

const pathStr2 = path.join(__dirname, './file/1.txt');
console.log(pathStr2);  // D:\Desktop\PC端\Node\file\1.txt