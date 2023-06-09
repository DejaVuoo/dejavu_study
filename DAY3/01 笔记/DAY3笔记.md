# 昨日回顾

```
行级元素
	font strong em span
块级元素
	h1 p ul ol div
常见的标签
	文档相关标签
		htm1 head body
	文本相关标签
		font p h1
	格式相关标签
		br hr strong em
	列表相关标签
		ul ol li
	图片媒体标签
		img
	超链接标签
		a
	布局相关标签
		header main footer aside nav section
	表单相关标签
		form标签 定义表单提交的范围和提交方式，提交地址
			action提交地址
			method提交
				get数据拼接在地址栏后面，提交少量数据
				post数据保存在请求体中，提交大量数据
		
		input标签
			type
				text
				password
				radio
				checkbox
				file
				submit
				reset
				button---现在直接使用button来定义按钮
			 checked
            	checked
		se1ect标签
		 option选择项标签
			selected
				selected 默认选中
		
		textarea标签
			co1s宽度
			rows高度
		
		通用属性
			name
				可以将数据提交到后台
				可以对单选和复选进行分组
			value
				可以设置submit,reset,button上面的默认文字
				设置文本框，密码框的默认内容
				可以帮助后台区分到底选择了单选和复选框的哪个选项
				可以设置下拉选择框提交到后台的内容，否则使用的就是标签体中的内容
			
			label可以关联输入项，实现点击label,光标聚焦到输入项，提高用户体验
			button定义一个按钮，设置type的值，实现提交或者重置功能
		
		
```

# 表格标签

```
		   table 定义表格
				border边框（设为1,有边框）
				width宽度
				height高度
				align表格相对于周围元素的对齐方式
				cellpadding规定单元边沿与其内容之间的空白
				celllspacing规定单元格之间的空白。
			tr 定义表格中的行
				align定义表格行的内容对齐方式
			
			td 定义表格中的单元格
			
			th 定义表头（就是在td的基础上居中并且加粗）
			
			需求
				1,整个表格居中
				2,表格边框重合
				3,表格中行内容是居中
```



# CSS慨念及入门

### 概念

```
层叠样式表，用于设置样式，布局控制(主流布局方式 div+css)
```

### 组成

```
选择器
	用于选择页面中的元素，进而控制样式
属性
	用于设置样式，控制布局
```



### 区别

```
和html属性控制样式的区别
	1、css更加的专业，可以实现html属性实现不了的样式
	2、可以实现标签和样式的分离，提高样式的重用性，提高了开发效率
```



# CSS引入方式

### 行内样式

```
概念
	使用style属性，直接在html标签上添加样式，也叫内联样式
特点
	简单，耦合性强，不利于代码和样式的分离，没有复用性	
```

### 内部样式

```
概念
	使用style标签，结合css选择器，给元素添加样式
特点
	实现了htm1代码和样式的分离，可以在当前页面进行复用
```

### 外部样式

```
概念
	将css样式抽取到一个css文件中，然后通过link标签在页面中引入
特点
	实现了html代码和样式的分离，可以在多个页面进行复用，可以统一网站的风格
```

### 三种引入的优先级

```
行内样式优先级最高，因为它只为这一行服务
内部样式和外部样式优先级是一样的，谁最后解析，显示谁
```



# CSS基本选择器

### id选择器

```
概念
	通过d的值来选择元素，一般选择的是唯一一个元素
语法
	#id值	
```

### 类选择器

```
概念
	通过c1ass属性的值来选择元素，一般选择的是一批元素（最常用）
语法
	.c1ass属性值
```

### 元素选择器

```
概念
	通过标签名来选择元素，一般选择的是一批元素
语法
	标签名
```

### 基本选择器优先级

```
行内样式>1d选择器>类选择器>元素选择器
结论：越是具体的优先级越高，越是通用模糊的优先级越低
```



# CSS扩展选择器

### 并集选择器

```
作用
	选择多个符合条件的元素
语法
	选择器a,选择器b
```



### 交集选择器

```
作用
	选择满足所有条件的元素
语法
	选择器a选择器b
```

### 后代选择器

```
作用
	选择某一个元素下符合条件的后代元素
语法
	选择器a选择器b
```

### 相邻兄弟选择器

```
作用
	选择某一个元素相邻的下一个元素
语法
	选择器a+选择器b
```

### 属性选择器

```
作用
	通过属性来选择元素
语法
	[属性名=属性值]
```

### 伪类选择器

```
作用
	CSS伪类是用来添加一些选择器的特殊效果。
语法
    a:1ink{co1or:#FF0000;}/%未访问的链接*/
    a:visited{co1or:#00FF00;}/%已访问的链接*/
    a:hover{co1or:#FFO0FF;}/*鼠标划过链接*/
    a:active{co1or:#0000FF;}/÷已选中的链接*/
```

### 伪类结构选择器

```
概率
	不需要在html中添加额外的属性(id,class),直接根据元素在html中的结构关系来选择元素
区别
	普通选择器：在htm1结构中有标识，1d选择器，类选择器，他们在htm1中都有额外的属性
	伪类选择器：在htm1结构中没有标识，根据逻辑上的关系来选择元素
语法
	选择一个
        first-child
        last-child
        nth-child(n)
    	匹配父元素中第n个元素，可以是一个数字，关键字，公式
    选择多个
        n是数字
        从1开始，代表第n个元素
        n是关键字
        奇数odd偶数even
        n是公式
    	使用公式(an+b)a代表一个循环的大小，N是一个计数器（从0开始），以及b是偏移量。
        2n+1奇数
        2n偶数
        8618
        -n+5前5个
    	n+5第5个往后	
```



# CSS基本属性了解