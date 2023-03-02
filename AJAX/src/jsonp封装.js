function jsonp(options) {
    // 动态创建script标签
    let script = document.createElement('script');
    // myJsonp018756334
    let fnName = 'myJsonp' + Math.random().toString().replace('.', '');
    // 把success函数变成全局函数
    window[fnName] = options.success;
    // 拼接字符串的变量
    let params = '';
    for(let attr in options.data) {
        params += '&' + attr + '=' + options.data[attr];
    }
    // 设置script标签的src属性
    script.src = options.url + '?callback=' + fnName + params;
    // 插入到页面中
    document.body.appendChild(script);
    script.onload = function() {
        document.body.removeChild(script);
    }
}

// jsonp({
//     url: 'http://localhost:3000/better',
//     data: {
//         name: 'lisi',
//         age: 18
//     },
//     // 不是一个全局函数
//     success: function(data) {
//         console.log(data);
//     }
// })