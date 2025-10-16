<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

// 从 Vuex 获取用户 ID
const userId = computed(() => store.getters.getUserId);

// 监听路由参数变化
watch(
  () => route.params.id,
  (newId) => {
    store.dispatch('updateUserId', newId);
  },
  { immediate: true }
);

const id = route.params.id;
</script>

<template>
  <div>
    <h1>User Page</h1>
    <p>当前用户 ID（从 Vuex 获取）: {{ userId }}</p>
    <router-link :to="{ name: 'UserProfile', params: { id } }">查看资料</router-link>
    <router-link :to="{ name: 'UserPosts', params: { id } }">查看文章</router-link>

    <!-- 子路由出口 -->
    <router-view></router-view>

    <router-link to="/">返回首页</router-link>
  </div>
</template>