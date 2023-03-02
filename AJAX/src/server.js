// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 接收urlencoded形式参数
app.use(express.urlencoded({ extended: true }))

// 接收json形式参数
app.use(express.json())

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send(request.query);
    response.send('hello')
});
app.all('/server_post', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // //设置响应体
    console.log(request.body);
    response.send('HELLO AJAX POST')
});

app.all('/json-server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    //设置响应体
    response.send(JSON.stringify(data));
});

// 针对ie缓存  低版本
app.get('/ie', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO IE1');
});

// axios
app.all('/axios-server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    //设置响应体
    response.send(JSON.stringify(data));
});

app.get('/delay', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        //设置响应体
        response.send('请求数据成功');
    }, 3000);
});
app.get('/axios-delay', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        // 响应一个数据
        const data = {
            name: 'atguigu'
        };
        //设置响应体
        response.send(JSON.stringify(data));
    }, 3000);
});

// cors响应头
app.all('/cors', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello cors');
})

// jsonp解决跨域
app.get('/jsonp_test', (request, response) => {
    const { callback } = request.query
    const person = [{ name: 'zhangsan', age: 18 }, { name: 'lisi', age: 19 }]
    response.send(`${callback}(${JSON.stringify(person)})`)
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动');
})