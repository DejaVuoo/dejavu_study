export let a = 1
export let c = 10
//  这两个方式作用相等
/* 	let a = 1
		let c = 10 
		export{a,c} //将a和x这2个变量导出去 分别导出/暴露
*/
function fn (){
	return a + c
}


export default fn //默认导出