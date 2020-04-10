## 3. *state*和*props*的联系和区别

#### 共同点

+ *state*和*props*在react中都是JS对象。
+ 两者若其中之一发生改变，都能触发组件的渲染。
+ > Both props and state are deterministic. If your Component generates different outputs for the same combination of props and state then you're doing something wrong. 

#### 区别

+ *props*是从**外部**传入组件的，相当于组件对外的数据接口，而*state*是组件**内部维护**的，相当于组件对内的数据接口。
+ 组件内部不能更改*props*，而可以直接通过`setState()`更改*state*。

#### 联系

+ 每个组件的*state*是私有的，理论上说，其他组件不能获取也不能更改；如果希望把组件状态传递出去，就需要通过*props*传递给子组件。
+ 组件内部可以通过接收的*props*里的方法调用外部方法，由外部方法修改对应组件的状态*state*。

### 关于*state*：无状态组件与状态组件
*Stateless Component*－只有属性，没有状态，内部得逻辑都是根据*props*产生，因为没有副作用，容易维护和debug。
*Stateful Component*－有属性和状态，他们负责数据处理、事件交互等各种副作用，然后把数据作为属性传递下去。

## 4. *context*的作用
在react中，数据的传递需要从上往下一层一层通过*props*传递，而*context*能替代这一繁冗的办法。他让没有直接联系的组件内也能共享数据，无需明确地通过*props*来传。

*context*主要应用场景是在不同的组件层级传递数据，例如主题、当前语言或登录后账号等，应该将其作为备用选项因为他会使组件复用变得困难。*注意*：如果单纯只想避免通过多层组件传递*props*，应该考虑组件组合模型**component composition**。

#### Syntax:
1. 创建*Context*对象
```js
const MyContext = React.createContext(defaultValue);
```
`React.createContext()`创建一个*Context*对象，组件可以订阅这个对象，渲染时，react会从组件树里最近的*Provider*中读取到当前context的值。`defaultValue`参数在一个组件从他的组件树上游找不到提供组件*Provider*时会起作用，但把`undefined`设置为context的值并不能使消费组件使用`defaultValue`。

2. 创建context提供组件
创建后，可通过每个*Context*对象的*Provider React component*让消费组件订阅*context*的变化：
```js
<MyContext.Provider value={/* some value */}>
```
*Provider*可以通过嵌套来覆盖上层的值。`value`是否改变是通过`Object.is`来判断。
当一个*Provider*的值发生改变，其后代所有消费组件都会重新渲染。从*Provider*到消费组件的事件传递并不依赖`shouldComponentUpdate`，所以即使上游组件阻止了更新，消费组件仍然能更新。

3. 类组件接收context
类组件有2种方法来接收新创建的context，
第一种是把*Context*对象赋予类的`contextType`属性：
```js
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext;
```
第二种是实验中的*public class fields*，通过在类组件内添加静态方法`contextType`：
```js
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```
*render*函数和不同的*生命周期*都能通过`this.context`获取最近的`contextType`的当前值，即*Provider*提供的`value`。

3. 函数组件接收context
函数组件不使用`contextType`，而是在**返回函数**的外面包裹一层`Context.Consumer`：
```js
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```
`Context.Consumer`里需要函数作为子元素，接收当前的*context*的值作为参数，返回一个react元素。*context*的值会等于最接近的*Provider*提供的`value`，若没有*Provider*，则使用`defaultValue`。

