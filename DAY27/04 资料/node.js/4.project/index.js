// Copyright (c) 2023 smable<316245279@qq.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//如何使用第三方包呢？
//1.确认一下JS的运行环境 如果是引入node_modules下统一管理的第三方包
const _ = require('lodash')
let arr = [1,2,3]
_.fill(arr,'peiqi')
console.log(arr)