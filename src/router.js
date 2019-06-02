import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//navigation
import favourites from './views/favourites.vue'
import blogs from './views/blogs.vue'
import blogJSON from './blog_md.json'

Vue.use(Router)

const blogRouteArr = (function(){
  let blogCate = Object.keys(blogJSON);
  let arr = [];
  for(let i=0;i<blogCate.length;i++){
    let temp = {};
    let cate = blogCate[i] 
    let cateArr = blogJSON[cate];
    temp.category = cate;
    cateArr.map((item)=>{
      temp.id=item.id 
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
        path:`/blogs/${entry.category}/${entry.id}`,
        name:entry.id,
        component:()=> import(`./blog_md/${entry.id}.md`)
      })
    })
  ]
})
