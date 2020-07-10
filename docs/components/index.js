/*
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2020-03-09 14:35:25
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-06-29 18:44:42
 */ 
import foldBox from './foldBox/index.vue'
import loadingInit from './loading/index.js'
import leetcode from './leetcode/index.vue'

export default function (Vue) {
  Vue.component('foldBox', foldBox)
  Vue.component('leetcode', leetcode)
  Vue.use(loadingInit)
}