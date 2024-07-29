import { createRouter, createWebHistory } from 'vue-router'
import BookView from '../views/BookView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bookView',
      component: BookView,
      meta: {
        title: 'Könyvek'
      },
    },
    {
      path: '/admin',
      name: 'adminView',
      component: AdminView,
      meta: {
        title: 'Admin felület'
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title as string | undefined;
  document.title = title || "Default Title";
  next();
});

export default router
