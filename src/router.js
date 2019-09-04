import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//navigation
import blogpost from './views/blogpost.vue'

import blogJSON from './data/blog_md.json'

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
      component: ()=> import('./views/favourites.vue')
    },
    {
      path:'/blogs',
      name:'blogs',
      component: () => import('./views/blogs.vue')
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
      path:'/blogpost/:cate/:blogid',
      name:'blogarticle',
      component:blogpost,
      props:true,
      children: (
        blogRouteArr.map((entry)=>{
          return ({
            path:`/blogpost/${entry.category}/article-${entry.id}`,
            component: ()=> import(`./blog_md/${entry.id}.md`)
          })
        })
        // {
        //   path:'',
        //   components: {
        //     default: ()=> import(`./blog_md/250519-first-time-using-xcode-running-debugging.md`)
        //   }
        // }
      ),
      beforeEnter:(to,from,next)=>{
        console.log(to);
        next();
      }
    },
    {
      path:'/portfolio',
      name:'portfolio',
      component:() => import('./views/portfolio.vue')
    }
  ]
})
