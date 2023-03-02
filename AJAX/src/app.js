// 1.引入express
const express = require('express');

// 路径处理模块
const path = require('path');
const formidable = require('formidable');
// 2.创建应用对象
const app = express();


// 拦截所有请求
// app.use((request, response, next) => {
//     // 1.允许那些客户端访问我 *代表所有
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     // 2.允许客户端以哪种方式访问我
//     response.setHeader('Access-Control-Allow-Methods', 'get,post');
//     next();
// })

// 创建路由规则
app.all('/first', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    // response.status(400).send('hello ajax');
    response.send('hello ajax');
})

app.all('/json', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send({name: 'mayuhang'});
})

app.all('/email', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    // response.status(400).send({message: '邮箱已被注册，请重新输入'});
    response.send({message: '恭喜邮箱可以使用'});
})

app.all('/formData', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const form = new formidable.IncomingForm();
    form.parse(request, (err, fields, files) => {
        response.send(fields);
    })
})
// 实现文件上传的路由
app.all('/file', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const form = new formidable.IncomingForm();
    // 设置文件上传的存储路径
    form.uploadDir = path.join(__dirname, 'uploads');
    form.parse(request, (err, fields, files) => {
        response.send('ok');
        // response.send(files.attrName.path);
    })
})

app.get('/better', (request, response) => {
    // 接收客户端传递过来的函数名称
    // const fnName = request.query.callback;
    // const data = JSON.stringify({name: '张三'});
    // const result = fnName + '(' + data + ')';
    // response.send(result);
    response.jsonp({name: 'zhangsan', age :20});
})

// 4.监听端口启动服务
app.listen(3000, () => {
    console.log('服务已经启动,3000端口');
})