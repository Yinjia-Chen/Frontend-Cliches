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

函数效果：

```
迭代数组 `arr`，并对 arr 中的每个元素调用 `callBack` 后，推入一个新数组，最后返回新数组
```

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

   Q：为什么要这么多参数？  A：原生就这么多，有特殊情况需要传入 `i` 和 `arr`
3. 为什么要修改 `this` 指向？

   存在**回调函数内部**用到**其他对象属性值**的情况，此时需要将 `thisValue` 指向目标对象，可在回调函数内部调用 `this`
4. 关于本题中的 `this` 指向问题：

   4.1 不传 thisValue：thisValue 是undefined

   - 匿名回调：Function.prototype.call 把 undefined/null 转成全局对象，因此指向—浏览器是window，node是global
   - 箭头回调：沿着作用域链向上找，模块中顶层 this 是初始 modules.exports({})，浏览器中顶层是 window，因此输出 {} / window

   4.2 传 thisValue：

   - 此时需要改变 this 指向，建议只用匿名回调

## 3. Array.prototype.reduce

### 3.1 `arr.reduce(callBack(acc, cur), initialValue)`

函数效果：

```
对数组的每个元素依次执行累加器函数，将结果累积成一个单一值
```

1. `arr`: 数组实例
2. `callBack`: 回调函数
3. `acc`: 累加器
4. `cur`: 当前遍历到的数组元素
5. `initialValue`: 初始值

### 3.2 实现思路：

1. 准备工作：初始化累加器 `acc = initialValue`      获取数组实例 `arr = this `     定义遍历索引 `startIndex`

2. 开始循环迭代并进入累加器核心思路：

   2.1 取出当前元素值并作为 `cur`

   2.2 调用回调函数，返回值赋值给新的 `acc`

3. 对 不传`initialValue` 的保护操作

   3.1 将初始值（`acc`）指向数组第一个元素 `arr[0]`

   3.2 将遍历索引 `startIndex` 置1

4. 稀疏数组处理：在进入累加逻辑之前（循环刚进入时），用 `if (i in arr)` 过滤掉空槽

5. 返回累加结果 `acc`

### 3.3 Q&A&Notice：

1. 什么是稀疏数组？

   数组存在空槽就是稀疏数组

   `arr = [ , ,1]` 其中索引 0 和 1是两个空槽，因此是稀疏数组

   `arr[0] === undefined`             `0 in arr === 1 in arr === false`              `2 in arr === true`

2. 为什么要处理稀疏数组？

   稀疏数组的空槽取值是 undefined，不能被 callBack 调用，因此要过滤掉空槽

3. 怎么处理稀疏数组？

   循环一开始就 `if (i in arr)` 此时不是空槽才会走分支逻辑，进入累加器核心逻辑

4. `in` 操作符 `A in B`

   4.1 对象：查找 对象B 中是否有 属性A（会自动沿着原型链查找）

   4.2 数组：检查 数组B 中的 索引A 是否为空槽（undefined）
