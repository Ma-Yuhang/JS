// 获取fs模块
const fs = require("fs");

// 读取为学
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile("./为学.md", (err, data) => {
            // 如果失败
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}
// 读取插秧诗
function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile("./插秧诗.md", (err, data) => {
            // 如果失败
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}
// 读取观书有感
function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile("./观书有感.md", (err, data) => {
            // 如果失败
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}
// 声明一个async 函数
async function main() {
    let weixue = await readWeiXue();
    let chayangshi = await readChaYangShi();
    let guanshu = await readGuanShu();
    console.log(weixue.toString());
    console.log(chayangshi.toString());
    console.log(guanshu.toString());
}
main();