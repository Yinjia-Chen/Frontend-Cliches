# 手撕 demo 相关笔记

## 1. instanceof

### 1.1 原型链相关知识：

1. 构造函数构造的实例上有 `__proto__` 属性，指向该实例的原型 `arr.__proto__`
2. 构造函数上有 `prototype` 属性，指向该构造函数的原型 `Array.prototype`
3. `arr.__proto__ === Array.prototype === arr/Array的原型对象 !== Object`
4. arr/Array的原型对象是 Object 构造出来的
5. 整条链：`arr => arr.__proto__ => Object.prototype => null`
6. `Array instanceof Object === true`



## 2. Array.prototype.map

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

3. 对 不传 `initialValue` 的保护操作

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



## 4. 数组扁平化

### 4.1 概念：

将多维数组转化成**一维数组**

```javascript
[1, 2, [3, 4]] => [1, 2, 3, 4]
```

### 4.2 实现方式：

#### 4.2.1 `Array.prototype.flat(depth)`  - ES6 新增的 API

从外至内按照层次**拆开**（相当于从第二个 `[` 开始由左向右逐层展开）

关于参数 `depth` ：要展开的数组层次，**默认为1**

要实现**数组扁平化**（一维数组）：`let depth  = Infinity`

#### 4.2.2 `concat` + 递归 手撕数组扁平化 `function flatten`

##### 4.2.2.1 实现思路：

1. 定义一个用于返回的新数组 `res` 

2. 迭代目标数组，判断当前元素是否是数组

   2.1 不是数组，直接 `push`

   2.2 是数组，进入递归逻辑：用 `res.concat` 合并 `res` 和 当前数组，重新赋值给 `res`，为避免数组中仍有数组，对当前数组再调用 `flatten`，形成递归

3. 返回结果数组

##### 4.2.2.2 Q&A&Notice：

1. `Array.prototype.concat()` 

   用来**连接**两个数组，并**返回一个新数组**，**不改变原数组**，并且**跳过空槽**

   `const arr3 = arr1.concat(arr2)` 拼接数组1和2，将拼接结果赋值给3

2. 为什么要使用递归？递？归？终止条件？

   要**反复处理逻辑相同**的数组展开和拼接操作

   递：数组（包括类型为数组的元素），逐渐递到最后一层

   归：从最后一层展开，随后将展开的数组逐层拼接返回

   终止条件：遇到最后一元素非数组，结束递，开始归

#### 4.2.3 Array.prototype.myFlat(depth)

##### 4.2.3.1 实现思路：

1. 准备工作：获取当前数组实例 `arr`， 定义结果数组 `res`
2. 核心逻辑类似 concat + 递归，只是 4.2.2 直接扁平化，而本函数递归时根据 depth 调整展开深度，即进入下一次递归之前让 `depth - 1`
3. 进入下一次递归前，对 `depth === 0` ，做校验并处理，返回当前数组的浅拷贝 `return arr.slice()` 终止递归

##### 4.2.3.2 Q&A&Notice：

1. 为什么 `depth === 0` 的时候要采用**浅拷贝**而不是深拷贝？

   flat的本质是返回一个新数组，因此必须拷贝；`flat` 只扁平化数组层级，不深拷贝内容

2. 函数的省略写法相关

   2.1 普通函数：只有一行语句时可以省略大括号，不能省略 `return`

   2.2 箭头函数：只有一行语句时可以省略大括号，并且当此行是 `return` 时，可以省略 `return` 



## 5. 函数柯里化

### 5.1 概念：

定义：把一个接收多个参数的函数，拆分成一系列只接收单个参数的函数，并且每个函数都返回下一个接收参数的函数，直到所有参数都被收集完后返回调用结果

原理：闭包(保存每次传入的参数) + 函数返回函数(前者接收部分参数，返回后者并等待接收剩余参数，参数齐全后执行逻辑)

用途：提高函数自由度，逐步收集参数

### 5.2 实际运用：

1.  柯里化 二次封装 axios

```javascript
import axios from 'axios';

// 柯里化请求函数：先固定 baseURL 和 headers，再传路径、方法、数据
const createRequest = (baseURL) => (headers) => (url, method, data = {}) => {
    return axios({
        baseURL,
        headers,
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    });
};

// 1. 固定通用参数：baseURL 和 Authorization 头
const request = createRequest('https://api.example.com')({
    Authorization: 'Bearer' + localStorage.getItem('token')
});

// 2. 后续调用只需传变化的参数（路径、方法、数据）
// GET请求：获取用户数据
request('/user/info', 'GET').then(res => console.log(res));
// POST请求：提交表单
request('/form/submit', 'POST', { name:'张三' }).then(res => console.log(res));
```



### 5.3 实现通用函数 `curry` ：



### 5.4 Q&A&Notice：

 ...params?为什么参数不会被垃圾回收机制处理?如何关联参数和...params？

 this 指向为什么要一直锁定？是什么？
