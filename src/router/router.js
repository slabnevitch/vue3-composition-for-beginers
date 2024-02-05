import Main from '@/pages/Main'

const routes = [
  { path: '/', component: Main }
  // { path: '/about', component: About },
];

const router = VueRouter.createRouter({
  // 4. Предоставьте реализацию history для использования. Для простоты мы используем hash.
  history: VueRouter.createWebHashHistory(),
  routes, // сокращение от `routes: routes`
});

export default router;