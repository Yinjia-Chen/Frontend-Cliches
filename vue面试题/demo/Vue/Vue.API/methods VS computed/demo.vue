<template>
  <div>
    <h1>Vue Computed 和 Methods 示例</h1>
    <p>原始值：{{ number }}</p>
    <p>使用 computed：{{ computedDouble }}</p>
    <p>使用 methods：{{ methodsDouble() }}</p>
    <button @click="increment">增加数字</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1
    };
  },
  computed: {
    // 有缓存机制
    computedDouble() {
      console.log("computedDouble 被调用");
      return this.number * 2;
    }
  },
  methods: {
    // 无缓存机制
    methodsDouble() {
      console.log("methodsDouble 被调用");
      return this.number * 2;
    },
    increment() {
      this.number++;
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
}
</style>