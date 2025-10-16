<script>  
import Son from '../components/Son.vue'
import { mapState,mapGetters } from 'vuex' 
export default {
  name: 'Father',
  components: {
    Son
  },
  methods: {
    btn() {
      this.$store.state.str = '父组件修改了数据';
      // this.$store.state.changedStr = '父组件修改了数据'; // 报错 getters不能被修改
    }
  },
  computed: {
    ...mapState(['str']), // 展开mapState获取的对象，并映射到computed中
    ...mapGetters(['changedStr']) // 展开mapGetters获取的对象，并映射到computed中
  }
}
</script>

<template>
  <div>
    <h2>父组件</h2>
    {{ $store.state.str }}
    {{ str }}
    <button @click="btn">修改仓库数据</button>
    {{ $store.state.changedStr }}
    {{ $store.state.user.token }}
    <hr>
    <Son></Son>
  </div>
</template>

<style></style>