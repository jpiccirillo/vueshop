import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import ProductList from '@/components/ProductList'
import ProductEdit from '@/components/ProductEdit'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: { name: 'adminProduct' },
      component: Admin,
      children: [
        {
          path: '/admin/product',
          name: 'adminProduct',
          component: ProductList,
        },
        {
          path: '/admin/product/:id',
          name: 'adminProductEdit',
          component: ProductEdit,
        },
      ],
    },
  ],
})
