import { createRouter, createWebHistory } from 'vue-router'
import BookView from '../views/BookView.vue'
import AdminView from '../views/AdminView.vue'
import UserLoginView from '../views/UserLoginView.vue'
import ApplicantReceivedView from '@/views/ApplicantReceivedView.vue'
import ChangeGuestStatusView from '@/views/ChangeGuestStatusView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AboutUS from '@/components/aboutus/aboutUS.vue'
import AccountView from '@/views/AccountView.vue'
import ModifyBooksView from '@/views/ModifyBooksView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import { useLoggedInUserStore } from '@/stores/userStore'
import MainPageView from '@/views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPageView,
      meta: {
        title: 'Üdvözöljük!'
      }
    },
    {
      path: '/books',
      name: 'books',
      component: BookView,
      meta: {
        title: 'Könyvek'
      }
    },
    {
      path: '/admin',
      name: 'adminView',
      component: AdminView,
      beforeEnter: (to, from, next) => {
        const isAdminLoggedIn = useLoggedInUserStore().getLoggedInUser.status
        if(isAdminLoggedIn == 3){
          next()
        }
        else{
          next('/login')
        }
      },
      meta: {
        title: 'Admin felület'
      }
    },
    {
      path: '/login',
      name: 'loginSite',
      component: UserLoginView,
      meta: {
        title: 'Bejelentkezési felület'
      }
    },
    {
      path: '/applicantReceived',
      name: 'applicantReceived',
      component: ApplicantReceivedView,
      meta: {
        title: 'Köszönjük a jelentkezését!'
      }
    },
    {
      path: '/changeGuestStatus',
      name: 'changeGuestStatus',
      component: ChangeGuestStatusView,
      meta: {
        title: 'Köszönjük a visszaigazolást!'
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
      meta: {
        title: 'Regisztráció'
      }
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUS,
      meta: {
        title: 'Rólunk'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboardView',
      component: DashboardView,
      beforeEnter: (to, from, next) => {
        const isUserOrAdminLoggedIn = useLoggedInUserStore().getLoggedInUser.status
        if(isUserOrAdminLoggedIn == 3 || isUserOrAdminLoggedIn == 2){
          next()
        }
        else{
          next('/login')
        }
      },
      meta: {
        title: 'Jelentkezéseim'
      }
    },
    {
      path: '/account',
      name: 'accountView',
      component: AccountView,
      beforeEnter: (to, from, next) => {
        const isUserOrAdminLoggedIn = useLoggedInUserStore().getLoggedInUser.status
        if(isUserOrAdminLoggedIn == 3 || isUserOrAdminLoggedIn == 2){
          next()
        }
        else{
          next('/login')
        }
      },
      meta: {
        title: 'Fiókom'
      }
    },
    {
      path: '/modifyBooks',
      name: 'modifyBooks',
      component: ModifyBooksView,
      beforeEnter: (to, from, next) => {
        const isAdminLoggedIn = useLoggedInUserStore().getLoggedInUser.status
        if(isAdminLoggedIn == 3){
          next()
        }
        else{
          next('/login')
        }
      },
      meta: {
        title: 'Könyvek módosítása'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: PageNotFoundView,
      meta: {
        title: 'Oldal nem található'
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
  let modalBackground = document.querySelector('.modal-backdrop')
  if (modalBackground) {
    modalBackground.remove()
  }
  const title = to.meta.title as string | undefined
  document.title = title || 'Default Title'
  next()
})

let navBar = null;

document.addEventListener('click', (event: MouseEvent) => {
  navBar = document.getElementById('navbarNav');
  if (!navBar?.contains(event.target as Node) && navBar?.classList.contains('show')) {
    navBar?.classList.remove('show');
  }
});

router.afterEach(() => {
  navBar = document.getElementById('navbarNav');
  if (navBar?.classList.contains('show')) {
    navBar?.classList.remove('show');
  }
});
export default router
