import { createRouter, createWebHistory } from 'vue-router'
import BookView from '../views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BookView,
      meta: {
        title: 'Home of Books'
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
