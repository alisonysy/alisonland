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
    default: //important to return the previous state for any *unknown* action.
      return state
  }
}
```