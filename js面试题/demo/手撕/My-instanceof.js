/**
 * instanceof 判断实例是否是其父类或祖先类型的实例
 * A instanceof B ：A是否是B的实例（继承原型链）
 * @param {*} instance instanceof左侧实例 A
 * @param {*} constructor instanceof右侧原型构造函数 B
 * @return {boolean} B 是 A 的原型返回true
 */
function myInstanceof(instance, constructor) {
  // 逐层查找原型 查找原理：instance.__proto__ === constructor.prototype
  // 原型链顶层是 null，不满足循环条件会退出并返回 false
  while (instance) {
    if (instance.__proto__ === constructor.prototype) {
      return true
    }
    // 当前实例 instance 不是由constructor构造得来，沿着原型链向上循环查找
    instance = instance.__proto__
  }

  return false;
}


/**
 * example：构造函数 Person
 * @param {number} age 
 * @param {string} gender 
 */
function Person(age, gender) {
  this.age = age;
  this.gender = gender;
}

const Kya = new Person(20, 'man')

console.log(Kya);

console.log(myInstanceof(Kya, Array)); // false
console.log(myInstanceof(Kya, Person)); // true
console.log(myInstanceof(Kya, Object)); // true