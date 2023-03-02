// 在外界使用require导入一个自定义模块时，得到的成员就是那个模块中module.exports指向的那个对象
const m = require('./05-模块化module.exports自定义模块');
console.log(m);