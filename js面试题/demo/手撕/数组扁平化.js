// 概念：多维数组 转 一维数组

// es6 新特性 Array.prototype.flat(depth)

const multi_arr = [1, [2, 3, [4, [5, 6]]]];
console.log(multi_arr.flat()); // [ 1, 2, 3, [ 4, [ 5, 6 ] ] ]
console.log(multi_arr.flat(2)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(multi_arr.flat(Infinity)); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// concat + 递归
function flatten(params) {
  const res = [];

}