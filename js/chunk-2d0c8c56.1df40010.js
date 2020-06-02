(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8c56"],{"55ff":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h3",[s._v("Definitions and Concepts")]),a("h5",{staticClass:"postDefine"},[s._v("action")]),s._v(": an object that represents the fact about 'what happened'.\n"),a("h5",{staticClass:"postDefine"},[s._v("reducer")]),s._v(": a function that receive the current state and an action, updating the state according to actions. They specify how the app's state changes in response to actions.\n"),a("h5",{staticClass:"postDefine"},[s._v("store")]),s._v(": an object that brings `action` and `reducer` tgt. \n"),a("h2",[s._v("Actions")]),a("p",[s._v("Actions are plain JS objects. They must have a "),a("em",[s._v("type")]),s._v(" property that indicates the "),a("em",[s._v("type")]),s._v(" of action being performed. "),a("em",[s._v("Type")]),s._v(" should be string constants.\nThey are the "),a("em",[s._v("only source")]),s._v(" of info for the store. You send them to the store via "),a("code",{pre:!0},[s._v("store.dispatch()")]),s._v(".")]),a("h5",{staticClass:"postDefine"},[s._v("Action creators")]),s._v(" are functions that create actions. They simply return an action.\n"),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-Js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" SET_VISIBILITY_FILTER = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'SET_VISIBILITY_FILTER'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" VisibilityFilters = {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("SHOW_ALL")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'SHOW_ALL'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("SHOW_COMPLETED")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'SHOW_COMPLETED'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("SHOW_ACTIVE")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'SHOW_ACTIVE'")]),s._v("\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("setVisibilityFilter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("filter")]),s._v(") ")]),s._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": SET_VISIBILITY_FILTER, filter }\n}\n")])]),a("p",[s._v("Then to initiate a dispatch, pass the returned object to "),a("code",{pre:!0},[s._v("dispatch()")]),s._v(":")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("dispatch(addTodo(text))\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//or create a **bound action creator** that automatically dispatches and call it directly")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundAddTodo = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("text")]),s._v(" =>")]),s._v(" dispatch(addTodo(text))\nboundAddTodo(text)\n")])]),a("p",[s._v("Note: the "),a("code",{pre:!0},[s._v("dispatch()")]),s._v(" function can be accessed directly from the store as "),a("code",{pre:!0},[s._v("store.dispatch()")]),s._v(", but more likely you'll access it using a helper like react-redux's "),a("code",{pre:!0},[s._v("connect()")]),s._v(".")]),a("h2",[s._v("Reducers")]),a("p",[s._v("Reducers should stay "),a("strong",[s._v("pure")]),s._v(". You should NEVER do the following inside a reducer:")]),a("ul",[a("li",[s._v("Mutate its args")]),a("li",[s._v("Perform side effects like API calls and routing transitions")]),a("li",[s._v("Call "),a("span",{staticClass:"postQ"},[s._v("non-pure functions")]),s._v(", e.g. "),a("code",{pre:!0},[s._v("Date.now()")]),s._v(" or "),a("code",{pre:!0},[s._v("Math.random()")])])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { SET_VISIBILITY_FILTER, VisibilityFilters } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./actions'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" initialState = {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visibilityFilter")]),s._v(": VisibilityFilters.SHOW_ALL,\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("todos")]),s._v(": []\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("todoApp")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state = initialState, action")]),s._v(") ")]),s._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("switch")]),s._v(" (action.type) {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" SET_VISIBILITY_FILTER:\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".assign({}, state, { \n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visibilityFilter")]),s._v(": action.filter\n      })\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" ADD_TODO:\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".assign({},state,{\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("todos")]),s._v(":[\n          ...state, "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//here, each case receives the *whole* state, we then try to split the reducer and update *just a slice* of the state")]),s._v("\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(":action.text,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("completed")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n          }\n        ]\n      })\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" TOGGLE_TODO:\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".assign({},state,{\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("todos")]),s._v(":state.todos.map("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("todo, index")]),s._v(")=>")]),s._v("{ "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//`map()` function returns a **new** array")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(index === action.index){ "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//just modify the newly checked/unchecked item")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".assign({},todo,{ "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// NEVER directly modify the original obj")]),s._v("\n              completed:!todo.completed\n            })\n          }\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" todo\n        })\n      })\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//important to return the previous state for any *unknown* action.")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" state\n  }\n}\n")])]),a("p",[s._v("Here, we see that "),a("code",{pre:!0},[s._v("SET_VISIBILITY_FILTER")]),s._v(" handles "),a("code",{pre:!0},[s._v("state.visibilityFilter")]),s._v(" while "),a("code",{pre:!0},[s._v("ADD_TODO")]),s._v(" and "),a("code",{pre:!0},[s._v("TOGGLE_TODO")]),s._v(" handle "),a("code",{pre:!0},[s._v("state.todos")]),s._v(", so\n"),a("strong",[s._v("Spliting the reducer")]),s._v(" to make it easier to understand:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" {\n  ADD_TODO,\n  TOGGLE_TODO,\n  SET_VISIBILITY_FILTER,\n  VisibilityFilters\n} "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./actions'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { SHOW_ALL } = VisibilityFilters\n\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("todos")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state = [], action")]),s._v(")")]),s._v("{ "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//the initial state of `state.todos` is an empty array")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("switch")]),s._v(" (action.type){\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" ADD_TODO:\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" [\n        ...state,\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(":action.text,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("completed")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        }\n      ]\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" TOGGLE_TODO:\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" state.map("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("todo, index")]),s._v(")=>")]),s._v("{\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(index === action.index){\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".assign({}, todo, { "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// the key's value is an array composed of objs")]),s._v("\n            completed: !todo.completed\n          })\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" todo\n      })\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(":\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" state\n  }\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("visibilityFilter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state = SHOW_ALL, action")]),s._v(")")]),s._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("switch")]),s._v(" (action.type){\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" SET_VISIBILITY_FILTER:\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" action.filter "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//no need to return an obj, cos it's the key's **value**")]),s._v("\n  }\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(":\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" state\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// way 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("todoApp")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state = {}, action")]),s._v(")")]),s._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visibilityFilter")]),s._v(": visibilityFilter(state.visibilityFilter, action),\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("todos")]),s._v(": todos(state.todos, action)\n  }\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// way 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// or can use `combineReducers()` to combine several reducers into one root reducer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" todoApp = combineReducers({\n  visibilityFilter,\n  todos\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" todoApp\n")])]),a("h2",[s._v("Store")]),a("p",[s._v("There's only ONE SINGLE store in a Redux app.\nThe store has the following responsibilities:")]),a("ul",[a("li",[s._v("holds app state")]),a("li",[s._v("allows access to state via "),a("code",{pre:!0},[s._v("getState()")])]),a("li",[s._v("allows state to be updated via "),a("code",{pre:!0},[s._v("dispatch(action)")])]),a("li",[s._v("registers listeners via "),a("code",{pre:!0},[s._v("subscribe(listener)")])]),a("li",[s._v("handles unregistering of listeners")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { createStore } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'redux'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" todoApp "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./reducers'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" store = createStore(todoApp)\n")])]),a("p",[s._v("Now, we can dispatch some actions:")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" {\n  addTodo,\n  toggleTodo,\n  setVisibilityFilter,\n  VisibilityFilters\n} "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./actions'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Log the initial state")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(store.getState())\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Every time the state changes, log it")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Note that subscribe() returns a function for unregistering the listener")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" unsubscribe = store.subscribe("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(store.getState()))\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Dispatch some actions")]),s._v("\nstore.dispatch(addTodo("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Learn about actions'")]),s._v("))\nstore.dispatch(addTodo("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Learn about reducers'")]),s._v("))\nstore.dispatch(addTodo("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Learn about store'")]),s._v("))\nstore.dispatch(toggleTodo("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("))\nstore.dispatch(toggleTodo("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("))\nstore.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)) "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// note that for now the `visibilityFilter` does not interact with `todos`")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Stop listening to state updates")]),s._v("\nunsubscribe()\n")])])])}],n=a("2877"),l={},p=Object(n["a"])(l,e,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c8c56.1df40010.js.map