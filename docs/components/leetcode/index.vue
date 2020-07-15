<!--
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2020-06-28 20:01:48
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-07-15 10:24:04
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
    
  },
  created () {
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

    function inorderTraversal(root) {
      if (!root.left)  {
        console
      }
    }

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
