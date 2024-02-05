import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Posts from '@/pages/Posts.vue'
import About from '@/pages/About.vue'

// const { createRouter, createWebHistory, createWebHashHistory } = VueRouter

const routes = [
  { path: '/', component: Main },
  { path: '/posts', component: Posts },
  { path: '/about', component: About }
];

const router = createRouter({
  // 4. Предоставьте реализацию history для использования. Для простоты мы используем hash.
  history: createWebHistory(),
  routes, // сокращение от `routes: routes`
});

export default router;