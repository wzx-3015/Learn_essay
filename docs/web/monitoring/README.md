

# 设计篇（初步方案）

## 原起

  某天线上项目忽然异常了,经反馈发现页面数据异常。来来回回排查浪费了不少时间还影响了产品的体验。于是便拥有了异常检测。

## 为何？
在web应用复杂的今天，一个页面包含了海量的交互、复杂的表单、文字、链接.....，纵然有各种黑白盒测试来保驾护航，也无法保证项目上线后，面对各种浏览器、用户以及未知数据而出现问题。所以，面对一个互联网产品而言一个可靠的异常数据采集、上报、处理、监控、报警平台是非常有必要的。

## 前期准备
  第一版比较简单只需要进行pc端异常数据的采集（可能还不包含异常请求信息）
  1. 去调研了一下别人的方案与知识。一些开源的项目做简单的了解。
  2. 异常数据的采集
  3. 异常数据的分析

## 项目设计
1. 可扩展性（外置扩展）

    考虑到各个mvvm框架本身存在的异常监听事件并没有向上抛，所以针对不同的框架可能需要不同的扩展。项目本身只进行全局异常的监听以及上报，对外提供上报信息的接口(几乎不需要改动源码)

2. 可配置性

    上报频率可控、上报内容可控...

## 配置信息

字段|类型|含义|默认值
:--:|:--:|:--:|:--:
url |String|错误上报地址|""
mergeReport|Boolean|是否合并上报|true
delay|Number|上报频率（mergeReport为true可用）|600ms
httpError|Boolean|是否开启请求拦截|true

## 数据上报
### 上报策略
1. 实时上报
2. 合并上报
3. 上报频率

### 上报方式
new image || ajax

### 上报具体内容
字段|类型|含义
:--:|:--:|:--:
userAgent|String|浏览器信息
timesTamp|Date|发生错误时间戳
msg|String|错误信息
currentUrl|String|错误页面URL
screenSize|String|分辨率
column|Number|错误列
row|Number|错误行
targetName|String|错误文件名
title|String|错误页面标题
level|String|错误级别
projectType|String|客户端类型PC/Mobile

## 数据库存储设计
暂无

## 数据分析以及告警
  #### 监控分析告警平台
  #### 可视化统计平台
