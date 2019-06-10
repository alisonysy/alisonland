## JSX - a syntax extension to JavaScript
React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code.
JSX can prevent XSS (Cross-Site-Scripting) attacks cos everthing (e.g. user input) is converted to string before being rendered.
```
const name = function(user){
  return user.firstName + ' ' + user.lastName;
};
const user = {firstName:'Ash',lastName:'Ley'};
const el = <h1>Hi, {name}!</h1>;
//or for more readability, separate the markup with parentheses wrapping around
const el = (
  <h1>
    Hi, {name(user)}!
  </h1>
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

## Function component
Sometimes, we don't need to define a class for everthing, we can simply write components, and we use **function components** which <span class="postDefine">only contain a render method and don’t have their own state.</span>
```
function Name(props){
  return (
    //HTML codes here...
  );
}
```

## Extracting components - spliting them into smaller ones
Using function components as example:
```
function comp1(props){
  return (
    <img className="comp1" 
      src={props.user.avatar} 
      alt={props.user.name}
    />
  )
}

function comp2(props){
  return (
    <div className="comp2">
      <comp1 user={props.user} /> //user={props.user} means it passes *props.user* as the *user* object down to the component called *comp1*
      <div className="comp2-div"> //so that *comp1* can directly use *props.user*
        {props.user.name}
      </div>
    </div>
  )
}

function comp3(props){
  return (
    <div className="comp3">
      <comp2 **user**={props.**author**} /> //user={props.user} means it passes *props.author* as the *user* object down to the component called *comp1*
      <div className="comp3-div"> //so that *comp2* can directly use *props.user*
        {props.other_attr}
      </div>
    </div>
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

### Store state in the parent component rather than child
#### Why we lift up the `state`?
+ We need a single 'source of truth' for data that changes; data may need to be rendered in multiple components

#### How? --lift it up to children's closest common ancestor
+ Firstly pass `this.state.xxx` down to child component within its `renderXXX()` method
+ Then register an event handler that links to a method from the parent compoenent, note that the handler can be accessed by its child component thru `this.props.event()`
+ Inside the handler, a copy of the original `this.state.xxx` would be created and `this.state.xxx` would be updated
+ As for the child component, within its `render()` method, an event handler should be registered and the callback should invoke the parent event handler, e.g.
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

+ While `this.state` is used to store data that participate in the data flow, you are free to add any additional properties to the component

+ State updates may be **asynchronous**
React may batch multiple `setState()` calls into a single update for performance.
The following codes would fail to update the `counter`:
```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
To fix it, can replace the object with a function:
```
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
<div class="postQ">
  <ul class="postQList">
    <li>We only register the function in this.setState(), when is it called?</li>
    <li>If setState() calls can be asynchronous, how is a function different from an object?</li>
  </ul>
</div>

### State accessibility and data flow
Neither parent nor child components can know if a certain component is *stateful* or *stateless*.
State is often called local or encapsulated. It is NOT accessible to any component other than the one that owns and sets it. However, the component can choose to pass its state down as props to its child components.
Data flow is **topdown/unidirectional**.


## Event handling syntax
In a **function component**, the event handler attached to an element doesn't need `this`:
```
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

ReactDOM.render(
  <ActionLink />,
  document.getElementById('root')
)
```
In contrast, inside a **class**, the event handler needs `this.` before the function name:
```
class ActionLink extends React.Component{
  // ... here is constructor() method
  handleClick(e){
    // codes here
  }

  render(){
    return (
      <a href="#" onClick={this.handleClick}>
        Click me
      </a>
    )
  }
}
```


## Conditional rendering
+ We may embed any expressions in JSX by wrapping them in curly braces.
+ Use inline `if` with logical operator `&&`.
  In JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false:
```
return (
  {
    ...
    { msg.length > 0 &&
      <h1> You have {msg.length} messages to read. </h1>
    }
  }
)
```
+ Use inline if-else with conditional operator `condition ? true : false`

## Listing
To render a list of elements from an array, use `map()` to return an array of elements to be rendered:
```
function numberList(props){
  const number = [1,2,3,4,5];
  const numberLi = number.map((num)=>{
    return (
      <li key={number.toString()}>{num}</li>
    )
  });
  return (
    <ul>{numberLi}</ul>
  )
}
```
Note: 
+ `props.key` is NOT accessible by the component itself.
+ When extracting `<li>` component, say, we call the extracted component `<listItem>`, `map()` function should be used in the original `<numberList>` component; and we should keep the `key` in the returned array from `map()`.
```
function listItem(props){
  return (
    <li>props.val</li>
  )
}
function numberList(props){
  const number = props.number;
  const numberLi = number.map((num)=>{
    return (
      <listItem key={number.toString()} val={number} />
    )
  })
  return (
    <ul>{numberLi}</ul>
  )
}
```