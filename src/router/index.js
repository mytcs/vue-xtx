
import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/index.vue"
import Layout from "@/views/Layout/index.vue"
import Home from "@/views/home/index.vue"
import Category from "@/views/category/index.vue"
import subCategory from "@/views/subcategory/index.vue"
import Detail from "@/views/Detail/index.vue"
import cartList from "@/views/cartList/index.vue"
import CheckOut from "@/views/CheckOut/index.vue"
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
          path: "category/:id",
          component: Category,
        },
        {
          path: "category/sub/:id",
          component: subCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "/cartlist",
          component: cartList,
        },
        {
          path: "/checkout",
          component: CheckOut,
        },

      ]


    },

    {
      path: "/login",
      component: Login
    },


  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
