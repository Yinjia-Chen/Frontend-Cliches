// @ts-nocheck
function Father() {
  this.gender = '男';
}

function Son() {
  this.age = 18;
}

Son.prototype = new Father(); // 将Father对象赋值给Son的原型对象，导致Son的原型对象被覆盖
Son.prototype.constructor = Son; // 修复原型链的构造函数指向


let tom = new Son();

console.log(tom);