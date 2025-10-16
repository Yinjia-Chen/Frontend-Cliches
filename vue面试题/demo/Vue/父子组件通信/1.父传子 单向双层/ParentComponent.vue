<template>

  <div>
    父组件
  <!-- 3.使用子组件并绑定数据 -->
  <ChildComponent :data = 'parentData'></ChildComponent>
  </div>

</template>

<script lang="ts" setup>
import { ref } from "vue";
// 1.引入子组件
import ChildComponent from './ChildComponent.vue'; 

// 2.要传输给子组件的数据
const parentData = ref({
  name: 'Kya',
  code: 23050714
})
</script>

<style scoped>

</style>