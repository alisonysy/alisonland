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
      ```scss
      [dir=rtl] & { /* match the element whose parent's text is set to use a right-to-left language */
        margin: auto {
          left: 0;
          right:10px;
        }
      }
      ```