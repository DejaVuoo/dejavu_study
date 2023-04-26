# day4

### 昨日回顾	

```
表格标签
	table
		border
		height
		width
		a1ign相对于周围元素的对齐方式
	tr
		a1ign行内容的对齐方式
	td
		co1span跨列
		rowspan跨行
	th
		在td基础上加粗或者居中
css基本语法
	概念
		层叠样式表
	作用
		设置样式
		布局控制
	组成
		选择器
		常见属性
	引入方式
		行内样式
		内部样式
		外部样式
 css选择器
	基本选择器
		id选择器
		类选择器
		元素选择器
     扩展选择器
        并集选择器
        交集选择器
        后代选择器
        子选择器
        兄弟选择器
        属性选择器
		伪类选择器：hover
        伪类结构选择器
            first-child
            last-child
            nth-child(n)
```



### 常见属性入门

```
尺寸属性
	width
	height
背景属性
    background-color 背景颜色
    background-image 背景图片
字体属性
    font-size 字体大小
文本属性
    color 文本颜色
边框属性
	border
盒子模型
	margin 外边框	

```



### 字体相关属性

```
分开写
    font-sty]e字体样式
    font-weight字体粗细
    font-size字体尺寸
    font-fami1y字体系列
连写
    font font-style font-weight font-size font-family
```



### 文本相关属性

```
基本属性
    cofor文本颜色
    text-a1ign文本的对齐方式
    teXt-decoration文本装饰线
    Tine-height行高
    text-indent首行缩进
    
    line-height
      
      1,设置文本上下间距（行高）
        2,设置单行文本垂直居中
            
            注意
            1,在网页精准布局的时候，可以设置行高为1，来取消行高默认上下间隙
            2,和fot属性一起使用的时候，可能会被覆盖，一般将这个属性放在最后
    
    
元素对齐
    对于行级元素
        无论是内容的居中，还是自身相对父控件的居中，都需要通过父控件的teXt-a1ign来设置
    对于块级元素
    	内容的居中，通过自身text-a1ign来设置，自身相对父控件的居中，通过自身的margin来设置    
```



### 背景相关属性

```
基本属性
背景颜色
	background-color
背景图片
	background-image
背景重复度
	background-repeat
背景位置
	background-position
背景尺寸
	background-size
背景连写
	background:background-color background-image background-repeat background-position

颜色取值
    1,关键字
    2,rgb方式
    3,rgba透明度
    4,16进制
   
精灵图
    应用场景
    	将项目中用到的很多小图，合成一张大图，这个大图就叫做精灵图
    好处
		减少服务器发送图片的次数，提高页面的加载速度
	使用
        1,创建一个盒子(div)
        2,设置盒子的大小为要展示的图片的大小
        3,设置精灵图为盒子背景图片
        4,获取要展示的小图在精灵图上的坐标，取负值，设置到background-position,属性上
```



### CSS三大特性

```
层叠性
	概念
		后写的样式会覆盖先写的样式
	
	特点
		相同的样式会被覆盖，不同的样式会被叠加
继承性
	概念
	子元素会继承父元素的相关属性，可以在一定程度上减少代码
	应用
        1,给body设置font-siZe,统一页面默认文字的大小
        2,给u1设置1ist-sty1e:none;可以去掉无序列表中的小圆点
优先级
	概念
		不同的选择器具有不同的优先级，优先级高的选择器会覆盖优先级低的选择器
	规律
		继承<元素选择器<类选择器<id选择器<行内样式<！important
	注意点
        1,!important写在属性值的后面，分号的前面
        2,!important不能提升继承的优先级，只要是继承，优先级是最低的
        3,实际开发中不建议使用！important
```

