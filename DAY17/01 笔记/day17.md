# 昨日回顾

```
操作节点
	属性
        firstchi1d第一个子节点
        chi1dren子节点集合
		parentNode父节点
	添加节点
        appendchild()后面添加
        insertBefore()前面添加
    删除节点
        removechild()删除子节点

    
常见事件
	点击事件
   	 	click
    焦点事件
    	focus blur
    鼠标移入移出
    	mouseover mouseout
    鼠标移动
    	onmousemove  鼠标被移动。
   
    键盘事件
    	keydown keyup keypress(监听大小写)
    页面加载事件
    	load
    页面滚动事件
    	onscroll 当文档被滚动时发生的事件。
    内容改变事件
        onchange该事件在表单元素的内容改变时触发(<input>,<keygen>,<se1ect>,和<textarea>)
       
    表单提交事件
        onsubmit	表单提交时触发

事件高级
    两种注册方式
        1,传统注册方式：on开头的属性赋值：本质就是设置元素的属性
        2,监听注册方式：addEventListener()注册：本质是调用方法
    
    事件流三个阶段（先捕获后冒泡）
        事件捕获阶段：网景提出，根节点->事件源（由外层向内层）进行事件传播
        当前目标阶段
        	事件冒泡阶段：微软提出，事件源->跟节点（由内层向外层）进行事件传播
    
    事件对象
        概念
        	触发事件的时候，就会产生一个事件对象，这个对象就包含了当前事件的所有信息
        属性
            target	返回触发此事件的元素（事件的目标节点）。

            type	返回当前Event对象表示的事件的名称。

            keycode	返回onkeypress事件触发的键的值的字符代码
        
        方法
            preventDefault()	通知浏览器不要执行与事件关联的默认动作。
            stopPropagationO	不再派发事件。

	事件委托
        也叫事件代理，将原本需要绑定子元素的响应事件，委托给父元素，由父元素来响应
        原理：利用事件冒泡
        好处：可以减少事件注册，节省内存占用，可以给新增的元素动态的添加事件
```



# 鼠标事件对象

```
目的
	为了获取鼠标的位置
属性
    c1ient:表示鼠标在可视区域的x和y轴坐标
    page:鼠标在页面文档的x和y轴坐标
    screen:鼠标在电脑屏幕的x和y轴坐标
```



# BOM简介

```
概念
	浏览器对象模型Browser object Mode1
作用
    使Javascript有能力与浏览器"对话"
    比如弹框新建窗口跳转其他页面实现定时效果
组成
    window 窗口对象。它表示浏览器窗口。
    location 地址栏对象用于获得当前页面的地址(URL),并把浏览器重定向到新的页面。
	history	历史记录对象	包含浏览器的历史
	screen	屏幕对象	包含有关用户屏幕的信息。
	navigator	浏览器对象	包含有关访问者浏览器的信息。



```

# Window对象

```

```



# Location对象

```
概念
	地址栏对象，可以实现刷新和跳转
属性
    href
    	设置（可以实现跳转）
        	location.href = 新的地址
        获取
            location.href
方法
	re1oad()刷新
```



# History对象