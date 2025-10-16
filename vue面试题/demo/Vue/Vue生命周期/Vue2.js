// Vue2 生命周期原理示例

// Vue2 的生命周期主要分为以下几个阶段：
// 1. 创建阶段 (beforeCreate, created)
// 2. 挂载阶段 (beforeMount, mounted)
// 3. 更新阶段 (beforeUpdate, updated)
// 4. 销毁阶段 (beforeDestroy, destroyed)

class Vue {
  constructor(options) {
    this.$options = options;
    this.initLifecycle();
  }

  initLifecycle() {
    this.callHook('beforeCreate');
    this.initData();
    this.callHook('created');

    if (this.$options.el) {
      this.mount(this.$options.el);
    }
  }

  initData() {
    // 模拟数据初始化
    this.$data = this.$options.data ? this.$options.data() : {};
  }

  mount(el) {
    this.$el = document.querySelector(el);
    this.callHook('beforeMount');
    this.update(); // 模拟挂载
    this.callHook('mounted');
  }

  update() {
    this.callHook('beforeUpdate');
    // 模拟 DOM 更新
    this.$el.innerHTML = this.render();
    this.callHook('updated');
  }

  render() {
    // 模拟渲染函数
    return this.$options.render ? this.$options.render() : '';
  }

  destroy() {
    this.callHook('beforeDestroy');
    // 模拟销毁
    this.$el = null;
    this.callHook('destroyed');
  }

  callHook(hook) {
    const handler = this.$options[hook];
    if (handler) {
      handler.call(this); // 显式绑定this
    }
  }
}

// 使用示例
const vm = new Vue({
  data() {
    return {
      message: 'Hello Vue2!',
    };
  },
  render() {
    return `<p>${this.$data.message}</p>`;
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  el: '#app',
});

// 模拟更新
setTimeout(() => {
  vm.$data.message = 'Updated Vue2!';
  vm.update();
}, 2000);

// 模拟销毁
setTimeout(() => {
  vm.destroy();
}, 4000);