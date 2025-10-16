<script>  
import Son from '../components/Son.vue'
import { mapState,mapMutations,mapActions } from 'vuex' 
export default {
  name: 'Father',
  methods: {
    ...mapMutations(['add']), // 通过 mapMutations 辅助函数映射到组件的计算属性
    ...mapActions(['addAfter5Sec']),
  },
  computed: {
    ...mapState(['counts']), 
  }
}
</script>

<template>
  <div>
    <h2>父组件</h2>
    {{ $store.state.count }}
    {{ count }}
    <button @click="add">++</button>
    <button @click="addAfter5Sec">5秒后++</button>
  </div>
</template>

<style></style>