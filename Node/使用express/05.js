const express = require('express');
const app = express();

const mw = (req, res, next) => {
    console.log('这是一个局部中间件');
    next();
};
app.get('/', mw, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('/ ok');
})
app.get('/user', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('user ok');
})
app.listen(80, () => {
    console.log('80端口已启动！');
})