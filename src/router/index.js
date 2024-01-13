import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/front/LoginView.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'about',
      component: () => import('../components/admin/layout/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'products',
          component: () => import('../views/admin/ProductsView.vue')
        }
      ]
    },
    {
      // 輸入亂碼網址時重新導向到首頁
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
});

export default router;
