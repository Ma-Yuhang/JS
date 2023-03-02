const express = require('express');
const app = express();

const customBodyParse = require('./09-custom-body-parse');
// 这是解析表单数据的中间件
app.use(customBodyParse);

app.post('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(req.body);
})

app.listen(80, () => {
    console.log('80端口已启动！');
})