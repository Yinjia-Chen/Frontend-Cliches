function Constructor( age,name ){
	this.age = age;
	this.name = name;
}

function myNew(Constructor, ...args) {
  // 1. 创建一个空对象
  const obj = {};

  // 2. 将空对象的 __proto__ 指向构造函数的 prototype
  obj.__proto__ = Constructor.prototype;

  // 3. 调用构造函数，并将 this 指向新创建的对象
  const result = Constructor.apply(obj, args);

  // 4. 如果构造函数返回一个对象，则返回该对象；否则返回新创建的对象
  return typeof result === "object" && result !== null ? result : obj;
}

console.log( myNew(Constructor,18,'张三')  )