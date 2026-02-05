/**
 * 深拷贝 递归实现
 * @param {Object} original_obj 
 * @return {Object}
 */
const deepClone = (original_obj) => {
  if (typeof original_obj !== 'object' || original_obj === null) return original_obj;

  const cloned_obj = Array.isArray(original_obj) ? [] : Object.create(Object.getPrototypeOf(original_obj))

  for (let key in original_obj) {
    if (original_obj.hasOwnProperty(key)) {
      cloned_obj[key] = deepClone(original_obj[key]);
    }
  }

  return cloned_obj;
}


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

const cloned_obj = deepClone(original_deep);

console.log(cloned_obj);

console.log(deepClone(null));

console.log({});

class Person {
  say() { return 'hi'; }
}

const original = new Person();
const cloned = deepClone(original);
cloned.say();

// M1：判断是否是对象的时候要带上 null 的判断条件
// R1：type of null === 'object'

// M2：非对象时返回原对象
// R2：直接返回会导致后续递归循环出问题

// M3：typeof obj !== 'object'
// R3：typeof的运算结果是一个 String