面试题：延迟加载JS有哪些方式？

```
延迟加载：async、defer
		例如：<script defer type="text/javascript" src='script.js'></script>
		
defer : 等html全部解析完成，才会执行js代码，顺次执行js脚本。
async : async是和html解析同步的（一起的），不是顺次执行js脚本（谁先加载完谁先执行）。
```



面试题：JS数据类型有哪些？

```
基本类型：number、boolean、string、undefined、null、symbol
引用类型：object

NaN属于number
null属于object
```



面试题：null和undefined的区别

```
null表示空对象指针，转为number时值为0
undefined表示“无”，转为number时值为NaN
```



面试题：JS数据类型考题

```
console.log( true + 1 );     // 2
console.log( 'name'+true );  		// nametrue	
console.log( undefined + 1 ); 		// NaN
console.log( typeof undefined );  // undefined
console.log( typeof(NaN) );     // number
console.log( typeof(null) );    // object
```



面试题：==和===有什么不同

```
==：比较值，当类型不同进行隐式转换
	null == undefined => true
	遇到number，隐式调用 valueOf 转换成 number 比较，boolean只有0和1，例如 boolean == 3 => false
	遇到ovject，转换成基本类型

===：比较类型&值	
```



面试题：JS微任务和宏任务

```
1. 单线程
2. 执行流程：同步 => 事件循环（异步，包含宏任务、微任务）=> 微任务 => 宏任务 => 微任务 => ...
			事件循环内容：请求、定时器、事件 ...
			微任务：Promise.then ...
			宏任务：setTimeout ...
	
```



面试题：JS作用域考题

```
1. 除了函数之外，没有块级作用域
2. 作用域链：内部可以访问外部变量，外部不能访问内部变量
3. 变量提升（悬挂声明）：使用 var 声明变量，会自动提升到作用域顶层，但是不赋值
4. 不使用关键字声明的变量默认为 (window.)xxx 即全局变量
5. 直接function声明的普通函数，无视顺序自动提升
```



面试题：JS对象考题

```
1. 所有对象都是引用类型
2. 对象的所有属性名称（key）都属于String
3. 原型链：当找不到对象的属性或方法时，向上层查找    原型链终点：Object.prototype.__proto__ == null
	 查找顺序：对象obj本身 ==> obj.__proto__(== obj.getProtoTypeOf == obj构造函数.prototype) ==> 原型链向上查找 ==> Object.prototype(== obj构造函数.prototype.__proto__)
```



面试题：JS作用域+this指向+原型 考题

```
注意：假设有 x = funy，表示将整个函数体 funy 赋值给 x
		 若有 x = funy()，表示将函数 funy 的执行结果赋值给 x
```



面试题：JS判断变量是不是数组，你能写出哪些方法？

```javascript
1. Array.isArray(arr)
2. arr instanceof Array
3. Object.prototype.toString.call(arr).indexOf('Array') > -1
4. Array.prototype.isPrototypeOf(arr)
5. arr.constructor.toString().indexOf('Array') > -1
```



面试题：slice是干嘛的、splice是否会改变原数组

```
1. slice 截取数组 返回一个新数组
	 双参数：slice(start, end)
	 			  从数组索引为start开始截取，包含start的元素，但是不包含end的元素
	 单参数n：n正数从n截取到最后，n负数截取倒数n个元素
	 负数参数通用规则：负数索引n转换成array.length+n
	 
2. splice 插入、替换、删除 修改原数组 返回被删除的值
	 splice(n) 删除索引为n以及n之后的所有元素
	 splice(n, m) 删除索引n到n+m的所有元素
	 splice(n, m, item1, item2, ...) 删除索引n到n+m的所有元素后，在当前位置插入item...(可理解为替换)
```



面试题：JS数组去重

```
1. new Set Set结构存储唯一值，注意set是对象，需用[...]展开为数组
2. indexOf 查找新数组中是否已有该元素的下标
3. sort 排序后判断相邻元素是否相同来去重
```



面试题：找出多维数组最大值

```
function fnArr(arr){
	var newArr = [];
	arr.forEach((item,index)=>{
		newArr.push( Math.max(...item)  )
	})
	return newArr;
}
console.log(fnArr([
	[4,5,1,3],
	[13,27,18,26],
	[32,35,37,39],
	[1000,1001,857,1]
]));
```



面试题：给字符串新增方法实现功能

给字符串对象定义一个addPrefix函数，当传入一个字符串str时，它会返回新的带有指定前缀的字符串，例如：

console.log( 'world'.addPrefix('hello') )  控制台会输出helloworld

```
String.prototype.addPrefix = function(str){
	return str  + this;
}
console.log( 'world'.addPrefix('hello') )
```



面试题：找出字符串出现最多次数的字符以及次数

```
var str = 'aaabbbbbccddddddddddx';
var obj = {};
for(var i=0;i<str.length;i++){
	var char = str.charAt(i);
	if( obj[char] ){
		obj[char]++;
	}else{
		obj[char] = 1;
	}
}
console.log( obj );
//统计出来最大值
var max = 0;
for( var key in obj ){
	if( max < obj[key] ){
		max = obj[key];
	}
}
//拿最大值去对比
for( var key in obj ){
	if( obj[key] == max ){
		console.log('最多的字符是'+key);
		console.log('出现的次数是'+max);
	}
}
```



面试题：new操作符具体做了什么

```
1. 创建一个空对象
2. 将空对象的原型，指向构造函数的原型
3. 将空对象作为构造函数的上下文（改变 this 指向）
4. 对构造函数有返回值的处理判断
	 若返回值是基本数据类型，则忽略返回值；若返回值是引用数据类型（对象），则返回值替代实例对象，成为new表示式的结果
```



面试题：闭包

```
1. 定义：一个内层函数连接创建它的外层函数的作用域，把自由变量从外层作用域中封闭、绑定到自身
2. 优点：
	 2.1 内部函数可以访问到外部函数的局部变量
	 2.2 闭包可以解决异步逻辑中变量共享失败的问题
3. 缺点：
	 3.1 变量会驻留在内存中，造成内存损耗问题。
	   	 解决：把闭包的函数设置为null
	 3.2 内存泄漏【ie浏览器】 ==> 可说可不说，如果说一定要提到ie
```



面试题：原型链

```
1. 原型可以解决什么问题
		对象共享属性和共享方法
2. 谁有原型
		函数拥有：prototype
		对象拥有：__proto__
3. 对象查找属性或者方法的顺序
		对象obj本身 ==> obj.__proto__(== obj.getProtoTypeOf == obj构造函数.prototype) ==> 原型链向上查找 ==> Object.prototype(== obj构造函数.prototype.__proto__)
4. 原型链
	4.1 是什么？：就是把原型串联起来
	4.2 原型链的最顶端是null
```



面试题： JS继承有哪些方式

```
1. ES6 extends
2. 原型链继承
3. 构造函数继承
```



面试题：说一下call、apply、bind区别

```
共同点：改变this指向，同时调用前缀函数，三个方法第一个参数都是要this指向要修改成的对象
语法：函数.call()  ... 

区别：
1. call apply 可以立即执行。bind 不会立即执行，因为 bind 返回的是一个函数，需要加 () 执行调用
2. call bind 其他参数是要传入的参数，可以有多个；apply只有一个其他参数，是要传入的参数数组
```



面试题：sort背后原理是什么？

```
V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。

之前的版本是：插入排序和快排，现在是冒泡

原理实现链接：https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js

***710行代码开始***
```



面试题：深拷贝和浅拷贝

```
1. 浅拷贝：复制地址 -> 更改原来的或者复制得到的会同步修改
				方法：Object.assign(obj1, obj2, ...)
2. 深拷贝：复制真正的值 -> 本身和复制体相互独立，修改只针对个体，不同步
				方法：
					1. JSON.parse(JSON.stringify(obj))，将对象转换成JSON字符串再解析，问题：忽略对象中的函数方法
					2. 递归实现，可以拷贝所有内容
					3. structuredClone(obj)，问题：当obj中有function直接报错
```



面试题：localstorage、sessionstorage、cookie的区别

```
共同点：在客户端存放数据

区别：
1. 数据存放有效期：
		localStorage：本地存储，持久化存储，除非手动清除，否则永久保留
		sessionStorage：会话存储，刷新页面不丢失数据，关闭丢失数据
```

