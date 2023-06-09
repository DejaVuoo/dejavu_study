### html概念

#### 简介

```
超文本标记语言，主要用于描述一个页面
```

#### 思想

```
页面中有很多数据，不同的数据可能需要不同的显示效果，就可以使用标签把要操作的数据包裹起来，通过修改标签的属性值，来实现标签内数据样式的改变

本质就是一个容器的思想
一个标签就相当于一个容器，想要修改容器内的数据样式，只需要修改容器的属性值，就可以实现
```

#### 特点

```
语法非常宽松
标签名不区分大小写（建议使用小写——html5规范）
标签都是预定义好的，每个标签都有特定的含义（后端xml语言的标签可以自定义）
```

#### 语法

```
标签
	由一对尖括号括起来的关键字组成，又称为元素
属性
	为元素提供更多信息，可以改变元素的样式，以名称和值的形式
标签体
	开始标签和结束标签中间的所有内容，都叫着标签体，可以是一段普通的文本，也可以是其他标签
注释
	解释说明，给程序员看的  分行注释和块注释
特殊字符
	空格 &nbsp; 版权 &copy; 小于号	&lt;  大于号	&gt;
```

### 常见标签

#### 文档相关标签

```
<html>					---根标签
	<head>				---文档的头部
		<title></title> ---文档的标题
	</head>
	<body>				---文档的正文
	</body>
</html>
```

#### 文本相关标签

```
字体标签	
	font
标题标签
	h1 -- h6
段落标签
	p
```

#### 格式相关标签

```
水平线
 	hr
 换行
 	br
 粗体
 	b  strong
 斜体
 	i em
 下划线
 	u
 标记
 	mark
```

#### 列表相关标签

```
无序列表 ul(unorder list) 
          属性
            type
                disc	默认值。实心圆。
                circle	空心圆。
                square	实心方块。
          列表项
            li(list item)
            
有序列表 ol(order list)
         属性
           type
              a 表示小写英文字母编号
              A 表示大写英文字母编号
              i 表示小写罗马数字编号
              I 表示大写罗马数字编号
              1 表示数字编号（默认）

        列表项
            li(list item)
```

