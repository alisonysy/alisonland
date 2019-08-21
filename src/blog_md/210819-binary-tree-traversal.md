举一个二叉树的栗子：
```
                20
          /           \
        10            23
      /   \          /  \
     8    15       21    76
      \    / \       \   / 
      9  14  17     22  42
             /         /  \
            16        33  56
```
写成JS的对象即为：
```js
root = {
  'left': {
    'left': {
      'right': {
        'val': 9
      },
      'val': 8
    },
    'right': {
      'left': {
        'val': 14
      },
      'right': {
        'left': {
          'val': 16
        }, 
        'val': 17
      }, 
      'val': 15
    }, 
    'val': 10
  },
  'right': {
    'left': {
      'right': {
        'val': 22
      },
      'val': 21
    },
    'right': {
      'left': {
        'left': {
          'val': 33
        },
        'right': {
          'val': 56
        },
        'val': 42
      },
      'val': 76
    }, 
    'val': 23
  }, 
  'val': 20
}
```

二叉树的遍历用*递归*实现的代码简单易懂，但递归性能消耗大；*非递归*实现中，运用到**栈**的概念

## 二叉树的前序遍历

所谓前序遍历(pre-order traversal)，即*从该节点开始，遍历左子节点，再到右子节点*

### 递归实现
```js
var preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val);
    preorderTraversal(root.left, array);
    preorderTraversal(root.right, array);
  }
  return array;
};
```

### 非递归实现

1. 遇到节点即访问当前节点，把当前节点的值push到最后结果的数组中；
2. 再把所有左子树入栈，直至左子树为空；
3. 此时当前节点为`undefined`/`null`的左子树a，当前栈中最后一个元素是当前`undefined`的左子树的父节点b。出栈后，令当前节点为父节点b(可能有，也可能没有右子树)，此时栈中最后一个元素该**父节点的父节点**d；
4. 此时已遍历父节点b的左子树和自身，应该到b的右子树c；
5. 此时右子树c为目标节点，重复`1, 2, 3, 4`

Note: 需要在访问完左子树后，在访问右子树**前**，把即将访问的右子树的所在节点**出栈**，否则将陷入无限循环访问右子树

```js
var preorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;
};
```

## 二叉树的中序遍历

中序遍历(in-order traversal)，指*先遍历左子节点，再到自身(中间)，再到右子节点*

### 递归实现
```js
var inorderTraversal = function (root, array = []) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
};
```

### 非递归实现

1. 左子树入栈，直至左子树为空；
2. 此时当前节点为`undefined`/`null`的左子树a，当前栈中最后一个元素是当前`undefined`的左子树的父节点b。出栈后，令当前节点为父节点b(可能有，也可能没有右子树)，此时栈中最后一个元素该**父节点的父节点**d；
3. 当确定没有左子树后，访问该节点b，把节点的值添加进最后结果的数组中；
4. 此时已遍历父节点b的左子树和自身，应该到b的右子树c；
5. 此时右子树c为目标节点，重复`1, 2, 3, 4`

Note: 需要在访问完左子树后，在访问右子树**前**，把即将访问的右子树的所在节点**出栈**，否则将陷入无限循环访问右子树

```js
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
```

## 二叉树的后序遍历

所谓后序遍历(post-order traversal)，即*先遍历左子节点，再到右子节点，再到自身(中间)*

### 递归实现
```js
var postorderTraversal = function (root, array = []) {
  if (root) {
    postorderTraversal(root.left, array);
    postorderTraversal(root.right, array);
    array.push(root.val);
  }
  return array;
};
```

### 非递归实现

1. 左子树入栈，直至左子树为空；
2. 此时当前节点为`undefined`/`null`的左子树a，当前栈中最后一个元素是当前`undefined`的左子树的父节点b，此时暂不出栈，但通过`stack[stack.length - 1]`获取与`stack.pop()`相同的元素，即栈的*最后一个*元素；
3. 目前为止，虽然访问了左子树，但未将左子树的值放入结果数组中；此时，访问右子树，在确定**没有**右子树或右子树**已经访问过**后，才把父节点b出栈，同时访问b，把b的值push到结果数组中，并**标记**b已经访问过；
4. 因为b已经*被访问过*，而此时的栈最后一个元素是b的父节点，此时需要访问b的父节点的*右子节点*。b作为其父节点的*左子节点*，无需再访问，因此把`current = null`，避免再进入`while`循环；
5. 取栈中最后一个元素作为当前节点，判断其有否右子节点，若有，继续`1, 2, 3, 4`，若无，继续出栈

```js
var postorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let last = null; // 标记上一个访问的节点
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack[stack.length - 1];
    if (!current.right || current.right == last) {
      current = stack.pop();
      result.push(current.val);
      last = current;
      current = null; // 继续弹栈
    } else {
      current = current.right;
    }
  }
  return result;
}
```