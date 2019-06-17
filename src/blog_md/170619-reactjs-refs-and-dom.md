### Refs用于获取DOM节点或在`render()`里渲染的React组件

在正常的React数据流中，父组件和子组件交互的唯一方法是通过`props`；想要跨过dataflow直接改变子组件，需要用`Refs`。

### 应用场景
+ 处理focus, 文本选择，或是媒体播放
+ 触发即兴的动画
+ 与第三方DOM库整合

## React.js版本 >= 16.3

### 创建Refs
```
class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }
  render(){
    return <div ref={this.myRef} />
  }
}
```

### 获取Refs
当ref在render()中通过`ref`属性(attribute)传递给组件后，可通过`this.myRef.current`获取节点：
```
const node = this.myRef.current;
```

#### `ref`用在HTML元素或自定义class组件的不同
1. 用在HTML元素时，`ref`接收的是对应的*DOM元素*
`ref`的更新发生在`componentDidMount`或`componentDidUpdate`之前
2. 用在自定义class组件时，`ref`接收的是该组件*已挂载的实例*
若把创建的`this.textInput`的ref用于class定义的组件身上，可通过调用`this.textInput.current.methodName()`调用子组件里的方法
Note: `ref`不能用于函数组件(function component)**身上**，因为他们不能生成实例，i.e. 
```
function Child(){
  return <input />
}
class Parent extends React.Component{
  ...
  render(){
    // This will NOT work
    return <Child ref={...}>
  }
}
```
但可用于函数组件*里面*的DOM元素或class定义的组件**身上**。

### Callback Refs
我们可以把一个函数传递给`ref`属性，而不是由`createRef()`创建的属性；该函数接收HTML DOM元素或React组件实例作为参数，这样可以把它在任何地方储存和获取。
```
class CustomTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput = null;
    this.setTextInputRef = this.setTextInputRef.bind(this)
  }
  setTextInputRef(el){
    this.textInput = el;
  }
  render(){
    return (
      <div>
        <input 
          type="text"
          ref={this.setTextInputRef}
        />
      </div>
    )
  }
}
```
还可以把callback refs在组件之间传递：
```
function CustomTextInput(props){
  return (
    <div>
      <input ref={props.inputRef}>
    </div>
  )
}

class Parent extends React.Component{
  render(){
    <CustomTextInput
      inputRef={el => this.inputElement = el}>
  }
}
```