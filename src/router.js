import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//navigation
import favourites from './views/favourites.vue'
import blogs from './views/blogs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home,
    },
    {
      path: '/favsite',
      name: 'favourites',
      component: favourites
    },
    {
      path:'/blogs',
      name:'blogs',
      component: blogs
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/blogs/xcode-01',
      name:'xcode-01',
      component: () => import('./blogposts/2505190001.vue')
    }
  ]
})
