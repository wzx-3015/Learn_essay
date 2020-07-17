<!--
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2020-06-28 20:01:48
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-07-17 10:16:36
 -->
<template>
  <div class="leetcode">
  </div>
</template>
<script>
import Vue from 'vue'
export default { 
  name: 'leetcode',
  data () {
    return {
      aa: 12
    }
  },
  methods: {
    createNode (array) {
      const len = array.length
      let nodeArray = array
      let nodeTree = {}
      if (!array.length) {
        return nodeTree
      }

      // 计算得最少到几层二叉树
      let log2 = Math.log2(len)
      let layer = 0
      if (log2.toString().indexOf('.') > -1) {
        layer = parseInt(log2) + 1
      }


      if (layer === 1) {
        nodeTree.val = nodeArray.shift()
      }
    }
  },
  created () {
    let treeNode = {
      val: 1,
      left: {
        val: 6,
        left: {
          val: 7,
          left: null,
          right: null
        },
        right: {
          val: 8,
          right: null,
          left: null
        }
      },
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

    /**
     * @description   二叉树中序遍历（递归）
     */
    function inorderTraversal1 (root) {
      let result = []

      function inorder(root) {
        if (!root) {
          return null
        }

        inorder(root.left);
        result.push(root.val)
        inorder(root.right);
      }

      inorder(root)

      return result
    }

    console.log(inorderTraversal1(treeNode))


    /**
     * @param {TreeNode} root
     * @return {number[]}
     * @description  二叉树前序遍历
     */
    function preorderTraversal(root) {
      let array = []
      if(!root) return []

      if (!root.left && !root.right) {
        return [...array, root.val]
      }


      array = [...array, root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]

      return array
    }
  }
}
</script>
