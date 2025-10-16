// @ts-nocheck
// 函数作用域 <==> var
(function () {
  if (1) {
    var i = 1;
  }
  console.log(i);
})()