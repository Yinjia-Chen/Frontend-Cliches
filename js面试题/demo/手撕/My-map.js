/**
 * 此处手撕的是 arr.map() 方法：迭代并处理每个数组元素，返回新数组。
 * @callback mapCallback
 * @param {any} currentValue 当前元素
 * @param {number} [index] 元素索引
 * @param {any[]} [array] 原数组
 * @returns {any} 处理后的值（必须返回，否则新数组中为 undefined）
 * @param {*} [thisValue] 指定回调内部的 this 值
 * @returns {any[]} 新数组
 */
Array.prototype.myMap = function (callBack, thisValue) {
  const res = []; // 定义结果数组
  // this 指向：Array实例
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    res.push(callBack.call(thisValue, arr[i], i, arr));
  }
  return res;
}

// example
const arr = [1, 2, 3];

// e.g.1: 常规使用
const res1 = arr.myMap((x) => x * 2);
console.log(res1); // [2, 4, 6]

// e.g.2: 改变 this 指向 - 迭代 arr，使用时调用 callBack 函数，函数中用到 multipler 对象的 factor 因子属性值，因此调用this，此时需要传入该对象，修改 this 指向，从而找到 this.factor
const multiplier = { factor: 3 };
const res2 = arr.myMap(
  function callBack(x) {
    return x * this.factor;
  },
  multiplier
)
console.log(res2);