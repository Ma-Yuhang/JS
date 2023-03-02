// 引入express
const express = require('express');

const app = express();
// 01.html
app.all('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('ok');
})

// 04
// 定义一个中间件函数
// const mw = (req, res, next) => {
//     console.log('这是一个中间件函数！');
//     next();
// }
// // 将mw注册为全局生效的中间件
// app.use(mw);
app.use((req, res, next) => {
    // console.log('这是中间件函数');
    const time = Date.now();
    req.startTime = time;
    next();
})
app.get('/mw', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // console.log('调用了/mw这个路由');
    res.send('mw ok' + req.startTime);
});


app.listen(3000, () => {

    console.log('3000端口已启动');
})