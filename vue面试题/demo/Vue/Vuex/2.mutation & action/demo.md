mutation 辅助函数
1. 同步操作 store/index.js 写函数
2. 组件 import { mapMutations } from 'vuex'
3. 组件 methods 写 ...mapMutations(['函数名'])
4. 组件 调用 例: <button @click="add">++</button>
5. 不可在mutation中写return, 无效

action 辅助函数
操作同 mutations 1-5

action 一般操作
定时器、promise等异步请求中 commit mutation中的方法