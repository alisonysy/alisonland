import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//navigation
import favourites from './views/favourites.vue'
import blogs from './views/blogs.vue'
import blogpost from './views/blogpost.vue'

import blogJSON from './blog_md.json'

Vue.use(Router)

const blogRouteArr = (function(){
  let blogCate = Object.keys(blogJSON);
  let arr = [];
  for(let i=0;i<blogCate.length;i++){
    let cate = blogCate[i] 
    let cateArr = blogJSON[cate];
    cateArr.map((item)=>{
      let temp = {};
      temp.category = cate;
      Object.assign(temp,item);
      arr.push(temp);
    })
  }
  return arr
})(blogJSON)


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
    ...blogRouteArr.map((entry)=>{
      return ({
        path:`/blogs/:cate/:blogid`,
        name:entry.id,
        component:()=> import(`./blogposts/${entry.id}.vue`)
      })
    }),
    {
      path:'/blogpost/:cate/:blogid',
      name:'blogarticle',
      component:blogpost,
      props:true,
      children: [
        // ...blogRouteArr.map((entry)=>{
        //   return ({
        //     path:entry.id,
        //     name:entry.id,
        //     component: ()=> import(`./blog_md/${entry.id}.md`)
        //   })
        // })
        {
          path:'',
          name:':blogid',
          component: ()=> import(`./blog_md/250519-first-time-using-xcode-running-debugging.md`)
        }
      ]
    }
  ]
})
