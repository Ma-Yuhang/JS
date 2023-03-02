const mayuhang = require('./mayuhang-tools/index');

const dt = mayuhang.dateFormat(new Date());
console.log(dt);


const htmlStr = '<h1 title="abc">这是h1标签&nbsp;</h1>';
const str = mayuhang.htmlEscape(htmlStr);
console.log(str);

const str2 = mayuhang.htmlUnEscape(str);
console.log(str2);