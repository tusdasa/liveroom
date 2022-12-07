import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getProfile} from '@/utils/profile'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/room/:id',
    name: 'LiveRoom',
    component: () => import('../views/LiveRoom.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/RegisterView')
  },
  {
    path: '/user',
    name: 'UserCentralView',
    component: () => import('../views/UserCentralView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach( (to, from, next) => {

  // console.log(to)
  // console.log(from)
  // //next()
  let profile = getProfile()
  // console.log(profile)
    let islogin = profile != null;
    if (islogin) {
        // 已经登录
        if (to.path === "/register" || to.path === "/login") {
          next("/");
        } else {
          next();
        }
    } else {
        // 未登录
        if (to.path === "/login" || to.path === "/register") {
            next();
        } else {
            next("/login");
        }
    }

})


export default router
