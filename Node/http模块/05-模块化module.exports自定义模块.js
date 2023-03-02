// 1.在一个自定义模块中 默认module.exports = {}
module.exports.username = 'zhangsan';
module.exports.sayHello = function() {
    console.log('hello');
}


// 让module.exports指向一个新对象
module.exports = {
    username: 'lisi',
    sayHello: function() {
        console.log('hi');
    }
}