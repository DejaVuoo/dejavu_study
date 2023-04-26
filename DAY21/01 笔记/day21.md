# 昨日回顾

```
let和const
    特点
        都有块级作用域
        没有变量提升（声明之前是不能使用）
        在同一个作用域中不能重复定义
        有暂时性死区
    使用
        const > let > var
        const一般用于对象类型，let一般用于基本数据类型

类和继承
    定义
        class类名{
        	constructor(参数列表){
        			this.属性名=属性值
        	}
        	方法名(){方法体}
        }
     继承
     	class B extends A
     关键字
		super代表父类
     静态
		使用static修饰，用类名直接调用 

解构赋值
	按照数据结构进行分解，赋给对应的变量
    
    const[参数列表] = 数组
	const{参数列表} = 对象

箭头函数
	(参数列表)=>{函数体}

数组遍历
    1,普通for循环 速度最快
    2,forEach 简单最常用
    3,for..of 遍历元素	一般用于遍历对象
    4,for..in 遍历索引	一般用于遍历对象

元素偏移量offset
    作用
        可以动态获取元素的位置和大小
    属性
        offsetparent
        offsetTop
        offsetLeft
        offsetWidth
        offsetHeight
    
    和style的区别
        offset
            可以得到任意样式中的样式值
            得到的数值是没有单位
            offsetwidth包含width+padding+border
			offsetwidth是一个只读属性，只能获取不能设置
        style
            只能得到行内样式表中的样式
			得到的是带有单位的字符串
			width获取的不包含padding+border的值
			width是可读写属性，可以获取也可以设置
		结论
            想获取元素的大小位置，用offset更方便
            想更改元素的属性，用style更方便	
```



# 元索可视区client

```
概念
	client:客户端，通过它的相关属性可以动态获取元素边框大小，元素大小等
方法
    element.clientTop
    表示一个元素的顶部边框的宽度，以像素表示。（上边框）
    element.clientLeft表示一个元素的左边框的宽度，以像素表示。
    element.clientHeight返回内容的可视高度（包含内边距，不包含边框，外边距和滚动条）
    element.clientwidth返回内容的可视高度（包含内边距，不包含边框，外边距和滚动条）
```



# 元素滚动scrol

```
概念
	scroll:滚动；通过它的相关属性可以动态获取元素的大小，滚动的距离

方法
    element.scrollHeight 返回整个元素的高度（包含内边距，不包含外边距和边框）
    element.scrollwidth 返回整个元素的宽度（包含内边距，不包含外边距和边框）
    element.scrollTop 返回元素的内容垂直滚动的像素值
    
    element.scrollLeft 返回元素的内容水平滚动的像素值

文档滚动的距离
    pagexOffset设置或返回当前页面相对于窗口显示区左上角的X位置,
    pageyOffset设置或返回当前页面相对于窗口显示区左上角的Y位置。
    pagexOffset和pageyOffset属性相等于scrollX和scrollY属性。
    这些属性是只读的.
```



# 三大系列总结

```
offset系列 经常用于获取元素的位置(OffsetLeft OffsetTop)
client系列 经常用于获取元素的大小(clientwidth clientHeight)
scroll系列 经常用于获取滚动的距离(scrollTop scrollLeft)
```



# 异常

```
两种处理方式
    1,抛出（甩锅）
    	throw关键字可以手动抛出，如果不处理的话，程序也会抛出错误，后续的代码无法执行
    2,处理（接盘）
		try..catch处理异常，处理之后，后续的代码可以正常执行，提高程序健壮性	

处理异常的格式
        try{
        	...	//异常的抛出
        }catch(e){
        	...	//异常的捕获与处理
    	}finally{
    		...	 //结束处理
        }
        
        
       
```



# promise