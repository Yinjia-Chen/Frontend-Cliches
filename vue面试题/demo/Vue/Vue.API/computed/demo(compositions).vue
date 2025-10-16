<template>
  <div>
    <h1>Vue 3 可修改的 computed 示例</h1>
    <p>双向绑定的值：{{ computedValue }}</p>
    <input v-model="computedValue" placeholder="修改我试试" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 定义一个基础数据
const baseValue = ref("初始值");

// 定义一个可修改的计算属性
const computedValue = computed({
  get() {
    // 返回 ref 的值
    return baseValue.value;
  },
  set(newValue) {
    // 更新 ref 的值
    baseValue.value = newValue;
  }
});
</script>

<style scoped>
input {
  margin-top: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>