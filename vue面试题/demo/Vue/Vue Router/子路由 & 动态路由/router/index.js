import { createRouter, createWebHistory } from 'vue-router';

// 路由组件
const Home = () => import('../views/Home.vue');
const User = () => import('../views/User.vue');
const UserProfile = () => import('../views/UserProfile.vue'); // 子路由组件
const UserPosts = () => import('../views/UserPosts.vue'); // 子路由组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user/:id', // 动态路由参数
    name: 'User',
    component: User,
    props: true,
    children: [
      {
        path: 'profile', // 子路由路径
        name: 'UserProfile',
        component: UserProfile,
      },
      {
        path: 'posts', // 子路由路径
        name: 'UserPosts',
        component: UserPosts,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;