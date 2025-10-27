// 概念：多维数组 转 一维数组

// es6 新特性 Array.prototype.flat(depth)

const multi_arr = [1, [2, 3, [4, [5, 6]]]];
console.log('arr.flat():',multi_arr.flat()); // [ 1, 2, 3, [ 4, [ 5, 6 ] ] ]
console.log('arr.flat(2):',multi_arr.flat(2)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log('arr.flat(Infinity):', multi_arr.flat(Infinity)); // [ 1, 2, 3, 4, [ 5, 6 ] ]

/**
 * concat + 递归 实现数组扁平化
 * @param {Array} arr 
 * @returns {Array} 
 */
function flatten(arr) {
  // 要返回的是一个一维的新数组
  let res = [];
  // arr1.concat(arr2) 合并arr1和arr2，不改动原数组，返回新数组
  for (const item of arr) {
    if (Array.isArray(item)) {
      // 采用递归来迭代展开嵌套的数组
      res = res.concat(flatten(item))
    } else {
      // 普通元素直接推入结果数组
      res.push(item)
    }
  }
  return res;
}
console.log('flatten:', flatten(multi_arr)); // [ 1, 2, 3, 4, 5, 6 ]

/**
 * 手撕 es6 的 arr.flat()
 * @param {number} depth 展开深度，默认为1
 * @returns {Array}
 */
Array.prototype.myFlat = function(depth = 1){
  // 获取到当前实例对象
  const arr = this;

  // 对 depth = 0 做特殊处理
  // 只有箭头函数在只有一行 return 语句的时候省略 return
  if (depth === 0) return arr.slice();

  // flat 核心逻辑
  let res = []; // 返回新数组
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(item.myFlat(depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}
console.log('arr.myFlat():',multi_arr.myFlat()); // [ 1, 2, 3, [ 4, [ 5, 6 ] ] ]
console.log('arr.myFlat(2):',multi_arr.myFlat(2)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log('arr.myFlat(Infinity):', multi_arr.myFlat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ]