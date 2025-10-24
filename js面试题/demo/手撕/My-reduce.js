// FIXME: 处理一下不传初始值，且数组第一个元素是空槽这种情况

// 先用一下reduce
const arr = [1, 1, 1, 1];

const res = arr.reduce((acc, cur) => {
  return acc + cur
}, 0)

console.log('reduce:', res);

// 拆解一下 reduce 的参数
// 参数1：callBack 回调函数 acc累加值 cur当前值 index当前数组元素索引 arr当前数组实例
// 参数2：initialValue 初始值

/**
 * 手撕 reduce：迭代数组元素并传入累加器，从初始值开始处理，每次处理完结果赋值给 acc，在下一次迭代中将 acc 再传入回调函数中
 * @param {any} accumulator 累加器
 * @param {any} currentValue 当前遍历到的数组元素值
 * @param {number} [index] 可选：当前元素索引
 * @param {Array} [arr] 可选：当前数组实例
 * @param {function} callBack 回调函数：累加器核心逻辑
 * @param {any} initialValue 累加器初始值
 */
Array.prototype.myReduce = function (callBack, initialValue) {
  // 初始化累加器 遍历用索引
  let accumulator = initialValue;
  let startIndex = 0;
  // 获取数组实例
  const arr = this;

  // 不传 initialValue 的保护处理：第一个累加器的值是数组第一个元素，累加器从 index = 1 开始遍历
  if (initialValue === undefined) {
    accumulator = arr[0];
    startIndex = 1;
  }

  // 累加器核心思路
  for (let i = startIndex; i < arr.length; i++) {
    // 考虑稀疏数组
    if (i in arr) {
      const currentValue = arr[i]
      accumulator = callBack(accumulator, currentValue, i, arr);
    }
  }

  return accumulator;
}

// e.g.1: 一般调用
const res1 = arr.myReduce((acc, cur) => acc + cur, 0);
console.log('myReduce:', res1);

// e.g.2: 传 index - 只累加索引为偶数的元素
const res2 = arr.myReduce((acc, cur, i) => i % 2 === 0 ? acc + cur : acc, 0)
console.log('index:', res2);

// e.g.3: 传 arr - 根据数组长度计算平均值          要传 arr，必须先传 index
const res3 = arr.reduce((acc, cur, i, arr) => {
  acc += cur;
  return i === arr.length ? acc / arr.length : acc;
}, 0)
console.log('arr:', res3);

// e.g.4: 不传 initialValue
const arr2 = [2, 1, 1, 1]
const res4 = arr2.myReduce((acc, cur) => acc + cur);
console.log('no_initialValue:', res4);