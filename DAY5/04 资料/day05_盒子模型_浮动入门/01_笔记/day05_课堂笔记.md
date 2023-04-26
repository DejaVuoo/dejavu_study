#### 昨日回顾

```
常见属性
	尺寸属性
		width
		height
	字体属性
		font-size
	文本属性
		color
	背景属性
		background-color
		background-image
	边框属性
		border
	盒子模型
		margin

字体属性详解
	分开写
		font-style
		font-weight
		font-size
		font-family
	连写
		font:font-style  font-weight font-size/line-height font-family

文本属性详解
	color
	text-align
	text-decoration
	text-indent
	line-height  设置行间距,设置单行文字垂直居中

背景属性详解
	分开写
		background-color
		background-image
		background-repeat
		background-position
		background-size
	连写
		background: color image repeat position/size
		
CSS三大特性
	层叠性 
	继承性
	优先级
		继承 < 元素 < 类 < id  < 行内 < !important
```

#### 盒子模型

##### 概念

```
概念
	css中,万物皆盒子,把页面中的所有元素都抽成一个盒子,盒子是占据空间的,可以进行布局
	行级元素对应的就是行盒,块级元素对应的就是块盒
```

##### 行盒块盒互转

```
行级元素(行盒)
	不能独占一行,设置宽高没有效果,宽高是由内容决定

块级元素(块盒)
	独占一行,设置宽高是有效果的
	如果不设置宽度,默认跟父元素一样宽
	如果不设置高度,默认是由内容撑开
	
互转
	行级->块级  display:block
	块级->行级  display:inline
	行内块  display:inline-block(可以设置宽高,可以在一行显示)
```

##### 组成

```
边框	
	border
内边距
	padding 设置盒子边框和内容之间的间隙
外边距
	margin 设置盒子与盒子之间的间隙
```



#### 边框内边距

##### 边框

```
分开写
	border-width	指定边框的宽度
    border-style	指定边框的样式
    border-color	指定边框的颜色
    
连写
	border:border-width  border-style  border-color
	
设置单一方向上边框
	border+方位词
	
圆角
	border-radius
```

##### 内边距

```
概念
	设置边框和内容区域的距离
取值
	可以1-4个取值,顺时针方向赋值,如果某一边没有值,看对面
单一方向
	padding-方位词
```



#### 盒子尺寸问题

##### 边框对尺寸的影响

```
现象
	设置边框,盒子会被撑大
原因
	盒子宽度 = 左边框宽度 + 内容宽度 + 右边框宽度 
解决
	手动内减(根据计算的结果在内容区域手动的将内容区域的宽高减去)
```

##### 内边距对尺寸的影响

```
现象
	设置内边距,盒子也会被撑大
原因
	盒子宽度 = 左边框宽度 + 左内边距 +  内容宽度 + 右内边距 + 右边框宽度  
解决
	手动内减(根据计算的结果在内容区域手动的将内容区域的宽高减去)
```

##### 使用自动内减解决

```
使用
	 box-sizing: border-box;//让盒子最终尺寸等于一开始设置的盒子的宽高
原理
	浏览器会根据设置,自动计算要减去的尺寸,在内容区域自动帮我们减掉
```

#### 外边距详解

##### 基本使用

```
概念
	设置盒子和盒子之间的距离
取值
	可以1-4个取值,顺时针方向赋值,如果某一边没有值,看对面
单一方向
	margin-方位词
```

##### 清除内外边距应用

```
应用场景
	浏览器会为部分标签设置默认的margin和padding,其实我们是不需要的,一般在项目开始之前,就需要清除这些标签的默认样式
	
例如
	body标签的默认margin
	p标签的默认上下margin
	ul标签的默认上下margin和padding-left
	
京东的处理方式
	* {
        margin: 0;
        padding: 0;
    }
    
淘宝的处理方法
	blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
```



#### 外边距情况分析

##### 外边距正常情况

```
场景
	水平布局的盒子,左右margin正常,互不影响
结果
	最终两者的间距为左右margin之和
```

##### 外边距合并情况

```
场景
	垂直布局的盒子,上下margin会合并
结果
	最终二者的间距为margin中的最大值
解决
	避免就好
	只需要给其中一个盒子设置margin即可
```

##### 外边距塌陷情况

```
场景
	互相嵌套的块级元素,子元素的margin-top会作用在父元素
结果
	导致父子元素一起向下移动
解决
	1,给父元素设置margin-top或者padding-top(分隔父子元素的margin-top)
	2,设置父元素的overflow: hidden
	3,转成行内块元素
	4,设置浮动
```



#### 伪元素

```
概念
	伪元素在html骨架中,并没有通过代码去实现,而是通过css模拟出来的
作用
	一般在页面中非主体内容可以使用伪元素
区别
	普通元素:通过html标签生成
	伪元素:通过css模拟出来的标签效果
	本质区别:是否在html中创建了新的元素
语法
	::before 在父元素位置的最前面添加一个伪元素
	::after 在父元素位置的最后面添加一个伪元素
注意
	1,必须设置content属性才能生效
	2,伪元素默认是行内元素
```

#### 标准流

```
概念
	又称文档流,浏览器默认采用一套排版规则,规定了元素如何排布
规则
	块级元素
		从上到下,垂直排布,独占一行
	行级元素
		从左往右,水平排布,不能独占一行,只有上一行空间不足才另起一行
```

#### 浮动

```
概念
	一种布局方式,就是让元素漂浮起来,可以实现元素水平排布
作用
	早期可以用于图文混排
	现在主要用于页面布局(块元素水平排布)
语法
	float
		left	元素向左浮动。
        right	元素向右浮动。
        none	默认值。元素不浮动，并会显示在其在文本中出现的位置。
```





