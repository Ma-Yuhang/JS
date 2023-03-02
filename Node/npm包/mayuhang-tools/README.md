## 安装
```
npm install mayuhang-tools
```

## 导入
```js
const mayuhang = require('./mayuhang-tools/index');
```

## 格式化时间
```js
const dt = mayuhang.dateFormat(new Date());
console.log(dt);
// 输出结果：2022-05-10 18:01:57
```

## 转义html特殊字符
```js
// 待转义的代码
const htmlStr = '<h1 title="abc">这是h1标签&nbsp;</h1>';
const str = mayuhang.htmlEscape(htmlStr);
console.log(str);
// 输出结果：&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&amp;nbsp;&lt;/h1&gt;
```

## 还原html代码
```js
// str 为待还原的代码
const str2 = mayuhang.htmlUnEscape(str);
console.log(str2);
// 输出结果：<h1 title="abc">这是h1标签&nbsp;</h1>
```

## 开源协议
ISC