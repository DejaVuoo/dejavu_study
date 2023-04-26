// Copyright (c) 2023 smable<316245279@qq.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//使用node.js的内置模块
const fs = require('fs') //引入内置模块
fs.readFile('./1.txt',function(err,data){
   //err 表示读取文件错误的结果
   const res = data.toString()
   fs.writeFile('./2.txt',res,function(err){
    console.log(err)
   })
   // data 表示读取文件的内容 默认是buffer格式存储的 可以通过toString方法转为字符串
})
console.log(123)
//希望向2.txt里面写入 一句话 node.js真好学
// fs.writeFile('./2.txt','node.js真好学',function(err,data){
//     if(err){
//         console.err(err)
//     }
// })
//将1.txt的内容读取出来后写入2.txt