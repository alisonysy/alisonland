# Problems

1. Real world metrics are a distribution, not a number.
2. Load is an experience. There is no single 'load metric'.
3. Interactivity is a crucial part of load, but often overlooked.
4. Responsiveness always matters, not just a load time.

# Key questions

1. What metrics most accurately reflect user-perceived performance?
2. How do we measure these metrics on real users?
3. How do we interpret our measurements to see how we're doing?
4. How do we optimize and prevent regressions in the future?

| The experience |   | The metric |
| -------------- | ---- | ---------- |
| Is it happening? | Did navigation start successfully? | First Paint (FP) / First Contentful Paint (FCP) |
| Is it useful? | Has enough content rendered that users can engage with it? | First Meaningful Paint (FMP) <br> Hero Element Timing |
| Is it usable? | Can user interact with the page? | Time to Interactive (TTI) |
| Is it delightful? | Are the interactions smooth and free of lag and jank? | Long Tasks |

# How to optimise
<br>

## Get to FP and FCP fast

+ Inline critical CSS
+ Remove render blocking scripts from the &lt;head>
+ [App Shell Pattern](https://developers.google.com/web/updates/2015/11/app-shell#top_of_page)

## Minimise the time bewteen FMP and TTI

As a general rule, should try to minimise the time between FMP and TTI. In cases where it's not possible, critical that the interfaces make it clear that the page isn't yet interactive.

+ Ship less JS
+ Break up existing JS with Code Splitting <br> Ensure your initial script load contains just the code needed to get the critical UI elements rendered and make them interactive
+ PRPL Pattern

### Long task API
The browser is single-threaded. When long tasks tie up the main thread, the web page would be blocked and become unresponsive.

+ Delayed TTI
+ High/variable input latency, e.g. tap, click. scroll
+ High/variable event handling latency, e.g. input, processing event callbacks delay app updates
+ Janky animations and scrolling

**Usage**:
```js
var observer = new PerformanceObserver(function(list){
  var perfEntries = list.getEntries();
  for (var i = 0; i < perfEntries.length; i++){
    // Process long task notifications:
    // report back for analytics and monitoring
    // ...
  }
});
// register observer for long task notifications
observer.observe({entryTypes: ["longtask"]});
// Long script execution after this will result in queueing
// and receiving "longtask" entries in the observer.
```


### Polyfill for detecting TTI
Works in any browser that supports the long tasks API.
The polyfill exposes a `getFirstConsistentlyInteractive()` method, which returns a promise that resolves with the TTI value. You can track TTI using Google Analytics as follows:
```js
import ttiPolyfill from './path/to/tti-polyfill.js';

ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
  ga('send', 'event', {
    eventCategory: 'Performance Metrics',
    eventAction: 'TTI',
    eventValue: tti,
    nonInteraction: true,
  });
});
```
`ttiPolyfill` github documentation: [ttiPolyfill](https://github.com/GoogleChromeLabs/tti-polyfill)

### Input latency
To detect input latency, can simply compare the event's time stamp to the current time, e.g.:
```js
//inside a 'click' event listener, after the event listener logic
const lag = performance.now() - e.timeStamp;
if(lag > 100){
  //doSomething
}
```

## Reduce long tasks

+ Break up JS
+ 50ms upper bound
+ Use `requestIdleCallback()`

**How to prevent long tasks**
1. Split codes into separate files
2. Split up large chunks of synchronous code into smaller chunks that can execute asynchronously or be deferred to the next idelpoint