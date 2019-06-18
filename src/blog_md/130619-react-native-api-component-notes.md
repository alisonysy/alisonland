### ScrollView
ScrollView和FlatList的区别：
+ ScrollView一次性渲染所有的子组件 -> 性能问题，而FlatList是lazy-loading，只有在当前视窗需要子组件时才会渲染

要求：
+ <ScrollView>本身或其父组件要有固定的高度(bounded height)，若非在自身设置固定高度，必须在(其自身?)及没有固定高度的父组件设置{flex:1}

### FlatList
支持header、footer和分界线(separator)

### SafeAreaView
用于在设备安全边界范围内渲染内容，目前只能iOS 11及以上版本的iOS设备。
<SafeAreaView>会自动添加padding，这反映了屏幕的物理限制。
使用：
用 **<SafeAreaView>** 把最顶层的view包裹，并且需要设置{flex:1}

### RefreshControl
用在<ScrollView>或<ListView>(*deprecated*)里面，其属性有：
+ `refreshing`(boolean) - 表明是否正在更新；它是一个controlled prop，需要在`onRefresh`的回调中设置为`true`才能正常运作
+ `onRefresh`(function) - 更新时调用

## Styling
每个组件是Flex Container。

自身充盈可用空间的情况：
+ 在自身设置`{flex:1/2...}`
+ 若含有已知高度的子组件，但**没有**设置高度或宽度时，该组件会充盈到子组件的高度，并**占满**可用的宽度