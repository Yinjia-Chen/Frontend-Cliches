<template>
  <div>
    子组件
    <!-- 6.展示数据 -->
    <p>{{ data.name }}</p>
    <p>{{ data.code }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

// 4.接口类型规定接受数据类型
interface dataFromParent {
  name: String;
  code: number;
}

// 5.defineProps接收数据,同时用接口类型规定数据类型
const props = defineProps<{data:dataFromParent}>()
</script>

<style scoped>

</style>