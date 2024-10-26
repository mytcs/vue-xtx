
import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/index.vue"
import Layout from "@/views/Layout/index.vue"
import Home from "@/views/home/index.vue"
import Category from "@/views/category/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      // 二级路由
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "category",
          component: Category,
        }
      ]


    },

    {
      path: "/login",
      component: Login
    }

  ]
})

export default router
