(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6e3e"],{"1ea5":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h3",[e._v("Refs用于获取DOM节点或在"),t("code",{pre:!0},[e._v("render()")]),e._v("里渲染的React组件")]),t("p",[e._v("在正常的React数据流中，父组件和子组件交互的唯一方法是通过"),t("code",{pre:!0},[e._v("props")]),e._v("；想要跨过dataflow直接改变子组件，需要用"),t("code",{pre:!0},[e._v("Refs")]),e._v("。")]),t("h3",[e._v("应用场景")]),t("ul",[t("li",[e._v("处理focus, 文本选择，或是媒体播放")]),t("li",[e._v("触发即兴的动画")]),t("li",[e._v("与第三方DOM库整合")])]),t("h2",[e._v("React.js版本 >= 16.3")]),t("h3",[e._v("创建Refs")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("class MyComponent extends React.Component {\n  constructor(props){\n    super(props);\n    this.myRef = React.createRef();\n  }\n  render(){\n    return <div ref={this.myRef} />\n  }\n}\n")])]),t("h3",[e._v("获取Refs")]),t("p",[e._v("当ref在render()中通过"),t("code",{pre:!0},[e._v("ref")]),e._v("属性(attribute)传递给组件后，可通过"),t("code",{pre:!0},[e._v("this.myRef.current")]),e._v("获取节点：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("const node = this.myRef.current;\n")])]),t("h4",[t("code",{pre:!0},[e._v("ref")]),e._v("用在HTML元素或自定义class组件的不同")]),t("ol",[t("li",[e._v("用在HTML元素时，"),t("code",{pre:!0},[e._v("ref")]),e._v("接收的是对应的"),t("em",[e._v("DOM元素")]),t("code",{pre:!0},[e._v("ref")]),e._v("的更新发生在"),t("code",{pre:!0},[e._v("componentDidMount")]),e._v("或"),t("code",{pre:!0},[e._v("componentDidUpdate")]),e._v("之前")]),t("li",[e._v("用在自定义class组件时，"),t("code",{pre:!0},[e._v("ref")]),e._v("接收的是该组件"),t("em",[e._v("已挂载的实例")]),e._v("\n若把创建的"),t("code",{pre:!0},[e._v("this.textInput")]),e._v("的ref用于class定义的组件身上，可通过调用"),t("code",{pre:!0},[e._v("this.textInput.current.methodName()")]),e._v("调用子组件里的方法\nNote: "),t("code",{pre:!0},[e._v("ref")]),e._v("不能用于函数组件(function component)"),t("strong",[e._v("身上")]),e._v("，因为他们不能生成实例，i.e.")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("function Child(){\n  return <input />\n}\nclass Parent extends React.Component{\n  ...\n  render(){\n    // This will NOT work\n    return <Child ref={...}>\n  }\n}\n")])]),t("p",[e._v("但可用于函数组件"),t("em",[e._v("里面")]),e._v("的DOM元素或class定义的组件"),t("strong",[e._v("身上")]),e._v("。")]),t("h3",[e._v("Callback Refs")]),t("p",[e._v("我们可以把一个函数传递给"),t("code",{pre:!0},[e._v("ref")]),e._v("属性，而不是由"),t("code",{pre:!0},[e._v("createRef()")]),e._v("创建的属性；该函数接收HTML DOM元素或React组件实例作为参数，这样可以把它在任何地方储存和获取。")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v('class CustomTextInput extends React.Component{\n  constructor(props){\n    super(props);\n    this.textInput = null;\n    this.setTextInputRef = this.setTextInputRef.bind(this)\n  }\n  setTextInputRef(el){\n    this.textInput = el;\n  }\n  render(){\n    return (\n      <div>\n        <input \n          type="text"\n          ref={this.setTextInputRef}\n        />\n      </div>\n    )\n  }\n}\n')])]),t("p",[e._v("还可以把callback refs在组件之间传递：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("function CustomTextInput(props){\n  return (\n    <div>\n      <input ref={props.inputRef}>\n    </div>\n  )\n}\n\nclass Parent extends React.Component{\n  render(){\n    <CustomTextInput\n      inputRef={el => this.inputElement = el}>\n  }\n}\n")])])])}],s=t("2877"),v={},o=Object(s["a"])(v,r,p,!1,null,null,null);n["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0b6e3e.766613a8.js.map