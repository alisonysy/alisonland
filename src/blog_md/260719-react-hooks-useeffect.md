React钩子(Hooks)是`React 16.8`新增的功能，并且完全向后兼容(backwards-compatible, i.e. 不会有任何重大变化)，让我们可以在函数组件(function component)内使用`state`和其他React的特性。
*Effect*钩子让我们可以在函数组件内进行抓取数据、订阅事件、改变DOM等等会产生*副作用*的事件，ta的作用相当于`componentDidMount`，`componentDidUpdate`，和`componentWillUnmount`三者合一，即ta的代码会在每次render后都被执行。

### 为什么要用Hooks？
复杂组件里的状态逻辑和副作用(诸如数据获取、HTTP请求等)堆叠，导致难以维护：
+ 组件内的`componentDidMount`和`componentDidUpdate`方法可能操作相同的代码
+ 在同一个方法里可能存在不同功用、逻辑不关联的方法

**而Hooks可以实现把逻辑相关、功能一致的代码放在一起。**

### Syntax:
```JavaScript
import React, { useState, useEffect } from 'react';

function funcComp() {
  const [count, setCount] = useState(0); //与useState连用，在useEffect函数体内通过闭包直接获取state里的变量

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    //其他操作，如发请求
  })

  return (
    <div>
      <p>It is {count} times</p>
      <button onClick={() => setCount(count+1)}> /* 类似setState，里面接收最新的state的值 */
        Click
      </button>
    </div>
  )
}
```

以下例子在`useEffect`函数体内订阅事件(subscribe to an event)，并可以返回一个取消订阅的操作，React会在`componentWillUnmount`(i.e. 需要清理timer等事件监听)的时候执行这个返回的函数：
```JavaScript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // 返回的函数会在React撤销挂载页面时执行
    return function cleanup() { //这是可选的
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

### Tips:
+ 跳过Effect来提高性能
因为每次render都会执行一遍useEffect，而在一个组件中可能存在好几个useEffect，如果一个useEffect里没有用到某个个state里的变量，那每次render都执行会影响性能，这时可以在useEffect传入**第二个参数**。第二个参数为*数组*，传入的元素为会被检测是否相同的变量：
```JavaScript
useEffect(()=>{
  document.title = `You clicked ${count} times`;
},[count]); //只有在count变化的时候才会执行这个useEffect
```
Note: 如果希望useEffect只在挂载和撤销挂载(Unmount)的时候执行，可传一个空数组`[]`
+ 只能在top-level处使用Hooks

### 自定义Hooks
类似一个组件的定义，只是里面只包含该Hook的逻辑：
```JavaScript
import React, { useState, useEffect } from 'react';

//自定义Hook - useFriendStatus
//通常以'use-'开头命名
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

//在其他组件内使用Hook
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```