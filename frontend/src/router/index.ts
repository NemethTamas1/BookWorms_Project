import { createRouter, createWebHistory } from 'vue-router'
import BookView from '../views/BookView.vue'
import AdminView from '../views/AdminView.vue'
import UserLoginView from '../views/UserLoginView.vue';
import ApplicantReceivedView from '@/views/ApplicantReceivedView.vue';

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
    {
      path: '/login',
      name: 'loginSite',
      component: UserLoginView,
      meta: {
        title: 'Bejelentkezési felület'
      },
    },
    {
      path: '/applicantReceived',
      name: 'applicantReceived',
      component: ApplicantReceivedView,
      meta: {
        title: 'Köszönjük a jelentkezését!'
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
