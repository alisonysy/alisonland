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
        ## JSX - a syntax extension to JavaScript
        React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code.
        JSX can prevent XSS (Cross-Site-Scripting) attacks cos everthing (e.g. user input) is converted to string before being rendered.
        ```
        const name = function(user){
          return user.firstName + ' ' + user.lastName;
        };
        const user = {firstName:'Ash',lastName:'Ley'};
        const el = &lt;h1>Hi, {name}!&lt;/h1>;
        //or for more readability, separate the markup with parentheses wrapping around
        const el = (
          &lt;h1>
            Hi, {name(user)}!
          &lt;/h1>
        )
        ReactDOM.render(
          el,
          document.getElementById('xxx')
        )
        ```
        + Quotes "" are used to specify a string literal while curly braces {} denote JS expressions.
        + Applications built with just React usually have a SINGLE root DOM node.
        + React elements are **immutable**, meaning that once created, they cannot be changed. The only way to **update** an element is to create a new element.
        + In React, `class` should be `className`, `tabindex` should be `tabIndex`.

        ## Extracting components - spliting them into smaller ones
        Using function components as example:
        ```
        function comp1(props){
          return (
            &lt;img className="comp1" 
              src={props.user.avatar} 
              alt={props.user.name}
            />
          )
        }

        function comp2(props){
          return (
            &lt;div className="comp2">
              &lt;comp1 user={props.user} /> //user={props.user} means it passes *props.user* as the *user* object down to the component called *comp1*
              &lt;div className="comp2-div"> //so that *comp1* can directly use *props.user*
                {props.user.name}
              &lt;/div>
            &lt;/div>
          )
        }

        function comp3(props){
          return (
            &lt;div className="comp3">
              &lt;comp2 **user**={props.**author**} /> //user={props.user} means it passes *props.author* as the *user* object down to the component called *comp1*
              &lt;div className="comp3-div"> //so that *comp2* can directly use *props.user*
                {props.other_attr}
              &lt;/div>
            &lt;/div>
          )
        }
        ```

        ## Props are read-only - should not be modified inside component function / component class
        Function is considered to be impure if the input is being modified:
        ```
        function withdraw(account, amount) {
          account.total -= amount;
        }
        ```

        Normally, the params passed to a class are called `props`.
        `key` is a special and reserved property in React. It canNOT be referenced thru `this.props.key`. A component cannot inquire about its key.
        When defining the constructor of a **subclass**, a `super(props)` call at the start is always needed.

        ## `this.state` And `render()`
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
        &lt;button className="square" onClick={()=>{this.props.onClick() &lt;!--this is from parent component-->}}>
          { this.props.xxx } &lt;!--this is from parent component-->
        &lt;/button>
        //another way to register an event handler
        &lt;button className="square" onClick={this.props.onClick.bind(this) &lt;!--this is from parent component-->}}>
          { this.props.xxx } &lt;!--this is from parent component-->
        &lt;/button>
        ```

        + Immutability is important - to create a copy of an object instead of directly modifying it
          It can be used to
        ··+ Keep previous versions
        ··+ Detect changes
        ··+ Determine when to re-render <span class="postRelated">shouldComponentUpdate</span>


        ## Function Component
        Sometimes, we don't need to define a class for everthing, we can simply write components, and we use **function components** which <h5 class="postDefine">only contain a render method and don’t have their own state.</h5>
        ```
        function Name(props){
          return (
            //HTML codes here...
          );
        }
        ```
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
