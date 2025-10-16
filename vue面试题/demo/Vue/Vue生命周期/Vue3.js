import { createApp, onMounted, onUpdated, onUnmounted } from 'vue';

// Vue 3 生命周期原理示例

const App = {
  setup() {
    // Vue 3 中的生命周期钩子
    onMounted(() => {
      console.log('组件已挂载'); // 组件挂载完成时触发
    });

    onUpdated(() => {
      console.log('组件已更新'); // 组件更新完成时触发
    });

    onUnmounted(() => {
      console.log('组件已卸载'); // 组件卸载时触发
    });

    return {
      message: 'Hello Vue 3!' // 定义组件的数据
    };
  },
  template: `<div>{{ message }}</div>` // 模板部分，渲染 message 数据
};

// 创建应用实例并挂载到页面上的 #app 元素
createApp(App).mount('#app');