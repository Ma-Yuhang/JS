// 1.导入http模块
const http = require('http');
// 2.创建web服务器实例
const server = http.createServer();
// 3.为服务器绑定request事件 监听客户端的请求
server.on('request', (req, res) => {
    console.log('有人访问我们的服务器');
})

// 启动服务器
server.listen(8080, () => {
    console.log('服务已启动');
})