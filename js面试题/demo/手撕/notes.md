# 手撕 demo 相关笔记

## 1. instanceof

### 1.1 原型链相关知识：

1. 构造函数构造的实例上有 `__proto__` 属性，指向该实例的原型 `arr.__proto__`
2. 构造函数上有 `prototype` 属性，指向该构造函数的原型 `Array.prototype`
3. `arr.__proto__ === Array.prototype === arr/Array的原型对象 !== Object`
4. arr/Array的原型对象是 Object 构造出来的
5. 整条链：`arr => arr.__proto__ => Object.prototype => null`
6. `Array instanceof Object === true`

## 2. Array.prototype.map()

### 2.1 `arr.map(callBack, thisValue)`

函数效果：迭代数组 `arr`，并对 arr 中的每个元素调用 `callBack` 后，推入一个新数组，最后返回新数组

1. `arr`：Array 构造的数组对象实例
2. `callBack`：回调函数，将每一个迭代 arr 得到的元素作为入参，返回处理后的新值
3. `thisValue`：可选参数，改变回调函数内部 this 指向

### 2.2 实现思路：

1. 创建返回值：空的新数组 `res`
2. 获取 `arr` 实例：`arr.map()` 中 `this` 指向 `arr`
3. 迭代 `arr` ：`for` 循环迭代
4. 处理回调并推入结果数组：`res.push(callBack.call( thisValue, arr[i], i, arr))`

### 2.3 Q&A&Notice：

1. 为什么要获取 `arr` 实例？

   1.1 用来遍历迭代 `arr`

   1.2 作为 `call` 的参数
2. `call` 的参数？

   2.1 `thisValue`：`this` 的目标值

   2.2 `arr[i]`：参数1，数组元素

   2.3 `i`：参数2，元素索引

   2.4 `arr`：参数3，数组本身

   Q：为什么要这么多参数？  A：原生就这么多
3. 为什么要修改 `this` 指向？

   存在**回调函数内部**用到**其他对象属性值**的情况，此时需要将 `thisValue` 指向目标对象，可在回调函数内部调用 `this`
4. 关于本题中的 `this` 指向问题：

   4.1 不传 thisValue：thisValue 是undefined

   - 匿名回调：Function.prototype.call 把 undefined/null 转成全局对象，因此指向—浏览器是window，node是global
   - 箭头回调：沿着作用域链向上找，模块中顶层 this 是初始 modules.exports({})，浏览器中顶层是 window，因此输出 {} / window

   4.2 传 thisValue：

   - 此时需要改变 this 指向，建议只用匿名回调


为什么要处理未提供初始值的情况？

为什么未提供初始值从索引1开始而不是0？

什么是稀疏数组？

为什么要处理稀疏数组？

怎么处理稀疏数组？
