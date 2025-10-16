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

```
1. createApp() ==》 创建一个应用实例。
	说明：等于Vue2的==》new Vue()
	使用场景：写插件(封装全局组件会使用)
2. provide/inject ==》依赖注入
	说明：其实就是传值
	使用场景：某一个父组件传值 到后代组件，如果层级过多传递麻烦，所以使用
	缺点：不好维护和查询数据来源
3. directive
	说明：自定义指令
	场景：后台管理系统中的按钮权限控制（ 一个用户拥有某些权限，但是只能查看和修改，不能删除）
4. mixin
	说明：1.全局混入 2. 局部
	场景：可以添加生命周期，我在小程序的分享功能会用到
	缺点：不好维护和查询数据来源
5. app.config.globalProperties
	说明：获取vue这个全局对象的属性和方法
	场景：自己封装插件的时候需要把方法添加到对象中
6. nextTick
	说明：等待下一次 DOM 更新刷新的工具方法 ：nextTick返回一个Pormise，回调函数是放在Promise中的，所以是异步执行的
	场景：就是把dom要更新，那么vue是数据驱动dom，所以数据的赋值就要在nextTick进行
7. computed
	说明：计算属性
	场景：有缓存
8. reactive、ref
	说明：来定义数据的和vue2的data类似
9. watch
	说明：监听（Vue3不需要深度监听）
10. markRaw()
	说明：不被new Proxy代理，说白了就是静态的数据
11. defineProps() 
	说明：父组件传递的值，子组件使用setup的形式，需要用defineProps接收
12. defineEmits()
	当前组件使用setup形式，自定义事件需要使用defineEmits
13. slot
	说明：分为 1. 匿名 2. 具名 3. 作用域
	场景：后台管理系统，左侧是固定菜单，右侧是不固定内容，那么右侧就是slot
```

请介绍一下vue3常的响应式数据类型

请介绍一下teleport组件及其使用场景

