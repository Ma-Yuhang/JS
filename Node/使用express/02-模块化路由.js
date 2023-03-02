const express = require('express');
const app = express();

// 引入路由模块
const router = require('./03.Router');

// 向外托管静态资源
// app.use('/files1',express.static('./files1'));
// app.use(express.static('./files1'));
// app.use(express.static('./files2'));

app.use(router);

app.listen(80, () => {
    console.log('express running at http://127.0.0.1');
})