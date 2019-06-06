### Definitions and Concepts
<h5 class="postDefine">action</h5>: an object that represents the fact about 'what happened'.
<h5 class="postDefine">reducer</h5>: a function that receive the current state and an action, updating the state according to actions. They specify how the app's state changes in response to actions.
<h5 class="postDefine">store</h5>: an object that brings `action` and `reducer` tgt. 

## Actions
Actions are plain JS objects. They must have a *type* property that indicates the *type* of action being performed. *Type* should be string constants.
They are the *only source* of info for the store. You send them to the store via `store.dispatch()`.
<h5 class="postDefine">Action creators</h5> are functions that create actions. They simply return an action.
```
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
```
Then to initiate a dispatch, pass the returned object to `dispatch()`:
```
dispatch(addTodo(text))

//or create a **bound action creator** that automatically dispatches and call it directly
const boundAddTodo = text => dispatch(addTodo(text))
boundAddTodo(text)
```
Note: the `dispatch()` function can be accessed directly from the store as `store.dispatch()`, but more likely you'll access it using a helper like react-redux's `connect()`. 

## Reducers
Reducers should stay **pure**. You should NEVER do the following inside a reducer:
+ Mutate its args
+ Perform side effects like API calls and routing transitions
+ Call <span class="postQ">non-pure functions</span>, e.g. `Date.now()` or `Math.random()`

```
import { SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { 
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({},state,{
        todos:[
          ...state, //here, each case receives the *whole* state, we then try to split the reducer and update *just a slice* of the state
          {
            text:action.text,
            completed:false
          }
        ]
      })
    case TOGGLE_TODO:
      return Object.assign({},state,{
        todos:state.todos.map((todo, index)=>{ //`map()` function returns a **new** array
          if(index === action.index){ //just modify the newly checked/unchecked item
            return Object.assign({},todo,{ // NEVER directly modify the original obj
              completed:!todo.completed
            })
          }
          return todo
        })
      })
    default: //important to return the previous state for any *unknown* action.
      return state
  }
}
```
Here, we see that `SET_VISIBILITY_FILTER` handles `state.visibilityFilter` while `ADD_TODO` and `TOGGLE_TODO` handle `state.todos`, so
**Spliting the reducer** to make it easier to understand:
```
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action){ //the initial state of `state.todos` is an empty array
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text:action.text,
          completed:false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index)=>{
        if(index === action.index){
          return Object.assign({}, todo, { // the key's value is an array composed of objs
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action){
  switch (action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter //no need to return an obj, cos it's the key's **value**
  }
    default:
      return state
}

// way 1
export default function todoApp(state = {}, action){
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

// way 2
// or can use `combineReducers()` to combine several reducers into one root reducer
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
```

## Store
There's only ONE SINGLE store in a Redux app.
The store has the following responsibilities:
+ holds app state
+ allows access to state via `getState()`
+ allows state to be updated via `dispatch(action)`
+ registers listeners via `subscribe(listener)`
+ handles unregistering of listeners

```
import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)
```
Now, we can dispatch some actions:
```
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)) // note that for now the `visibilityFilter` does not interact with `todos`

// Stop listening to state updates
unsubscribe()
```