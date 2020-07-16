
# 2020/07

<leetcode />

## 1.给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

::: tip 示例
输入：s = 7, nums = [2,3,1,2,4,3]

输出：2

解释：子数组 [4,3] 是该条件下的长度最小的连续子数组。
:::

::: details  暴力求解 --> 双重循环
```js
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    // 合计值
    let sum = 0
    const int_max = Number.MAX_SAFE_INTEGER
    const len = nums.length
    let ans = int_max
    for (let i = 0; i <= len; i++) {
      for (let j = i; j <= len; j++) {
        // 记录合计值
        sum+= nums[j]

        if (sum >= s) {
          // 对比取最小值
          ans = Math.min(ans, j - i + 1)
          sum = 0
          break
        }
      }
    }

    return  ans === int_max ? 0 : ans
};
```
:::

::: details  参考求解 -->  滑动窗口
```js
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    const int_max = Number.MAX_SAFE_INTEGER
    let left = 0, sum = 0, ans = int_max
    for (let right = 0, len = nums.length; right < len; right++) {
      // 记录合计值
      sum += nums[right]
      // 满足条件，收缩左指针
      while(sum >= s) {
        // 收缩之前，取最小值  
        ans = Math.min(ans, right - left + 1)
        sum -= nums[left++]
      }
    }

    return ans === int_max ? 0 : ans
};
```
:::


## 2.在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

::: tip 示例
输入: [3,2,1,5,6,4] 和 k = 2

输出: 5
:::

::: details  解 --> es6 排序
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // 从大到小进行排序
  let sortArray = nums.sort((a, b) => b - a)
  return sortArray[k - 1]
};
```
:::

## 3.广度与深度优先遍历

::: tip 示例数据
```js
const data = [
  {
    name: 'a',
    children: [
      { name: 'a-1', children: [{ name: 'a-1-1' }] },
      { name: 'a-2', children: [{ name: 'a-2-1' }] },
      { name: 'a-3', children: [{ name: 'a-3-1' }] },
    ],
  },
  {
    name: 'a1',
    children: [
      { name: 'a1-1', children: [{ name: 'a1-1-1' }] },
      { name: 'a1-2', children: [{ name: 'a1-2-1' }] },
      { name: 'a1-3', children: [{ name: 'a1-3-1' }] },
    ],
  }
]
```
:::

::: details  广度优先遍历
```js
function dfs (data) {
  let result = []
  let queue = data
  while (queue.length > 0) {
    [...queue].forEach(child => {
        queue.shift();
        result.push(child.name);
        child.children && (queue.push(...child.children));
    });
  }
  return result
}

// 输出结果
["a", "a1", "a-1", "a-2", "a-3", "a1-1", "a1-2", "a1-3", "a-1-1", "a-2-1", "a-3-1", "a1-1-1", "a1-2-1", "a1-3-1"]
```
:::


::: details  深度优先遍历
```js
function dfs (data) {
  let result = []
  data.forEach(val => {
    result.push(val.name)
    if (val.children && val.children.length) {
      result.push(...dfs(val.children))
    }
  })
  return result
}

// 输出结果
["a", "a-1", "a-1-1", "a-2", "a-2-1", "a-3", "a-3-1", "a1", "a1-1", "a1-1-1", "a1-2", "a1-2-1", "a1-3", "a1-3-1"]
```
:::

## 4.给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

::: tip 示例
给定如下二叉树，以及目标和sum=22
```js
let treeNode = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}
```
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
:::

::: details  参考求解 -->  递归余值 是否为0
```js
/**
 * @param {Object} root
 * @param {number} sum
 * @return {Boolean}
 */
hasPathSum (root, sum) {
  if(!root) return false

  // 遍历到叶子节点，判断余值是否为零
  if (!root.left && !root.right) {
    return (sum - root.val) === 0
  }

  // 递归  sum 每次减去该节点的左节点、右节点
  const left = hasPathSum(root.left, sum - root.val)
  const right = hasPathSum(root.right, sum - root.val)

  return left || right
}
```
:::

## 5.二叉树的遍历

::: tip 示例数据
```js
let treeNode = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
          right: null
      },
      right: null
    }
  }
}
```
:::

### 二叉树前序遍历 -> 前序遍历首先访问根节点，然后遍历左子树，最后遍历右子树。
::: details 参考求解
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description  二叉树前序遍历
 */
function preorderTraversal(root) {
  if(!root) return []
  let array = []

  // 左右节点不存在时代码处理最深层节点
  if (!root.left && !root.right) {
    // 数据合并
    return [...array, root.val]
  }

  // 数据合并
  array = [...array, root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]

  return array
}

// 输出: [1, 2, 3, 4, 5]
```
:::


### 二叉树中序遍历 -> 中序遍历是先遍历左子树，然后访问根节点，然后遍历右子树。
::: details 参考求解
```js
/**
 * @description   二叉树中序遍历(利用栈陷入后出)
 */
function inorderTraversal(root) {
  let result = []
  let rootTree = root
  let stack = []
  while(rootTree || stack.length > 0) {
    while(rootTree) {
      stack.push(rootTree)
      rootTree = rootTree.left
    }

    rootTree = stack.pop()
    result.push(rootTree.val)
    rootTree = rootTree.right
  }

  return result
}
```
:::
