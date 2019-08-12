| Field | How to learn | How deep | Priority | Time planning |
| ----- | ------------ | -------- | -------- | ------------- |
| Project | Alisonland - finish `portfolio` and `about me` sections, then <br> React project on JiRenGu | x | 1 | Weekend or weekdays, before *Sep* |
| Learning new tools | **Webpack**: notes, practice <br> **TypeScript**: after Webpack <br> Sass, ReactJS, Vue: using idle time | See left | 2 | Weekend(Webpack) before *Oct*, weekdays(Sass, ReactJS, Vue) |
| Demo practice | Before/after comparison slider, then <br> SVG filter - cloud effects | Make it for portfolio | 2 |  Weekend or weekdays, 1 for every two weeks |
| APIs | Notes, can be during office hours | Comprehend, notes, examples | 4 | Office hours, review at nights |
| High level and broad, e.g. structures, design patterns | Notes, or translation | Comprehend, notes, translate | 3 | Translations at nights, reading during office hours |
| Principles | Googling, WeChat posts | Comprehend, notes, translate | 4 | Idle time, weekdays |

### 02/07/2019
+ [x] &lt;script> tag's `async` and `defer` attributes
+ [x] native JavaScript modules, e.g. `import` and `export`

### 18/07/2019
+ [ ] tricks to better use Chrome Dev tools, e.g.
      `ctrl` + `p` and `:lineNum:colNum` to locate the code in the source code;
      Use `alt` + click to unfold DOMs;
      *Event Listeners* are right beside *Computed*, all event handlers are listed, right click to locate in scripts;
      
### 26/07/2019
+ [x] BEMIT: both the *BEM* naming conventions and **responsive suffixes** in the format of `@<breakpoint>` 
+ [x] Review HTTP *Cache-Control* header, including `no-cache`, `max-age`, `private` vs `public`, `no-store`, `must-revalidate`, `no-transform`, `stale-while-revalidate`, and **cache busting** etc.. But still confused with how the client can set it up (doesn't the browser set it all up for us?) [link](https://csswizardry.com/2019/03/cache-control-for-civilians/)
+ [x] React `useEffect` Hook and took notes on a blogpost

### 27/07/2019
+ [x] Sass: intro - syntax and style rules, notes:
      `&` is the parent selector, except for being used to *add pseudo-classes* to the outer selector, it can also be used to style the outer selector in a certain context:
```
[dir=rtl] & { /* match the element whose parent's text is set to use a right-to-left language */
  margin: auto {
    left: 0;
    right:10px;
  }
}
```

### 29/07/2019
+ [x] Before and after comparison slider, 2 examples:
  + [all sliders effects - codeMyUI](https://codemyui.com/tag/before-and-after/)
  + [multi-layered dragging slider - codepen](https://codepen.io/nosurprisethere/pen/JJzdoP?editors=0110)
  + [hover slider - codeMyUI](https://codemyui.com/before-after-animation-filter/)
  + [hover slider - codepen](https://codepen.io/mimoduo/pen/Vawydp?editors=0110)
  + [many more hover effects - CSSTricks](https://css-tricks.com/direction-aware-hover-effects/)

**Questions**
+ What does `dispatch` do in React?

### 30/07/2019
+ Sass `@import` at-rule enables nesting imports, which can scope CSS to a particular *element* or media query:
```
// style.scss
.aClass{
  @import "theme";
}
```
All styled selectors in theme.scss / theme.css will be appended as children of *aClass* selector.

### 03/08/2019
+ Read MDN document on `Function.prototype.apply()`, several tricks to use this

### 05/08/2019
+ Read MDN document on `WeakMap` (about keyed collections), which is normally used to store private data and whose keys are **objects** only, e.g.:
  We used to set *data-\** attributes on DOM nodes, which can be replaced by *Maps* and *WeakMaps* to privately bind data to a DOM node.

### 06/08/2019
+ CSSTricks's SVG effect: mainly &lt;feTurbulence>, &lt;feDisplacementMap>, &lt;feColorMatrix>, &lt;fePointLight>, &lt;feMerge>, etc.

### 08/08/2019
+ Getting started on Katalon Studio which is an automated testing app. Get to know how to add a test case and run it, seems just to simulate whether a webpage can interact ideally with the user?

### 09/08/2019
+ Read about *Measure Performance with RAIL Model* of **Why performance matters** on Goolge Developer. Trying to find out other performance measuring techniques.
  The RAIL model link is: [RAIL Model](https://developers.google.com/web/fundamentals/performance/rail)

### 12/08/2019

#### 学习资料分类
+ Read article about reducing HTTP requests, e.g. reducing image requests by using sprites; the article also mentions how the location of &lt;script> tag can affect rendering

按领域/方向分类：JavaScript语法、CSS、设计模式、性能相关的渲染原理、框架/工具API使用、项目，etc.
按学习方法分类：记下有例子的笔记、翻译、自己实现、阅读理解/记下大意
按学习程度分类：需要理解具体使用情景并实操、理解大意但无需理解相关概念、深入理解全文和相关概念、阅读并有印象
