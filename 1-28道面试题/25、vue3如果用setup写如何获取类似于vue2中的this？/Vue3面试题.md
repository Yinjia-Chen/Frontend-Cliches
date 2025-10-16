vue2和vue3区别？

```
1. Vue2 和 Vue3 双向绑定 方法不同

	Vue2 : Object.defineProperty()
			
			***后添加的属性是劫持不到的
		
	Vue3 : new Proxy()
	
			***即使后添加的也可以劫持到
			***还不需要循环

3. $set在vue3中没有，因为new Proxy不需要

4. 关于写法

	vue2是选项式API
	vue3可以向下兼容（选项式API），也可以组合式api或Setup语法糖形式
	
5. v-if和v-for优先级不同了

6. $ref和$children也不同

7. 如果大家还知道其他api不同点，随便说说就可以了

```

vue3如果用setup写怎么组织代码？

```
说明：hooks（就是函数式），主要让功能模块细分（提升项目的维护性）

		解决问题：<script setup>
							//代码==》比较乱
						</script>
面试题：你们vue3写代码的方式 ==〉setup形式

		解决：hooks

```

vue3如果用setup写如何获取类似于vue2中的this？

```
import {  getCurrentInstance } from 'vue'
let app = getCurrentInstance();
console.log( app.appContext.app.config.globalProperties.$loading )
```

vue3常用api有哪些？

请介绍一下vue3常的响应式数据类型

请介绍一下teleport组件及其使用场景

