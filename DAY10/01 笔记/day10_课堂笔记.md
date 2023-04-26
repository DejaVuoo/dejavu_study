#### html+css回顾

```
html
	概念
		超文本标记语言
	作用
		搭建页面的骨架
	使用
		文档相关标签
		文本相关标签
		格式相关标签
		列表相关标签
		超链接标签
		图片媒体标签
		表单标签
			form input select textarea
		表格标签
			table tr td th
css
	概念
		层叠样式表
	作用
		设置样式,布局控制
	使用
		选择器
			基本选择器 
				id > 类 > 元素
			扩展选择器
				并集 交集  后代 子选择器 兄弟 属性
			伪类选择器
				:hover ::before :firstChild
		常见属性
			尺寸相关
				width height
			字体相关属性
				font
			背景相关属性
				background
			文本相关属性	
				color
				text-align
				line-height
				text-indent
				text-decoration
			盒子模型
				border
				padding 
				margin
					外边距合并 外边距塌陷
			浮动
				作用
					实现元素水平排布
				使用
					float
				特点
					脱标
				清除浮动
					设置高度
					额外标签
					单伪元素
					双伪元素
			定位 
				作用
					元素层叠效果,固定显示
				使用
					position
				分类
					相对定位
					绝对定位
					固定定位
			flex
				作用
					水平排布元素,避免浮动脱标的影响,弹性的布局方式
				使用
					display:flex
				水平方向
					justify-content
				垂直
					align-items
				换行
					flex-wrap
				换行之后,行的显示
					align-content
				修改轴向
					flex-direction
			
			grid
				概念
					网格布局
				使用
					display: grid;
				属性
					grid-template-rows:
					grid-template-columns: 
				跨行跨列
					grid-column-start: 
            		grid-column-end:
            		grid-row-start: 
            		grid-row-end: 
				
```

#### JS概念及入门

```
概念
	一种运行在客户端的脚本语言 (nodejs就是运行在服务器端的js)
作用
	动态控制页面元素的样式
	表单校验
	页面特效(轮播图)
	服务端的开发(nodeJs)
组成
	ECMAScript 基础语法(数据类型,变量,运算符,内置对象)
	DOM 文档对象模型(对html文档操作,动态的添加或者删除元素,修改元素的样式)
	BOM 浏览器对象模型(弹框,窗口的打开和关闭,定时器)
入门
	1,内嵌式
		在html页面创建一个script标签,将js代码放进去
	2,外链式
		新建一个js文件,将js代码放进去,在html页面中使用script标签引入
		好处:可以在多个页面中引入,提高代码的复用性
		
注释
	单行注释 //
	多行注释  /* */
	
输入输出
	输入
		prompt()
	输出
		alter()
		console.log()
		document.write()
```



#### 变量

```
概念
	本质是内存中存取数据的那块空间(容器)
作用
	存储变化的数据
使用
	1,先声明在赋值
	2,声明同时并赋值
注意点
	变量必须以字母开头
    变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
    变量名称对大小写敏感（y 和 Y 是不同的变量）
    不能是关键字或者保留字
    尽量见名知意
```



#### 数据类型

```
概念
	给数据进行分类,方便管理
分类
	基本数据类型(值类型)
        字符串（String）、
        数字(Number)、
        布尔(Boolean)、
        空（Null）、
        未定义（Undefined）
	
	对象类型(引用类型)
		对象(Object)、
		数组(Array)、
		函数(Function)，
		正则（RegExp）
		日期（Date）

转换
	强制转换
		String() 将数据转成字符串
		Number() 将数据转成数字
		Boolean() 将数据转成true和false
	自动转换
		任意类型的数据+字符串,执行的都是字符串的拼接
		true,false,null在跟数字进行运算的时候,会被转成数字
		
	对于+运算的规律
        如果+两端有一端是字符串,就会执行字符串的拼接
        如果+两端都不是字符串,就会默认使用Number()进行强转,然后再执行加法运算
```



#### 运算符

```
算术运算符
	+ - * /  %(求两数相除的余数)

自增自减运算符
    规则
    	++在前,先变量的值+1,然后在返回计算后的结果
    	++在后,先把变量的值返回作为表达式的值,然后变量再加1
    结论   
    	++在前,先加1后运算,++在后,先运算后加1
    	不管++在前还是在后,最终变量的值都会加1

比较运算符
	> <  >= <=  !=  ==
	结果是boolean类型

逻辑运算符
	&& ||  !
	结果是boolean类型
```

