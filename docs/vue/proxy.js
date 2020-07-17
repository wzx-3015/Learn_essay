/*
 * @Description: 简单依赖收集demo
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2020-07-15 11:36:33
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-07-17 09:13:28
 */

 // 利用观察者模式实现依赖收集

 let activeEffcet = null

class Dep {
  constructor () {
    this.subs = new Set()
  }
  depend () {
    // 收集依赖
    if (activeEffcet) {
      this.subs.add(activeEffcet)
    }
  }
  notofy () {
    // 数据变化通知
    this.subs.forEach(effcet => effcet())
  }
}

function effect (fn) {
  activeEffcet = fn
  fn()
}

const dep = new Dep()

function ref (val) {
  let _value = val
  let state = {
    get value () {
      // 获取值，收集依赖
      dep.depend()
      return _value
    },
    set value (newCount) {
      // 修改通知dep 执行effect函数
  
      _value = newCount
      dep.notofy()
    }
  }
  return state
}

let state = ref(0)


effect(() => {
  console.log(state.value)
})


setInterval(() => {
  state.value++
}, 1000);
