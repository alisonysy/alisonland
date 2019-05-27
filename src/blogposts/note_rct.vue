<template>
  <main class="post-wrapper">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">
          react
        </h2>
        <h1 class="postTitle">
          React.js And React Native Notes
        </h1>
        <div class="postTime">
          <div class="postCreated"></div>
          <div class="postUpdated" v-if="postUpdatedAt"></div>
        </div>
        <div class="postTags">{{ postTags }}</div>
        <div class="postAbstract">
          My little notebook for React.js.
        </div>
      </div>
      <div class="postBody markdown-body">
          Normally, the params passed to a class are called `props`.

          When defining the constructor of a **subclass**, a `super(props)` call at the start is always needed.
          + To remember data for a component, we use **state**.
          ··+ We place local variables of a class inside **state**.
          ··+ If we call `this.setState()` from a handler in a component's **render** method, React would re-render the component (including its child components) whenever the handler is called.
          Note: inside the `render()` method, like Vue, there should be ONLY 1 root element.

          + Store state in the parent component rather than child
          ··+ Firstly pass `this.state.xxx` down to child component within its `renderXXX()` method
          ··+ Then register an event handler that links to a method from the parent compoenent, note that the handler can be accessed by its child component thru `this.props.event()`
          ··+ Inside the handler, a copy of the original `this.state.xxx` would be created and `this.state.xxx` would be updated
          ··+ As for the child component, within its `render()` method, an event handler should be registered and the callback should invoke the parent event handler, e.g.
          ```
          //one way to register an event handler
          <button className="square" onClick={()=>{this.props.onClick() <!--this is from parent component-->}}>
           { this.props.xxx } <!--this is from parent component-->
          </button>
          //another way to register an event handler
          <button className="square" onClick={this.props.onClick.bind(this) <!--this is from parent component-->}}>
           { this.props.xxx } <!--this is from parent component-->
          </button>
          ```

          + Immutability is important - to create a copy of an object instead of directly modifying it
            It can be used to
          ··+ Keep previous versions
          ··+ Detect changes
          ··+ Determine when to re-render <span class="postRelated">shouldComponentUpdate</span>

      </div>
    </article>
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
export default {
  name:'rct-notes',
  data:function(){
    return {
      postTags:['react','react-native','entry-level','notes']
    }
  },
  components:{
    blogHeader
  },
  computed:{
    postUpdatedAt(){
      return false;
    }
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
