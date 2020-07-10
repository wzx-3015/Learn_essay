/*
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2020-07-03 18:23:45
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-07-06 13:44:34
 */ 
const {task} = require('gulp');
const path = require('path');
const del = require('del');
const ftp = require('gulp-sftp');
var {execSync} = require('child_process');

function defaultTask(cb) {
  // place code for your default task here
  execSync("vuepress build docs")
  cb();
}

exports.default = defaultTask