## Bug 1 - 在render()中定义的变量渲染时变成`undefined`
在页面聚焦时发送数据请求，然后保存到`this.state`后，在`render()`方法中再重新定义变量，能通过`console.log`获取数据，但直接操作时却返回`undefined is not an object`的错误——
+ `console.log`有数据返回：
```js
render(){
  const {options} = this.state;
  console.log(options) //有结果

  return (
    ... //与options无关的渲染
  )
}
```

+ 对变量进行*操作*或*渲染*时，返回`undefined`
```js
render() {
  const {options} = this.state;
  Object.keys(options).map( i => console.log(i))
  // Error: undefined is not an object

  return (
    ... //与options无关的渲染
  )
}
```

### 原因和解决办法
**原因**：由于数据请求是异步操作，首次渲染时，数据并未获取到，所以返回undefined；`console.log`里能显示的数据是首次渲染完成并获取到数据后再返回的
**解决办法**：通过<span class="postRelated">Conditional Rendering</span>，当数据还没获取时，不渲染；获取到数据后才进行渲染
```js
render(){
  const {options} = this.state;
  return (
    {
      options? <Text>{options.name}</Text> : null
    }

    // or
    { options && <Text>{options.name}</Text>}
  )
}
```