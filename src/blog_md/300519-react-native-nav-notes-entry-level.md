### The most common - `createStackNavigator`
`CreateStackNavigator` is a function that takes a route configuration object and an options object and returns a React component.
React Navigation's stack navigator provides a way for your app to transition between screens and manage *navigation history*. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state.

A <span class="postDefine">screen component</span> is a component that we use in our route configuration.
```
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,    // <----
    },
    Details: {
      screen: DetailsScreen, // <----
    },
  },
  {
    initialRouteName: 'Home',
  }
);
```

### `createSwitchNavigator` - only show 1 screen at a time
Often used in *authentication flow*.
By defautl:
+ Does not handle back actions
+ Resets routes to default state when switched away

**Syntax**
> `createSwtichNavigator(RouteConfigs,SwitchNavigatorConfig);`



## Navigating to a **sibling** screen
We call `this.props.navigation.navigate('routeName')` function:
```
class screenA extends React.Component{
  render(){
    return (
      <View>
        <button onPress={()=> this.props.navigation.navigate('screenB')} />
      </View>
    )
  }
}
```
+ If we call `this.props.navigation.navigate('routeName')` with a route name that we HAVEN'T defined on a stack navigator, nothing will happen.
+ Call `this.props.navigation.push('routeName')` to add a new route to the navigation stack, and we can call it to navigate to a route multiple times.

## Navigating back to the previous screen 
3 ways:
+ `this.props.navigation.goBack()`
+ `this.props.navigation.navigate('routeName')`
+ `this.props.navigation.popToTop()`
Once a screen is pushed onto the navigation stack, it will remain **mounted** unless it is popped out from the stack.
React Navigation emits events to screen components that subscribe to them. There are four different events that you can subscribe to: `willFocus`, `willBlur`, `didFocus` and `didBlur`.

## Passing parameters to a route
Syntax: `this.props.navigation.navigate('RouteName', { /* params go here */ })`
To read the params in the screen component, 2 ways:
+ `this.props.navigation.getParam(paramName, defaultValue)` the default value is the fallback content if no param value is available.
+ `this.props.navigation.state.params.xxx`

### Other links
+ Customise headers with the [`navigationOptions` static property](https://reactnavigation.org/docs/en/headers.html) on the screen components.