// @ts-nocheck
// 此方法只能继承属性，不能继承函数
function Father() {
  this.gender = '男'; // 定义实例属性
}

function Son() {
  this.age = 18; // 定义子类自己的属性
  Father.call(this); // 调用父类构造函数，将父类的实例属性添加到子类实例上
}

let tom = new Son();
console.log(tom); // 输出：{ age: 18, gender: '男' }