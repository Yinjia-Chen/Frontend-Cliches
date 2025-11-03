// 柯里化的定义是 把一个接收多个参数的函数，拆分成一系列只接收单个参数的函数，并且每个函数都返回下一个接收参数的函数，直到所有参数都被收集完毕，最终返回结果
// 柯里化的本质是 降低通用性，提高适用性

/**
 * 
 * @param {function} fn 待柯里化的函数
 * @param {number} [len=fn.length] 可选；原函数的参数个数
 * @param {...*} [collected] 可选；内部使用的已收集参数（rest 参数），类型为数组
 * @returns {Function} 返回一个接收剩余参数或在参数凑齐后返回结果的函数
 */
function curry(fn, len = fn.length, ...collected) {
  return function (...params) {
    const args = [...collected, ...params];
    return args.length >= len
      ? fn.apply(this, args)
      : curry.call(this, fn, len, ...args);
  };
}


let _fn = curry(function (a, b, c, d, e) {
  console.log(a, b, c, d, e);
})

console.log('第一行:');
_fn(1, 2, 3, 4, 5);           // 第一行：1 2 3 4 5
console.log('第二行:');
_fn(1, 2)(3, 4)(5);           // 第二行：1 2 3 4 5
console.log('第三行:');
_fn(1)(2)(3, 4, 5);           // 第三行：1 2 3 4 5
console.log('第四行:');
_fn(1)(2)(3)(4)(5);           // 第四行：1 2 3 4 5
console.log('第五行:');
_fn(1)(2)(3)(4)(5, 6);        // 第五行：1 2 3 4 5
console.log('第六行:');
_fn(1)(2)(3)(4);              // 不打印
console.log(_fn(1)(2)(3)(4)); // 打印一个函数

// _fn(1)(2)(3)(4)(5)(6); // error: 第五个参数之后就会将前五个参数合并传入并执行 fn，然后就会变成 "返回值(6)" 的计算式，返回值不是函数则自然报错 not a function

// 涉及 this 的 e.g.
// notice：绑定 this 要绑定在柯里化前，对柯里化后的函数绑定 this 的话只对调用链中的第一个函数生效，后续的函数 this 会退化成 undefined
console.log('涉及 this :');
const calc = {
  factor: 10,
  sumAndScale(a, b, c, d, e) {
    return (a + b + c + d + e) * this.factor;
  },
  // sumAndScale: (a, b, c, d, e) => {
  //   return (a + b + c + d + e) * this.factor;
  // }
};

// const curried = curry(calc.sumAndScale, 5);
// const bound = curried.bind(calc);
// const result = bound(1)(2, 3)(4)(5); // NaN
// const result = bound(1, 2, 3, 4, 5); // 150

const curried = curry(calc.sumAndScale.bind(calc), 5);
const result = curried(1)(2, 3)(4)(5);

console.log(result); // (1 + 2 + 3 + 4 + 5) * 10 = 150