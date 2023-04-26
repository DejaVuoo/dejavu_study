// Copyright (c) 2023 smable<316245279@qq.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
//小王开发的 导出的模块
export let a = 1
export let x = 10

function fn (){
    return a + x
}
// export {a,x} //将a和x这2个变量导出去 分别导出/暴露
export default fn //默认导出
