import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/pages/Home.vue'
import Reg from '../../src/pages/Login_Reg/Reg.vue'
import Login from "../../src/pages/Login_Reg/Login.vue";
import NotFound from "../pages/404.vue";
import Awards from "../pages/Awards.vue";
import Events from "../pages/Event.vue";
import Page from "@/components/NewsPage/Page.vue";

const router = createRouter({

  history:createWebHistory(),
  routes: [
    {
      path:'/LandigVue/',
      name:'Home',
      component:Home ,
    },
    {
      path: '/LandigVue/Reg',
      name: 'Register',
      component: Reg
    },
    {
      path:'/LandigVue/Login',
      name:"Login",
      component:Login
    },
    {
      path: "/LandigVue/Events",
      name:"Events",
      component:Events
    },
    {
      path:'/LandigVue/Awar',
      name:"Awards",
      component:Awards
    },
    {
      path: "/Page/:id",
      component: Page,
    },
    {
      path: "/LandigVue/:pathMatch(.*)*",
      name:'NotFound',
      component:NotFound,
    },
  ]
})

export default router
