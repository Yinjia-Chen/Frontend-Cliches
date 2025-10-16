// @ts-nocheck
// 块级作用域 <==> let、const
(() => {
  try {
    if (1) {
      let i = 1;
    }
    console.log(i);
  } catch (error) {
    console.error('捕获异常:', error.message);
  }
})()