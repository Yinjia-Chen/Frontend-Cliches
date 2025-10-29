// 柯里化的定义是 把一个接收多个参数的函数，拆分成一系列只接收单个参数的函数，并且每个函数都返回下一个接收参数的函数，直到所有参数都被收集完毕，最终返回结果
// 柯里化的本质是 降低通用性，提高适用性

/**
 * 
 * @param {function} fn 待柯里化的函数
 * @param {number} len 原函数的参数个数
 * @param  {...any} collected 已接收到的参数
 * @returns 
 */
function curry(fn, len = fn.length, ...collected) {
  return function (...params) {
    const args = [...collected, ...params];
    return args.length >= len
      ? fn.apply(this, args)
      : curry.call(this, fn, len, ...args);
  };
}


let _fn = curry(function (a,b,c,d,e) {
  console.log(a,b,c,d,e);
})

_fn(1,2,3,4,5);     // 1 2 3 4 5
_fn(1)(2)(3,4,5);   // 1 2 3 4 5
_fn(1,2)(3,4)(5);   // 1 2 3 4 5
_fn(1)(2)(3)(4)(5); // 1 2 3 4 5