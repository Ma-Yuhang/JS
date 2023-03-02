const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 人为抛出一个错误
    throw new Error('服务器出错了！');
    res.send('/ ok');
})
// 错误级别的中间件 必须放在所有路由之后
app.use((err, req, res, next) => {
    // 在服务器打印错误消息
    console.log(err.message);
    // 向客户端响应错误内容
    res.send('Error' + err.message);
});
app.listen(80, () => {
    console.log('80端口已启动！');
})