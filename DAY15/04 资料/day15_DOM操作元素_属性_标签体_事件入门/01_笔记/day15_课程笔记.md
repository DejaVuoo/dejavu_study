#### 昨日回顾

```
ECMAScript
	数据类型
	变量
	运算符
	流程控制语句
		选择语句
		循环语句
	数组
	函数
	面向对象
	内置对象
		Math 
		Date
		Number
		Array
			属性
				length
			方法
				添加删除
					unshift() shift()  push() pop()  splice()
				遍历操作--参数都是函数
					forEach() find() filter() every() some() map() sort()
				拼接截取
					concat() join() slice()
				反转转换
					reverse() toString()
				查找展开
					indexOf() lastIndexOf() include() ...伪数组		
		String
			属性
				length
			方法
				查找
					indexOf() lastIndexOf() charAt()
				截取替换
					subStr() subString() replace() replaceAll()
				切割转换
					split() toUpperCase() toLowerCase()
				判断修剪
					startsWith() endsWith() trim()
		正则
			规则
                []  表示出现的范围
                {x,y} 表示出现的次数  +:至少一次 ?:0次或者一次 *:任意次
                /d 数字 /D非数字 /w /W
			创建
				new RegExp('字符串')   / /创建
			调用方法
				reg.test(要匹配的字符串)
		json
			概念
				一种轻量级的数据交换格式,本质是一个字符串,用于服务端向客户端传输数据
			互转
				JSON.parse() 将json转成js对象
				JSON.stringify() 将js对象转成json字符串
```

#### DOM概念

```
概念
	文档对象模型(Document Object Model)
	
文档对象模型
	当网页被加载时，浏览器会创建页面的文档对象模型
	当前的html文档会被构造成对象的树(其实就是将里面的所有标签都封装成一个个对象)
	DOM 树:根据html结构,生成的一个树形结构,可以理解为由对象组成的树
	
DOM操作页面元素的思想
	就是将html页面中的所有组成部分(标签,属性,标签体,注释)都抽成对象,用面向对象的方式来操作
	因为对象中有属性和方法,比单纯操作字符串方便的多
	
DOM作用
	通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。
	JavaScript 能够改变页面中的所有 HTML 元素
	JavaScript 能够改变页面中的所有 HTML 属性
	JavaScript 能够改变页面中的所有 CSS 样式
	JavaScript 能够对页面中的所有事件做出反应
	
Document 对象
	是js的一个内置对象,不需要我们去创建,直接写就可以使用
    当浏览器载入 HTML 文档, 它就会成为 Document 对象。
    Document 对象是 HTML 文档的根节点。
    Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。
    
HTML DOM 节点
	在 HTML DOM (Document Object Model) 中 , 每一个元素都是 节点:
    文档是一个文档节点。
    所有的HTML元素都是元素节点。
    所有 HTML 属性都是属性节点。
    文本插入到 HTML 元素是文本节点。
    注释是注释节点。
```



#### DOM获取元素

```
获取单个元素
	document.getElementById()	返回对拥有指定 id 的第一个对象的引用。
获取多个元素
	document.getElementsByClassName()	返回文档中所有指定类名的元素集合
	document.getElementsByTagName()	返回带有指定标签名的对象集合。
H5新增的
	document.querySelector()	返回文档中匹配指定的CSS选择器的第一元素
	document.querySelectorAll() 返回文档中匹配的CSS选择器的所有元素节点列表
```



#### 事件入门

```
三要素
	1,事件源(按钮)
	2,事件(其实是一个动作:点击动作)
	3,事件处理函数(事件发生之后,需要做的事情,比如弹框)
	
	以点击事件(点击按钮,弹出消息框)
		事件源:按钮
		事件:点击动作
		事件处理函数:点击之后,弹出消息框(本质就是执行了一个方法)
三个步骤
	1,写一个事件源
	2,写一个监听器(事件处理函数)
	3,绑定监听器和事件源(通过一个属性,将二者绑定起来)
```



#### DOM操作属性

```
设置
	元素对象.属性名 = 属性值
获取
	元素对象.属性名
应用场景
	操作图片的src属性(灯泡的切换,轮播图)
	操作input标签的value属性(书架案例)
	操作input标签的checked属性(复选框的选中)
```



#### DOM操作标签体

```
innerHTML
	设置
		元素对象.innerHTML = 新值
	获取
		元素对象.innerHTML
		
innerText(操作的是纯文本)
	设置
		元素对象.innertext = 新值
	获取
		元素对象.innertext
```



#### DOM操作样式

```
单独设置样式
	元素对象.style.样式属性名称 = 值

批量设置样式
	
	方式一:不推荐,有可能会覆盖原有属性
		元素对象.className = 属性值
		
	方式二:使用classList
		元素对象.classList.add(属性名)
		
		classList的方法
			add(class1, class2, ...)	在元素中添加一个或多个类名。
			remove(class1, class2, ...)	移除元素中一个或多个类名。
			toggle(class, true|false)	在元素中切换类名。
```

