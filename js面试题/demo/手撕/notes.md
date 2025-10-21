# 手撕 demo 相关笔记

## 1. instanceof

1.1 原型链相关知识：

1. 构造函数构造的实例上有 `__proto__` 属性，指向该实例的原型 `arr.__proto__`
2. 构造函数上有 `prototype` 属性，指向该构造函数的原型 `Array.prototype`
3. `arr.__proto__ === Array.prototype === arr/Array的原型对象 !== Object`
4. arr/Array的原型对象是 Object 构造出来的
5. 整条链：`arr => arr.__proto__ => Object.prototype => null`
6. `Array instanceof Object === true`
