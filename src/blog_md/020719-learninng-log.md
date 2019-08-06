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