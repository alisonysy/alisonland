(function(e){function t(t){for(var n,r,i=t[0],s=t[1],d=t[2],u=0,l=[];u<i.length;u++)r=i[u],c[r]&&l.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"70d7f992","chunk-1e4f150a":"f251988b","chunk-2d0a4079":"183d916c","chunk-2d0a47e1":"8149f285","chunk-2d0af45e":"fa8f2a8f","chunk-2d0b28bd":"4ebbe1fd","chunk-2d0b6e3e":"766613a8","chunk-2d0bddd7":"64ead9b7","chunk-2d0c54f1":"ee41b756","chunk-2d0c8c56":"1df40010","chunk-2d0cf67a":"48a5cdad","chunk-2d0d2baf":"53d4e2b8","chunk-2d0d3682":"c8b645b7","chunk-2d0d6714":"43d44c66","chunk-2d0d72d6":"ad73e66b","chunk-2d0d7aa6":"4ac18128","chunk-2d0e1850":"0c63b073","chunk-2d0e1d58":"ff7107ca","chunk-2d0e1f15":"b16bbcd1","chunk-2d0e28f3":"28a27d8c","chunk-2d0e6302":"7b51ec2b","chunk-2d0e6c0b":"a072bb57","chunk-2d0e9955":"0942befc","chunk-2d2084c9":"aff2ac62","chunk-2d2093be":"41733cef","chunk-2d2100d5":"faf826e2","chunk-2d213106":"3b1d8499","chunk-2d21af7a":"48831fbd","chunk-2d21b0d9":"5e33e0d7","chunk-2d22672a":"5c681c17","chunk-2d22bcc5":"8f09f169","chunk-2d237873":"6d317c58","chunk-d94f5f54":"148c0725","chunk-e0848e94":"f3c0181d"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-1e4f150a":1,"chunk-d94f5f54":1,"chunk-e0848e94":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-1e4f150a":"79670c5c","chunk-2d0a4079":"31d6cfe0","chunk-2d0a47e1":"31d6cfe0","chunk-2d0af45e":"31d6cfe0","chunk-2d0b28bd":"31d6cfe0","chunk-2d0b6e3e":"31d6cfe0","chunk-2d0bddd7":"31d6cfe0","chunk-2d0c54f1":"31d6cfe0","chunk-2d0c8c56":"31d6cfe0","chunk-2d0cf67a":"31d6cfe0","chunk-2d0d2baf":"31d6cfe0","chunk-2d0d3682":"31d6cfe0","chunk-2d0d6714":"31d6cfe0","chunk-2d0d72d6":"31d6cfe0","chunk-2d0d7aa6":"31d6cfe0","chunk-2d0e1850":"31d6cfe0","chunk-2d0e1d58":"31d6cfe0","chunk-2d0e1f15":"31d6cfe0","chunk-2d0e28f3":"31d6cfe0","chunk-2d0e6302":"31d6cfe0","chunk-2d0e6c0b":"31d6cfe0","chunk-2d0e9955":"31d6cfe0","chunk-2d2084c9":"31d6cfe0","chunk-2d2093be":"31d6cfe0","chunk-2d2100d5":"31d6cfe0","chunk-2d213106":"31d6cfe0","chunk-2d21af7a":"31d6cfe0","chunk-2d21b0d9":"31d6cfe0","chunk-2d22672a":"31d6cfe0","chunk-2d22bcc5":"31d6cfe0","chunk-2d237873":"31d6cfe0","chunk-d94f5f54":"7b396f55","chunk-e0848e94":"ca5710af"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var d=o[i],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],u=d.getAttribute("data-href");if(u===n||u===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],f.parentNode.removeChild(f),a(o)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,a){n=c[e]=[t,a]});t.push(n[2]=o);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),d=function(t){u.onerror=u.onload=null,clearTimeout(l);var a=c[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,a[1](o)}c[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:u})},12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/alisonland/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"26b4":function(e,t,a){"use strict";var n=a("f8c6"),r=a.n(n);r.a},"2c3b":function(e,t,a){},"356a":function(e,t,a){"use strict";var n=a("4a5e"),r=a.n(n);r.a},"4a5e":function(e,t,a){},"568e":function(e,t,a){e.exports=a.p+"img/home-profile-1-origin.53abe8b3.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("6b54"),a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i={name:"App",components:{home:function(){return Promise.resolve().then(a.bind(null,"bb51"))},VueMarkdown:function(){return Promise.resolve().then(a.t.bind(null,"9ce6",7))}},data:function(){return{}}},s=i,d=(a("034f"),a("2877")),u=Object(d["a"])(s,c,o,!1,null,null,null),l=u.exports,f=a("5176"),p=a.n(f),b=a("a4bb"),h=a.n(b),m=a("8c4f"),g=a("bb51"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{class:[e.postCommonClass,e.postOwnClass]},[a("blogHeader"),a("article",{staticClass:"post"},[a("div",{staticClass:"postHeader"},[a("h2",{staticClass:"postCategory"},[e._v(e._s(e.thisBlog.category))]),a("h1",{staticClass:"postTitle"},[e._v("\n        "+e._s(e.thisBlog.title)+"\n        "),""!==e.thisBlog.subTitle?a("h6",{staticClass:"postSubTitle"},[e._v(e._s(e.thisBlog.subTitle))]):e._e()]),a("div",{staticClass:"postTime"},[a("div",{staticClass:"postCreated"},[e._v(e._s(e.thisBlog.createdAt))])]),a("ul",{staticClass:"postTags"},e._l(e.thisBlog.tag,function(t){return a("li",[e._v(e._s(t))])}),0),a("div",{staticClass:"postAbstract"},[e._v(e._s(e.thisBlog.abstract))])]),a("div",{staticClass:"postBody-wrapper"},[a("div",{staticClass:"postBody markdown-body"},[a("vue-markdown",[e._v(":flushed:")]),a("router-view")],1)])])],1)},k=[],y=a("7618"),A=(a("a481"),a("4917"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"all-header"},[a("div",{staticClass:"headerLeft"},[a("div",{staticClass:"otherLinks dspFlex fs20 whiteFont"},[e._v(e._s(e._f("dateFormat")(e.homeDate)))]),a("div",{staticClass:"nameBg"},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"initialLetter whiteFont fs20"},[e._v("A")])])],1)]),e._m(0)])}),w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"functions headerRight"},[a("div",{staticClass:"filterBy"}),a("div",{staticClass:"sortBy"})])}],j={name:"site-header",computed:{homeDate:function(){return new Date}}},C=j,_=(a("26b4"),Object(d["a"])(C,A,w,!1,null,"019b826c",null)),T=_.exports,x=a("645a"),O=a("9ce6"),S=a.n(O),E=a("1487"),N=a.n(E),B=a("4dd1"),J=a.n(B),M=a("6113"),P=a.n(M);a("6e3f");N.a.registerLanguage("javascript",J.a),N.a.registerLanguage("scss",P.a);var L={name:"blogarticle",props:[],data:function(){return{postCommonClass:"post-wrapper",thisBlog:{}}},computed:{blogId:function(){return-1!==window.location.href.indexOf("/article")?window.location.href.match(/article-([\w-]+)$/)[1]:this.$route.params.blogid},category:function(){return-1!==window.location.href.indexOf("/article")?window.location.href.match(/blogpost\/([\w\d-]+)\//)[1]:this.$route.params.cate},postOwnClass:function(){return this.blogId}},components:{blogHeader:T,VueMarkdown:S.a},methods:{passParams:function(){var e=window.location.href;if(-1!==e.indexOf("/article")){var t=e.match(/blogpost\/([\w\d-]+)\//)[1],a=e.match(/article-([\w\d-]+)$/)[1];this.$router.replace("/blogpost/".concat(t,"/article-").concat(a))}else this.$router.replace("/blogpost/".concat(this.$route.params.cate,"/article-").concat(this.$route.params.blogid))},fetchBlogCont:function(){var e=this,t="object"===Object(y["a"])(x)?x:JSON.parse(x);t[this.category].map(function(t){t.id===e.blogId&&(p()(e.thisBlog,{},t),e.thisBlog["category"]=e.category)}),console.log(this.thisBlog)}},created:function(){this.fetchBlogCont()},beforeCreate:function(){},beforeMount:function(){this.passParams()}},F=L,D=(a("6c8f"),Object(d["a"])(F,v,k,!1,null,null,null)),I=D.exports;n["a"].use(m["a"]);var R=function(){for(var e=h()(x),t=[],a=function(a){var n=e[a],r=x[n];r.map(function(e){var a={};a.category=n,p()(a,e),t.push(a)})},n=0;n<e.length;n++)a(n);return t}(),$=new m["a"]({routes:[{path:"/",name:"home",component:g["default"]},{path:"/favsite",name:"favourites",component:function(){return a.e("chunk-d94f5f54").then(a.bind(null,"e35b"))}},{path:"/blogs",name:"blogs",component:function(){return a.e("chunk-1e4f150a").then(a.bind(null,"f1b6"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/blogpost/:cate/:blogid",name:"blogarticle",component:I,props:!0,children:R.map(function(e){return{path:"/blogpost/".concat(e.category,"/article-").concat(e.id),component:function(){return a("7532")("./".concat(e.id,".md"))}}}),beforeEnter:function(e,t,a){console.log(e),a()}},{path:"/portfolio",name:"portfolio",component:function(){return a.e("chunk-e0848e94").then(a.bind(null,"2df5"))}}]}),z=a("2f62");n["a"].use(z["a"]);var H=new z["a"].Store({state:{},mutations:{},actions:{}}),U=(a("d5e8"),a("d1e7"),a("1157")),q=a.n(U);n["a"].config.productionTip=!1,n["a"].prototype.$=q.a,window.$=q.a,n["a"].filter("dateFormat",function(e){var t=Object.prototype.toString.call(e);if("[object Date]"===t){var a=e.getDate(),n=(e.getMonth()+1).toString();switch(n){case"1":n="January";break;case"2":n="February";break;case"3":n="March";break;case"4":n="April";break;case"5":n="May";break;case"6":n="June";break;case"7":n="July";break;case"8":n="August";break;case"9":n="September";break;case"10":n="October";break;case"11":n="November";break;case"12":n="December";break}return a+" "+n}}),new n["a"]({router:$,store:H,render:function(e){return e(l)}}).$mount("#app")},"5f20":function(e,t,a){e.exports=a.p+"img/home-profile-2-origin.858ebf28.png"},"645a":function(e){e.exports={"CSS-HTML":[{id:"260519-visual-formatting-model",createdAt:"May 26 2019",title:"Visual Formatting Model 视觉格式化模型",subTitle:"How Each Element And Its Correspondent Box(es) Are Generated?",abstract:"CSS的盒模型(box model)把元素当成一个个长方形盒子渲染，每个盒子包括内容(content)、内边距(padding)、边框(border)、外边距(margin)4个部分。而当一个页面有很多这样的盒子时，这些盒子的具体位置和最终渲染的布局则由视觉格式化模型(visual formatting model)决定。",updatedAt:"",tag:["css","box model","entry-level","basic concept","notes"]},{id:"120719-what-is-itcss",createdAt:"Jul 12 2019",title:"ITCSS - Concept Explanation",subTitle:"Inverted Triangle CSS",abstract:"",updatedAt:"",tag:["css","basic concept","entry-level","notes"]},{id:"300719-scss-intro-notes",createdAt:"Jul 30 2019",title:"Sass入门语法",subTitle:"",abstract:"目前部分是at-rules的笔记",updatedAt:"",tag:["css","basic concept","entry-level","notes","scss"]},{id:"020919-lazyload-image-w-blurring",createdAt:"Sep 02 2019",title:"懒加载之图片模糊效果",subTitle:"",abstract:"3种方法lazyload图像，并提供placeholder和模糊的效果",updatedAt:"",tag:["css","lazyload","image","notes","user-experience","filter","performance"]},{id:"030919-responsive-img-srcset-and-sizes",createdAt:"Sep 03 2019",title:"响应式布局之响应式图像属性",subTitle:"",abstract:"",updatedAt:"",tag:["html","responsive","image","notes","user-experience","css","performance"]}],XCode:[{id:"250519-first-time-using-xcode-running-debugging",createdAt:"May 25 2019",title:"First Time Running and Archiving Existing Project with XCode",subTitle:"Debugging Records",abstract:"This is for those who get to use XCode to archive an existing app for the VERY FIRST time.",updatedAt:"",tag:["xcode","debug","entry-level"]}],React:[{id:"280519-reactjs-notes-entry-level",createdAt:"May 28 2019",title:"React.js Notes - Entry Level",subTitle:"",abstract:"My little notebook for React.js.",updatedAt:"",tag:["react","entry-level","notes"]},{id:"040619-reactjs-notes-advanced-guide",createdAt:"Jun 04 2019",title:"React.js Notes - Advanced Level",subTitle:"",abstract:"",updatedAt:"",tag:["react","advanced-level","notes"]},{id:"170619-reactjs-refs-and-dom",createdAt:"Jun 17 2019",title:"用ref获取DOM节点或React组件",subTitle:"",abstract:"",updatedAt:"",tag:["react","advanced-level","notes","react-dom"]},{id:"260719-react-hooks-useeffect",createdAt:"Jul 26 2019",title:"React v16.8 钩子useEffect基础",subTitle:"用于产生副作用，如数据获取、异步请求等",abstract:"useEffect钩子让关联逻辑的操作和代码不再被生命周期强行分散",updatedAt:"",tag:["react","advanced-level","notes","hooks"]}],Log:[{id:"020719-learninng-log",createdAt:"Jul 02 2019",title:"Learning Logs",subTitle:"",abstract:"Just note down what I read every day",updatedAt:"",tag:["notes"]}],JavaScript:[{id:"050619-js-notes",createdAt:"Jun 05 2019",title:"JavaScript Notes",subTitle:"",abstract:"",updatedAt:"",tag:["notes","javascript","document"]},{id:"100619-create-event-bus",createdAt:"Jun 10 2019",title:"Create an Event Bus Using JavaScript",subTitle:"A Practice for Publish/Subscribe Mode",abstract:"",updatedAt:"",tag:["practice","javascript","example","event subscription"]},{id:"100619-es6-module-export-import",createdAt:"Jun 10 2019",title:"Import and Export Modules in JavaScript",subTitle:"ES6 New Feature",abstract:"",updatedAt:"",tag:["document","javascript","es6","module","notes"]},{id:"210619-js-memory-leaks",createdAt:"Jun 21 2019",title:"JavaScript内存泄漏",subTitle:"",abstract:"",updatedAt:"",tag:["javascript","performance","notes"]},{id:"010819-js-data-processing-practice",createdAt:"Aug 01 2019",title:"练习——递归处理数据",subTitle:"把扁平化数据结构化",abstract:"",updatedAt:"",tag:["javascript","practice","recursion","data","structure"]},{id:"030819-js-apply-tricks",createdAt:"Aug 03 2019",title:"Array.prototype.apply的小技巧",subTitle:"",abstract:"",updatedAt:"",tag:["javascript","array","notes","tricks"]},{id:"130819-js-bitwise-operators",createdAt:"Aug 13 2019",title:"操作符——位操作符相关",subTitle:"",abstract:"",updatedAt:"",tag:["javascript","operator","notes"]},{id:"230819-how-to-write-a-promise",createdAt:"Aug 23 2019",title:"如何手写一个Promise",subTitle:"前端面试题",abstract:"",updatedAt:"",tag:["javascript","promise","practice","interview-question"]},{id:"200320-generator-use-case",createdAt:"Mar 24 2020",title:"生成器的应用",subTitle:"",updatedAt:"",tag:["javascript","notes","es6"]},{id:"280320-js-variable-scope",createdAt:"Mar 28 2020",title:"变量的作用域",subTitle:"",updatedAt:"",tag:["javascript","notes","es6","scope","lexical environment"]}],Redux:[{id:"050619-redux-basics",createdAt:"Jun 05 2019",title:"Redux Basics Notes - Entry Level",subTitle:"",abstract:"",updatedAt:"",tag:["notes","redux","react","react-native","entry-level"]}],"React-Native":[{id:"300519-react-native-nav-notes-entry-level",createdAt:"May 30 2019",title:"React-Native Navigation Notes - Entry Level",subTitle:"",abstract:"My little notebook for React-Native Navigation",updatedAt:"",tag:["react","react-native","entry-level","react-native-navigation","notes"]},{id:"130619-react-native-api-component-notes",createdAt:"Jun 13 2019",title:"React-Native API Notes",subTitle:"",abstract:"",updatedAt:"",tag:["react","react-native","entry-level","api","notes","document"]},{id:"240619-react-native-debugs",createdAt:"Jun 24 2019",title:"React-Native Debugging Notes",subTitle:"",abstract:"",updatedAt:"",tag:["react","react-native","entry-level","debug","notes","rendering"]}],Algorithm:[{id:"190619-data-structure-tree",createdAt:"Jun 19 2019",title:"JavaScript数据结构 - 数据树",subTitle:"",abstract:"",updatedAt:"",tag:["javascript","data","structure","api","notes"]},{id:"210819-binary-tree-traversal",createdAt:"Aug 21 2019",title:"二叉树的前序、中序和后序遍历",subTitle:"包括递归和非递归方法",abstract:"",updatedAt:"",tag:["javascript","data","structure","performance","notes"]}],Performance:[{id:"200819-user-centric-performance-metrics",createdAt:"Aug 20 2019",title:"以用户为中心的性能指标",subTitle:"From Google Developers",abstract:"厘清从用户角度看的网页性能，并通过一系列新的web APIs，如performanceObserver及其他技巧，优化网页性能",updatedAt:"",tag:["performance","analytics","google-developers","api","user-experience"]}]}},"64a9":function(e,t,a){},"6c8f":function(e,t,a){"use strict";var n=a("c497"),r=a.n(n);r.a},7532:function(e,t,a){var n={"./010819-js-data-processing-practice.md":["2526","chunk-2d0b28bd"],"./020719-learninng-log.md":["0759","chunk-2d0a47e1"],"./020919-lazyload-image-w-blurring.md":["aaa1","chunk-2d213106"],"./030819-js-apply-tricks.md":["f104","chunk-2d22bcc5"],"./030919-responsive-img-srcset-and-sizes.md":["a7d6","chunk-2d2093be"],"./040619-reactjs-notes-advanced-guide.md":["3f19","chunk-2d0c54f1"],"./040919-reducing-js-delivery-cost.md":["0e2e","chunk-2d0af45e"],"./050619-js-notes.md":["be89","chunk-2d21af7a"],"./050619-redux-basics.md":["55ff","chunk-2d0c8c56"],"./100619-create-event-bus.md":["7324","chunk-2d0d6714"],"./100619-es6-module-export-import.md":["7667","chunk-2d0d72d6"],"./120719-what-is-itcss.md":["7ee4","chunk-2d0e28f3"],"./130619-react-native-api-component-notes.md":["fc00","chunk-2d237873"],"./130819-js-bitwise-operators.md":["bdab","chunk-2d21b0d9"],"./170619-reactjs-refs-and-dom.md":["1ea5","chunk-2d0b6e3e"],"./190619-data-structure-tree.md":["7d1c","chunk-2d0e1f15"],"./190819-ways-of-improving-graphical-content.md":["b5f2","chunk-2d2100d5"],"./200819-user-centric-performance-metrics.md":["99a6","chunk-2d0e6c0b"],"./210619-js-memory-leaks.md":["a3cd","chunk-2d2084c9"],"./210819-binary-tree-traversal.md":["6428","chunk-2d0cf67a"],"./230819-how-to-write-a-promise.md":["984a","chunk-2d0e6302"],"./240320-generator-use-case.md":["e966","chunk-2d22672a"],"./240619-react-native-debugs.md":["0564","chunk-2d0a4079"],"./250519-first-time-using-xcode-running-debugging.md":["7b7f","chunk-2d0e1850"],"./260519-visual-formatting-model.md":["2e8f","chunk-2d0bddd7"],"./260719-react-hooks-useeffect.md":["7bb9","chunk-2d0e1d58"],"./280320-js-variable-scope.md":["8dc6","chunk-2d0e9955"],"./280519-reactjs-notes-entry-level.md":["5a6c","chunk-2d0d2baf"],"./300519-react-native-nav-notes-entry-level.md":["5d41","chunk-2d0d3682"],"./300719-scss-intro-notes.md":["787f","chunk-2d0d7aa6"]};function r(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id="7532",e.exports=r},"85a7":function(e,t,a){"use strict";var n=a("2c3b"),r=a.n(n);r.a},"8c6a":function(e,t,a){e.exports=a.p+"img/pot.d8bbb938.png"},9142:function(e,t,a){var n={"./home-profile-1-origin.png":"568e","./home-profile-2-origin.png":"5f20","./logo.png":"cf05","./pot.png":"8c6a"};function r(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="9142"},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"home posiRela"},[a("div",{staticClass:"otherLinks dspFlex fs20 deepBlue f-monad"},[e._v(e._s(e._f("dateFormat")(e.homeDate)))]),e._m(0),a("navigation")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nameBg posiAbso"},[a("div",{staticClass:"name"},[a("span",{staticClass:"initialLetter whiteFont f-monad"},[e._v("A")]),a("span",{staticClass:"letters deepBlue f-monad"},[e._v("lison")])])])}],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{id:"navigation-wrapper"}},e._l(e.tabObj,function(t){return a("div",{staticClass:"tab whiteFont dspFlex fs16"},[a("router-link",{attrs:{to:t.rt}},[a("span",{staticClass:"f-monad"},[e._v(e._s(t.name))])])],1)}),0)},o=[],i={name:"navigation",data:function(){return{tabObj:{tab1:{name:"Favourites",rt:"/favsite"},tab2:{name:"Blogs",rt:"/blogs"},tab3:{name:"Portfolio",rt:"/portfolio"}}}},mounted:function(){}},s=i,d=(a("85a7"),a("2877")),u=Object(d["a"])(s,c,o,!1,null,"5670fe42",null),l=u.exports,f={name:"home",data:function(){return{profileImgName:"home-profile-1-origin"}},computed:{homeDate:function(){return new Date}},methods:{profileImg:function(e){var t=a("9142");return t("./"+e+".png")},changeProfileImg:function(){var e=document.querySelector(".profileImg-wrapper > img");"home-profile-1-origin"===this.profileImgName?(this.profileImgName="home-profile-2-origin",e.style.transform="rotate(5deg)"):(this.profileImgName="home-profile-1-origin",e.style.transform="rotate(-5deg)")}},components:{navigation:l}},p=f,b=(a("356a"),Object(d["a"])(p,n,r,!1,null,"1f98818d",null));t["default"]=b.exports},c497:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f8c6:function(e,t,a){}});
//# sourceMappingURL=app.e41a6a9c.js.map