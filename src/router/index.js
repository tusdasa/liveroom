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
    path: '/room',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {

  let profile = getProfile()

  let islogin = profile != null;

  console.log(profile);

  if (islogin){
    // 已经登录
    if (to.path === "/register" || to.path === "/login"){
      next("/");
    }else {
      next();
    }
  }else {
    // 未登录
    if (to.path === "/login" || to.path === "/register"){
      next();
    }else {
      next("/login");
    }
  }
})


export default router
