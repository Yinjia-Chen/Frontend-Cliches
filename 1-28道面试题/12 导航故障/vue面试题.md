# 一、Vue2篇

### 1. 关于生命周期

##### 	1.1 生命周期有哪些？发送请求在created还是mounted？

```
请求接口测试：https://fcm.52kfw.cn/index.php?_mall_id=1&r=api/default/district
```

Vue2.x系统自带有8个

```
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed
```

发送请求在created还是mounted？

```
这个问题具体要看项目和业务的情况了，因为组件的加载顺序是，父组件引入了子组件，那么先执行父的前3个生命周期，再执行子的前4个生命周期，那么如果我们的业务是父组件引入子组件，并且优先加载子组件的数据，那么在父组件中当前的请求要房mounted中，如果当前组件没有依赖关系那么放在哪个生命周期中请求都是可以的。
```

##### 	1.2 为什么发送请求不在beforeCreate里？beforeCreate和created有什么区别？

为什么发送请求不在beforeCreate里？

```
因为：如果请求是在methods封装好了，在beforeCreate调用的时候，beforeCreate阶段是拿不到methods里面的方法的（会报错了）。
```

beforeCreate和created有什么区别？

```
beforeCreate没有$data
created中有$data

created是可以拿到methods的方法的
beforeCreate拿不到methods的方法
```

##### 	1.3 在created中如何获取dom

```
1. 只要写异步代码，获取dom是在异步中获取的，就可以了。
	例如：setTimeout、请求、Promise.xxx()等等...
2. 使用vue系统内置的this.$nextTick
```

##### 	1.4 一旦进入组件会执行哪些生命周期？

```
beforeCreate
created
beforeMount
mounted
```

##### 	1.5 第二次或者第N次进去组件会执行哪些生命周期？

如果当前组件加入了keep-alive，只会执行一个生命周期

```
activated
```

如果没有加入keep-alive

```
beforeCreate
created
beforeMount
mounted
```

##### 	1.6 父组件引入子组件，那么生命周期执行的顺序是？

```
父：beforeCreate、created、beforeMount
子：beforeCreate、created、beforeMount、mounted
...
父：mounted
```

##### 	1.7 加入keep-alive会执行哪些生命周期？

如果使用了keep-alive组件，当前的组件会额外增加2个生命周期（系统8 + 2 ）

```
activated
deactivated
```

如果当前组件加入了keep-alive第一次进入这个组件会执行5个生命周期

```
beforeCreate
created
beforeMount
mounted
activated
```

##### 1.8 你在什么情况下用过哪些生命周期？说一说生命周期使用场景

```
created    ===> 单组件请求
mounted    ===> 同步可以获取dom，如果先子组件请求后父组件请求
activated  ===> 判断id是否相等，如果不相同发起请求
destroyed  ===> 关闭页面记录视频播放的时间,初始化的时候从上一次的历史开始播放
```

### 2. 关于组件

##### 	2.1 组件传值（通信）的方式

```
父传后代 ( 后代拿到了父的数据 )
1. 父组件引入子组件，绑定数据
	 <List :str1='str1'></List>
	子组件通过props来接收
	props:{
		str1:{
			type:String,
			default:''
		}
	}
	***这种方式父传子很方便，但是父传给孙子辈分的组件就很麻烦（父=》子=》孙）
	这种方式：子不能直接修改父组件的数据

2. 子组件直接使用父组件的数据
	子组件通过：this.$parent.xxx使用父组件的数据
	这种方式：子可以直接修改父组件的数据
	
3. 依赖注入
	优势：父组件可以直接向某个后代组件传值(不让一级一级的传递)
```

```
后代传父 （父拿到了后代的数据）
1. 子组件传值给父组件
	子组件定义自定义事件 this.$emit
2. 父组件直接拿到子组件的数据
	<List ref='child'></List>
	this.$refs.child
```

```
平辈之间的传值 ( 兄弟可以拿到数据 ) 

通过新建bus.js文件来做
```

##### 	2.2 父组件如何直接修改子组件的值

```
<List ref='child'></List>
this.$refs.child.xxx = 'yyyy';
```

##### 	2.3 子组件如何直接修改父组件的值

```
子组件中可以使用：this.$parent.xxx去修改
```

##### 	2.4 如何找到父组件

```
this.$parent
```

##### 	2.5 如何找到根组件

```
this.$root
```

##### 	2.6 keep-alive

```
keep-alive是什么  ： 缓存当前组件
```

##### 	2.7 slot/插槽

```
匿名插槽 ：插槽没有名字
```

```
具名插槽 ：插槽有名字
```

```
作用域插槽 ： 传值
```

##### 2.8 provide/inject

```
provide/inject ===> 依赖注入
```

##### 	2.9 如何封装组件

```
组件一定要难点，涉及的知识点：slot、组件通信...
```

### 3. 关于Vuex

##### 	3.1 Vuex有哪些属性

```
state ==> 全局共享属性
getters ==> 针对于state数据进行二次计算
mutatioins ==> 存放同步方法的
actions    ==> 存放异步方法的，并且是来提交mutations
modules    ==> 把vuex再次进行模块之间的划分
```

##### 	3.2 Vuex使用state值

```
this.$store.state.xxx
```

```
辅助函数：mapState
```

以上俩种方式都可以拿到state的值，那么区别是什么？

```
使用this.$store.state.xxx是可以直接修改vuex的state数据的

使用辅助函数的形式，是不可以修改的
```

##### 	3.3 Vuex的getters值修改

面试官可能会这样问：组件使用了getters中的内容，组件使用采用v-model的形式会发生什么？

```
getters是不可以修改的
```

##### 	3.4 Vuex的mutations和actions区别

```
相同点：mutations和actions都是来存放全局方法的，这个全局方法return的值拿不到
```

```
区别：
	mutations ==》 同步
	actions   ==》 返回的是一个Promise对象，他可以执行相关异步操作
	
mutations是来修改state的值的，actions的作用是来提交mutations
```

##### 	3.5 Vuex持久化存储  ：在页面使用了state值：1，然后把1修改成2，然后刷新页面又回到了1为什么？ 

```
Vuex本身不是持久化存储的数据。Vuex是一个状态管理仓库（state：全局属性）==》就是存放全局属性的地方。
```

```
实现持久化存储：1. 自己写localStorage  2. 使用vuex-persistedstate插件
```

```
插件使用方式：https://www.xuexiluxian.cn/blog/detail/dae4073b07144d3c9abb3e2cc8495922
```

### 4. 关于路由

##### 	4.1 路由的模式和区别

```
路由的模式：history、hash
```

```
区别：
1. 关于找不到当前页面发送请求的问题
	history会给后端发送一次请求而hash不会
2. 关于项目打包前端自测问题
	hash是可以看到内容的
	history默认情况是看不到内容的
3. 关于表象不同
	hash:#
	history:/
```

##### 	4.2 子路由和动态路由

##### 	4.3 路由传值

##### 	4.4 导航故障

```
官网说明：https://v3.router.vuejs.org/zh/guide/advanced/navigation-failures.html#%E6%A3%80%E6%B5%8B%E5%AF%BC%E8%88%AA%E6%95%85%E9%9A%9C
```

解决：

```
import VueRouter from 'vue-router'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch(error => error)
}
```

##### 	4.5 $router和$route区别

```
$router不仅包含当前路由还包含整个路由的属性和方法

$route包含当前路由对象
```

##### 	4.6 导航守卫

### 5. 关于API

##### 	5.1 $set

##### 	5.2 $nextTick

##### 	5.3 $refs

```
来获取dom的
```

##### 	5.4 $el

##### 	5.5 $data

##### 	5.6 $children

##### 	5.7 $parent

```
找到当前组件的父组件，如果找不到返回自身
```

##### 	5.8 $root

```
找到根组件
```

##### 	5.9 data定义数据

##### 	5.10 computed计算属性

##### 	5.11 watch

##### 	5.12 methods和computed区别

### 6. 关于指令

##### 	6.1 如何自定义指令

##### 	6.2 vue单项绑定

##### 	6.3 v-if和v-for优先级

### 7. 关于原理

##### 	7.1 $nextTick原理

##### 	7.2 双向绑定原理

### 8. axios二次封装

