import { createRouter, createWebHistory } from 'vue-router'
import BookView from '../views/BookView.vue'
import AdminView from '../views/AdminView.vue'
import UserLoginView from '../views/UserLoginView.vue';
import ApplicantReceivedView from '@/views/ApplicantReceivedView.vue';
import MainPageComponent from '@/components/mainPage/MainPageComponent.vue';
import ChangeGuestStatusView from '@/views/ChangeGuestStatusView.vue';
import RegistrationView from '@/views/RegistrationView.vue';
import DashboardView from '@/views/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPageComponent,
      meta: {
        title: 'Üdvözöljük!'
      },
    },
    {
      path: '/books',
      name: 'books',
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
    {
      path: '/changeGuestStatus',
      name: 'changeGuestStatus',
      component: ChangeGuestStatusView,
      meta: {
        title: 'Köszönjük a visszaigazolást!'
      },
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
      meta: {
        title: 'Regisztráció'
      },
    },
    {
      path: '/dashboard',
      name: 'dashboardView',
      component: DashboardView,
      meta: {
        title: 'Jelentkezéseim'
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
