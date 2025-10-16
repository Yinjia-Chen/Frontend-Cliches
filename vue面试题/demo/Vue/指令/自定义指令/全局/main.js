import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 全局自定义指令
app.directive('demo', {
  mounted(el, binding, vnode) {
    console.log('全局指令 mounted:', el, binding, vnode);
    el.style.color = binding.value || 'blue'; // 设置元素颜色
  }
});

app.mount('#app');