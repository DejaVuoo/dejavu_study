#### 昨日回顾

```
CSS新特性
	过渡
		transition
	位移
		transform:translate()
	旋转
		transform:rotate()
	渐变
		background-image:linear-gradient()
	动画
		定义动画
			@keyframe
		使用动画
			animation
	
flex布局
	概念
		弹性布局方式,没有脱标影响,快速布局页面
	和float区别
		1,子元素不会脱标
		2,布局属性写在父元素上
	组成
		弹性容器
		弹性盒子/元素
		主轴
		侧轴
	主轴对齐方式
		justify-content
			center
			space-between
			space-around
			space-evenly
	侧轴对齐方式
		align-items
			center
			stretch 拉伸
		align-self 某个子元素侧轴对齐方式
	子元素空间分配
		flex:数字 代表占据父控件剩余尺寸的份数
	子元素换行
		flex-wrap
	换行之后,行的显示的方式
		align-content
			center
			space-between
			space-around
			space-evenly
	修改轴向
		flex-direction:colum
	
		
```

#### flex详解

```
flex概念
	其实是一个复合属性由flex-grow,flex-shrink和flex-basis组成
flex-grow
	定义项目的放大比例,默认为0,即 如果父元素存在剩余空间,也不放大
flex-shrink
	定义项目的缩小比例,默认为1,即 如果父元素空间不足,项目将会缩小
flex-basis
	定下项目在分配多余空间之前,项目占据的主轴空间,默认是auto,即项目本身的大小
```

#### 页面布局顺序

```
从上往下,从左往右,从外向里
```

#### CSS书写顺序

```
重要性
	1,顺序不对的话,有可能会影响页面布局(line-height和font连写冲突)
	2,方便程序员维护,一般会把布局属性,这些重要的属性放在前面,次要,点缀的属性放在后面
属性书写的一般属性
	1,布局属性
		display float position
	2,盒子模型+背景
		width height background margin padding border
	3,文本内容属性
		color font text-align line-height
    4,点缀属性
    	border-radius 阴影(text-shadow) 光标小手(cursor)
```

#### 选择器使用

```
推荐使用类+后代选择器 一般后代选择器层级不要超过3个
```



#### 动态变量

```
通过:root选择器 和 var()函数实现

:root
	是一个伪类,表示文档根元素,所有的主流浏览器都支持
	在:root中声明的相当于是全局变量,只要当前页面引入了:root所在的文件
	就可以使用 var()函数 来引用
	
var()函数
	可以代替元素中任何属性中的值的任意部分,不能作为属性名,选择器或者其他除了属性值之外的值
	
使用
	:root{
		--blue:blue;
	}
	
在选择器中引用
	div{
		color:var(--blue)
	}
```

#### 项目环境搭建    

```
1,创建文件夹 self-intro 项目名
2,创建css文件夹用于存放css文件,images文件夹用于存放图片,index.html用来书写html页面
3,将css文件和图片复制到对应的文件夹中,favicon.ico放在项目根目录下
4,引入图标和css文件,font-awesome
```



#### object-fit属性

```
概念
	object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度。
	object-fit 一般用于 img 和 video 标签，一般可以对这些元素进行保留原始比例的剪切、缩放或者直接进行拉伸等。
	
取值
	fill	默认，不保证保持原有的比例，内容拉伸填充整个内容容器。	尝试一下 »
    contain	保持原有尺寸比例。内容被缩放。	尝试一下 »
    cover	保持原有尺寸比例。但部分内容可能被剪切。	尝试一下 »
    none	保留原有元素内容的长度和宽度，也就是说内容不会被重置。	尝试一下 »
    scale-down	保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两			个之间谁得到的对象尺寸会更小一些。
```

