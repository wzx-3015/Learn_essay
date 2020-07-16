/*
 * @Description: 简单依赖收集demo
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2020-07-15 11:36:33
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-07-15 16:17:05
 */ 
// 存储依赖
let targetMap = new WeakMap()
let effectStack = []
/**
 * @description   收集依赖
 */
function track (target, key) {
  // reactive可能有多个,一个又有可能多个属性
  const effect = effectStack[effectStack.length - 1]

  console.log(target)

  if (effect) {
    let depMap = targetMap.get(target)
    if (!targetMap.has(target)) {
      depMap = new Map()
      targetMap.set(target, depMap)
    }
    let dep = depMap.get(key)
    if (!depMap.has(key)) {
      dep = new Set()
      depMap.set(key, dep)
    }

    // 添加依赖
    dep.add(effect)
    effect.deps.push(dep)
  }
}

/**
 * @description   触发更新
 */
function trigger (target, key, info) {
  const depMap = targetMap.get(target)
  if (!depMap) {
    return
  }

  const effects = new Set()

  const computedRunners = new Set()

  if (key) {
    let deps = depMap.get(key)
    deps.forEach(effect => {
      if (effect.computed) {
        computedRunners.add(effect)
      } else [
        effects.add(effect)
      ]
    })
  }

  computedRunners.forEach(computed => computed())
  effects.forEach(effect => effect())
}


/**
 * @description  副作用
 */
function effect(fn, option = {}) {
  // computed 是一个特殊的effect
  let e = createReactiveEffect(fn, option)

  if (!option.lazy) {
    // lazy 决定是不是首次执行effect
    e()
  }
  return e
}

function createReactiveEffect (fn, option = {}) {
  const effect = function effect(...args) {
    console.log(args)
    return run(effect, fn, args)
  }

  effect.deps = [] // 为了后续清理  以及缓存
  effect.computed = option.computed
  effect.lazy = option.lazy

  console.dir(effect)
  console.log('targetMap', targetMap)
  return effect
}

function run (effect, fn, args) {
  if (effectStack.indexOf(effect) === -1){
    try {
      effectStack.push(effect)
      return fn(...args)
    } finally {
      effectStack.pop()
    }
  }
}

const baseHandle = {
  get (target, key) {
    const res = target[key]
    // 收集依赖
    track(target, key)
    return res
  },
  set (target, key, val) {
    const info = {
      oldValue: target[key],
      newValue: val
    }

    target[key] = val // Reflect.set

    // 触发更新
    trigger(target, key, info)
  }
}

/**
 * @description   响应式数据
 */
function reactive (target) {
  const observerd = new Proxy(target, baseHandle)
  return observerd
}


/**
 * @description  计算属性
 */
function computed (fn) {
  // 特殊的effect
  const runner = effect(fn, {computed: true, lazy: true})

  return {
    effect: runner,
    get value() {
      return runner()
    }
  }
}