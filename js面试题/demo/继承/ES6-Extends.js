// @ts-nocheck
class Father {
  // 构造函数，用于初始化类的属性
  constructor() {
    this.name = '爸爸';
    this.gender = '男';
    this.age = 35
  }

  // 定义类的方法
  eat() {
    console.log(`${this.name}吃饭`);
  }
}

class Son extends Father {
  constructor() {
    super();
    this.name = '儿子';
    this.age = 18;
  }
}

let tom = new Son();
console.log(tom);
tom.eat();