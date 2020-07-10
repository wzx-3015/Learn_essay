## 时间格式化

``` js
/**
 * @description                       格式化日期
 * @param  {Date}                     日期
 * @return {Promise}                  格式化后的日期字符串
 */
export function formatDateTime (date, format) {
  const mapping = {
    // 年
    'y+': date.getFullYear(),
    // 月份
    'M+': date.getMonth() + 1,
    // 日
    'd+': date.getDate(),
    // 小时
    'H+': date.getHours(),
    // 分
    'm+': date.getMinutes(),
    // 秒
    's+': date.getSeconds(),
  }

  new RegExp('(y+)').test(format) && (format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)))

  Object.entries(mapping).forEach(
    ([key, val]) =>
      new RegExp(`(${key})`).test(format) &&
      (format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? `${val}` : `${val}`.padStart(RegExp.$1.length, '0')
      ))
  )

  return format
}
```


## 防抖函数

```js
/**
 * @description                       将函数转成防抖动函数
 * @param  {Function}                 需要转成防抖动函数的函数
 * @param  {number}                   延迟时间（毫秒数）
 * @param  {boolean}                  是否执行第一次
 * @return {undefined}                无返回值
 */
export function debounce (fn, delay = 600, runFirstFn = true) {
  let timer = null

  return function (...rest) {
    // 清除定时器
    clearTimeout(timer)

    if (runFirstFn) {
      fn.apply(this, rest)
      runFirstFn = false
      return
    }

    // 设置定时器
    timer = setTimeout(fn.bind(this, ...rest), delay)
  }
}
```

## 节流函数

```js
/**
 * @description                       将函数转成节流函数
 * @param  {Function}                 需要转成节流函数的函数
 * @param  {number}                   间隔时间（毫秒数）
 * @param  {boolean}                  是否执行第一次
 * @return {undefined}                无返回值
 */
export function throttle (fn, delay = 600, runFirstFn = true) {
  let timer = null
  let timerStart

  return function (...rest) {
    const timeCurr = +new Date()

    clearTimeout(timer)

    if (!timer) {
      timerStart = timeCurr

      if (runFirstFn) {
        fn.apply(this, rest)
        runFirstFn = false
        return
      }
    }

    if (timeCurr - timerStart >= delay) {
      fn.apply(this, rest)
      timerStart = timeCurr
    } else {
      timer = setTimeout(fn.bind(this, ...rest), delay)
    }
  }
}
```

## 获取地址栏参数
```js
/**
 * 用于获取浏览器地址栏URL查询参数值
 * @param [string] paramKey 参数名称
 * @return [string] paramVal 参数值
 */
export function getQueryParam (paramKey) {
  const param = window.location.search.slice(1).split('&')

  let paramVal = ''
  param.forEach((element) => {
    const item = element.split('=')
    if (item[0] === 'from') {
      paramVal = decodeURIComponent(item[1])
    }
  })

  return paramVal
}
```