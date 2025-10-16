// @ts-nocheck
// 浅拷贝:拷贝地址 -> 修改原对象or拷贝的对象，会同时修改所有对象
console.log('浅拷贝示例：');
let original_shallow = {
  name: 'Tom',
  age: 18,
  eat() { },
  attr1: {
    child: 'Peter',
    attr2: {
      grandChild:'Ben'
    }
  }
}

// 浅拷贝
let copied_shallow = Object.assign(original_shallow);

console.log(copied_shallow);
console.log(original_shallow);

// 修改原对象的属性值
original_shallow.age = 20;
// 修改拷贝对象的属性值
copied_shallow.attr1.child = 'John'

console.log(copied_shallow);
console.log(original_shallow);

console.log('---------------------------------------------------------------------------------');

// 深拷贝:拷贝完整对象和属性值 -> 本身和复制体相互独立，修改只针对个体，不同步
console.log('深拷贝示例：');

let original_deep = {
  name: 'Kitty',
  age: 20,
  sleep() { },
  attr1: {
    child: 'Bunny',
    attr2: {
      grandChild:'Rose'
    }
  }
}

// JSON，parse解析字符串，stringify对象转字符串 -> 不可拷贝函数
let copied_deep = JSON.parse(JSON.stringify(original_deep));

console.log(original_deep);
console.log(copied_deep);

// 修改本身，不影响复制体
original_deep.age = 25

console.log(original_deep);
console.log(copied_deep);