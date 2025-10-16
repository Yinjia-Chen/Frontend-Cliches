state
1. this.$store.state.xxx 直接使用仓库数据 并且可直接修改仓库数据
2. 辅助函数：mapState 简化代码 
   computed:{..mapState(['str'])} // 展开mapState获取的对象，并映射到computed中
   随后可以直接在模板中使用 {{ str }}
   不可通过辅助函数修改仓库数据：
      因为 mapState的原理是 computed:{str(){return this.$store.state.str}}
      所以 此处 str 是当前组件的一个函数(计算属性)

getters
1. getters 不能被修改

正常使用 modules 模块数据
1. store/modules/user.js
2. index.js  import user from './modules/user'
3. index.js  modules: { user }
4. views/Father.vue  <template> {{ $store.state.user.token }} </template>

辅助函数 modules 模块数据
前三步同上
4. views/Son.vue <script> import {mapState} from 'vuex' </script>
5. export default {
    computed: {
      ...mapState({
        token: state => state.user.token,
      }),
    }
  }
6. {{ token }}