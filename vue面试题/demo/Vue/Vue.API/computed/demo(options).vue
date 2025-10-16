<template>
  <div>
    <h1>Vue 2 可修改的 computed 示例</h1>
    <p>双向绑定的值：{{ computedValue }}</p>
    <input v-model="computedValue" placeholder="修改我试试" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 定义一个基础数据
      baseValue: "初始值"
    };
  },
  computed: {
    // 定义一个可修改的计算属性
    computedValue: {
      get() {
        // 返回 data 中的值
        return this.baseValue;
      },
      set(newValue) {
        // 更新 data 中的值
        this.baseValue = newValue;
      }
    }
  }
};
</script>

<style scoped>
input {
  margin-top: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>