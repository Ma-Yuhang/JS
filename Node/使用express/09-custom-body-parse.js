// 导入node.js内置的 querystring 模块
const qs = require('querystring');

const bodyParse = (req, res, next) => {
    // 定义一个str字符串 专门用来存储客户端发送过来的请求体数据
    let str = '';
    // 监听req的 data 事件
    req.on('data', (chunk) => {
        str += chunk;
    });

    // 监听req的 end 事件
    req.on('end', () => {
        // console.log(str);
        const body = qs.parse(str);
        // console.log(body);
        req.body = body;
        next();
    })
};
module.exports = bodyParse;