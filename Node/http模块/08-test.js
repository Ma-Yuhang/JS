const TIME = require('./07-格式化时间');
// console.log(TIME);
const dt = new Date();

const sj = TIME.dateFormat(dt);
console.log(sj);