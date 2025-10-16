<template>
  <div>
    <h1>Vue Watch 示例</h1>
    <p>姓名：{{ obj.name }}</p>
    <p>年龄：{{ obj.age }}</p>
    <button @click="updateName">修改姓名</button>
    <button @click="updateAge">修改年龄</button>
    <button @click="replaceObj">替换对象</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: 'John',
        age: 30
      }
    };
  },
  watch: {
    obj: {
      handler(newVal, oldVal) {
        console.log('obj changed:', newVal, oldVal);
      },
      immediate: true, // 初始化时立即执行 handler
      deep: true // 深度监听，监听对象属性的变化
    }
  },
  methods: {
    updateName() {
      this.obj.name = 'Alice'; // 修改对象属性，触发 handler
    },
    updateAge() {
      this.obj.age = 25; // 修改对象属性，触发 handler
    },
    replaceObj() {
      this.obj = { name: 'Bob', age: 40 }; // 替换整个对象，触发 handler
    }
  }
};
</script>

<style scoped>
button {
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 14px;
}
</style>