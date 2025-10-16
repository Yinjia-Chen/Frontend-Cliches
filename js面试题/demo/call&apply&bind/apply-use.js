// Math.max()只能处理罗列的数据，不能处理数组，apply会展开传入的参数数组并将this指向改变为第一个参数
var arr1 = [1, 2, 4, 5, 7, 3, 321];
console.log(Math.max.apply(null, arr1))