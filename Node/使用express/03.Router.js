// 这是路由模块

// 导入express
const express = require('express');
// 创建路由对象
const router = express.Router();

router.get('/user', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.download(__dirname + '/01.html')
    res.send('get ok');
})

// router.post('/user', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send('post ok');
// })

// 向外暴露router
module.exports = router;
