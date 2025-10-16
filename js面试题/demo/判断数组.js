// 1. Array.isArray() 方法
// 2. instanceof 运算符
// 3. Object.prototype.toString.call() 方法
// 4. Array.prototype.isPrototypeOf() 方法
// 5. constructor
let arr = [1, 2];
let num = 1;
let str = 'hello'
console.log(Object.prototype.toString.call([str]));