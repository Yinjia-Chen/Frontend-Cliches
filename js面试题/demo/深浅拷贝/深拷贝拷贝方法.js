// @ts-nocheck
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

// 法1:递归实现
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // 如果是基本类型或 null，直接返回
  }

  let clone = Array.isArray(obj) ? [] : {}; // 判断是数组还是对象

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 结合第一段if，如果是对象或数组，递归拷贝；否则直接赋值到对应的属性上
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

let copied_deep1 = deepClone(original_deep);

console.log(copied_deep1);

//========================================================================================================

// 法2:lodash外部库cloneDeep方法
// npm install lodash
// const _ = require('lodash');

// let original_deep = {
//   name: 'Kitty',
//   age: 20,
//   sleep() {
//     console.log('Sleeping...');
//   },
//   attr1: {
//     child: 'Bunny',
//     attr2: {
//       grandChild: 'Rose'
//     }
//   }
// };

// let copied_deep = _.cloneDeep(original_deep);

// console.log(copied_deep);
// copied_deep.sleep(); // 输出：Sleeping...