//如何使用第三方包呢？
//1.确认一下JS的运行环境 如果是引入node_modules下统一管理的第三方包  
const _ = require('lodash') //直接写lodash 且下划线_在圈子里指代lodash方法包
let arr=[1,2,3]
_.fill(arr,'dejavu')
console.log(arr)

let add = _.add(8,5)
console.log(add)