const express = require('express');
const app = express();

// 注意：除了错误级别的中间件，其他的中间件必须写在路由之前
// 通过express.json()这个中间件，解析JSON格式的数据
app.use(express.json());

// 通过express.urlencoded()这个中间件，来解析url-encoded 格式的数据
app.use(express.urlencoded({extended: false}));

app.post('/post', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    res.send('ok');
})

app.listen(80, () => {
    console.log('80端口已启动！');
})