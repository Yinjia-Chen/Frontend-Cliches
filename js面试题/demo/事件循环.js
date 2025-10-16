console.log('同步代码开始');

setTimeout(() => {
    console.log('宏任务：setTimeout');
    Promise.resolve().then(() => {
        console.log('微任务：Promise.then (第二次)');
    });
}, 0);

Promise.resolve(() => {
    console.log('同步代码 (resolve 内部)');
}).then(() => {
    console.log('微任务：Promise.then (第一次)');
});

console.log('同步代码结束');

/*
输出结果：
1. 同步代码开始
2. 同步代码 (resolve 内部)
3. 同步代码结束
4. 微任务：Promise.then (第一次)
5. 宏任务：setTimeout
6. 微任务：Promise.then (第二次)
*/