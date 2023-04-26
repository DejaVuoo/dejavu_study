# 一. CSS简介

## 1 CSS的基本概念

### 1) 什么是CSS

CSS(Cascading Style Sheets)  ，通常称为CSS样式表或**层叠样式表**

### 2) CSS的作用

CSS的作用就是用来规定每个HTML元素表现的样子, 比如

- 字体的大小
- 颜色
- 摆放位置...

> CSS也被称为`网页的化妆师`

![image-20201125092750318](http://image.brojie.cn/images/image-20201125092750318.png)

再比如, 如果说HTML是毛坯房的话, 加上CSS就是精装修房

![image-20201125093013926](http://image.brojie.cn/images/image-20201125093013926.png)

![image-20201125093052285](http://image.brojie.cn/images/image-20201125093052285.png)

随着web的发展, 出现一种非常重要的思想

> 结构(html)与样式(css)相分离

这样设计的好处, 实现代码的复用, 利用工程化开发.

比如, 老板觉得网站的风格不看好, 可以换一个"皮肤", 其实只需要修改css样式就可以了, 网站的结构和数据可以不变

### 3) CSS的书写位置

- 外联
- 内嵌
- 行内

在工作中最常见的方式是, 将CSS文件单独做为一个文件存储, 再通过`<link>`标签引入

在目前的学习阶段, 为了调试方便, 我们将CSS写在html文件的`<style>`标签中

行内几乎不用, 可以自行了解

| 样式表     | 优点                     | 缺点                     | 使用情况       | 控制范围           |
| ---------- | ------------------------ | ------------------------ | -------------- | ------------------ |
| 行内样式表 | 书写方便，权重高         | 没有实现样式和结构相分离 | 较少           | 控制一个标签（少） |
| 内部样式表 | 部分结构和样式相分离     | 没有彻底分离             | 较多           | 控制一个页面（中） |
| 外部样式表 | 完全实现结构和样式相分离 | 需要引入                 | 最多，强烈推荐 | 控制整个站点（多） |

### 4) CSS的基础语法

> 语法

```html
<head>
<style>
    选择器（选择的标签） { 
      属性1: 属性值1;
      属性2: 属性值2; 
      属性3: 属性值3;
    }
</style>
</head>
```

主要由 `选择器+声明块` 组成

> 示例

将h1的字体改成红色

```html
<style>
	 h1 {
	 	color: red;
	 }
</style>
```

# 二. 选择器

## 1 什么是选择器

> 选择器的主要作用就是从一堆元素中选出特定的符合要求的元素

![ax](http://image.brojie.cn/images/ax.png)

比如, 上图中有一堆小黄人, 现在需要统一改变单眼小黄人的颜色为红色, 该如何操作呢?

- 第一步: 选出所有的单眼小黄人
- 第二步: 修改颜色为红色

CSS的思想也是类似的

- 第一步: 通过选择器, 找出符合要求的HTML元素
- 第二步: 修改找出来的元素的属性

常见的选择器包括

- 元素选择器
- 类选择器
- id选择器

## 2 基本选择器

### 1) 元素选择器

> 作用

根据标签名, 将同一种标签元素选择出来

> 语法

```html
标签名 {
 属性: 值
}
```

> 示例

修改所有`p`标签的颜色为红色

```html
p*3>lorem10
```

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    将所有p标签的颜色改为红色
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
      consequuntur.
    </p>
    <p>
      Facere, earum eum voluptates explicabo aut tempora eveniet voluptate. Eos!
    </p>
    <p>
      Fugit cupiditate ea doloremque quidem obcaecati. Rerum quam explicabo
      quod.
    </p>
  </body>
</html>

```

### 2) 类选择器

> 作用

选择某一类元素, 该元素通过`class属性`指定

> 语法

```html
.类名 {
	属性: 值
}
```

> 示例

```html
div*5>lorem3
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>类选择器</title>
    <style>
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div>Lorem, ipsum dolor.</div>
    <div class="red">Facere, possimus laboriosam.</div>
    <div class="blue">Ducimus, ea perferendis!</div>
    <div class="red">Accusamus, accusantium dolores.</div>
    <div>Eius, eaque magni.</div>
  </body>
</html>
```

多类名使用空格隔开

![lei](http://image.brojie.cn/images/lei.png)

### 3) id选择器

> 作用

选择某一个元素, 该元素通过`id属性`指定

> 语法

```html
#id名 {
	属性: 值
}
```

> 示例

```html
<p id="username"></p>
```

### 练习

实现'Google'图标

提示

- 使用span让多个元素在同一行排列
- 使用class类选择器
- 使用color定义颜色
- 使用`font-size:100px`指定大小

![image-20201125101551642](http://image.brojie.cn/images/image-20201125101551642.png)

> 答案

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      span {
        font-size: 100px;
      }

      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
      .yellow {
        color: yellow;
      }
      .green {
        color: green;
      }
    </style>
  </head>
  <body>
    <div>
      <span class="blue">G</span>
      <span class="red">o</span>
      <span class="yellow">o</span>
      <span class="blue">g</span>
      <span class="green">l</span>
      <span class="red">e</span>
    </div>
  </body>
</html>

```

### 方法

更多选择器的用法, 查手册[CSS手册](https://www.w3school.com.cn/css/index.asp)

![image-20201125102033500](http://image.brojie.cn/images/image-20201125102033500.png)

## 3 复合选择器

### 1) 后代选择器

> 作用

选择某一个元素的**子孙后代**, 使用 **空格**

> 语法

```html
父选择器 子选择器 {
	属性: 值
}
```

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      nav li {
        color: red;
      }
    </style>
  </head>
  <body>
    <!-- 主导航 -->
    <nav>
      <ul>
        <li>Lorem.</li>
        <li>Nobis!</li>
        <li>Exercitationem?</li>
        <li>Voluptas.</li>
        <li>Nulla!</li>
      </ul>
    </nav>

    <!-- 新闻列表 -->
    <ul>
      <li>Lorem.</li>
      <li>Magni!</li>
      <li>Sed?</li>
    </ul>
  </body>
</html>
```

### 2) 并集选择器

> 作用

同时选择多个选择器, 使用 **逗号**

> 语法

```html
选择器1, 选择器2 {
	属性: 值
}
```

### 3) 交集选择器

> 作用

同时满足条件, 使用 **点号**

> 语法

```html
选择器1.选择器2 {
	属性: 值
}
```

现在有这样一个需求

h1和p都是应用的同一个类表示强调, 但是我们希望h1的强调是红色, p的强调是蓝色

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1.import {
        color: red;
      }
      p.import {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1 class="import">Lorem.</h1>
    <p class="import">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
      molestias, odio doloremque ab neque numquam animi, ipsum qui natus aut
      dignissimos quo nobis sequi architecto nemo tempore cum ipsa possimus!
    </p>
  </body>
</html>

```

### 4) a元素的伪类选择器

> 作用

选择同一元素的不同状态

> 语法

- a:link      /* 未访问的链接 */
- a:visited   /* 已访问的链接 */
- a:hover     /* 鼠标移动到链接上 */
- a:active    /* 选定的链接 */

书写顺序: lvha, 爱恨法则, love & hate

> 示例

```css
a {   
  font-weight: 700;
  font-size: 16px;
  color: gray;
}
a:hover {   /* :hover 是链接伪类选择器 鼠标经过 */
	color: red; /*  鼠标经过的时候，由原来的 灰色 变成了红色 */
}
```

### 5) 自学

- 属性选择器
- 子代选择器
- 兄弟选择器

### 练习

```html
<!-- 主导航栏 -->
<nav class="top-nav">
  <ul>
    <li><a href="#">公司首页</a></li>
    <li><a href="#">公司简介</a></li>
    <li><a href="#">公司产品</a></li>
    <li><a href="#">联系我们</a></li>
  </ul>
</nav>
<!-- 侧导航栏 -->
<aside class="side-nav">
  <div class="left">左侧侧导航栏</div>
  <div class="right"><a href="#">登录</a></div>
</aside>
```

在不修改以上结构代码的前提下，完成以下任务：

1. 链接 登录 的颜色 为 红色
2. 鼠标经过 登录 时颜色 为 蓝色
3. 主导航栏里面的所有的链接改为橙色   

# 三. 文本相关属性

## 1 font相关

### 1) 大小font-size

> 作用

设置字体大小

> 示例

```css
h1 {  
	font-size:20px; 
}
```

### 2) 字体font-family

> 作用

设置字体

> 示例

```css
body {
  font-family: Arial,Microsoft Yahei,sans-serif
}
```

- san-serif : 非衬线字体(文字的笔画粗细是一样的, 如黑体)
- serif: 衬线字体(文字的笔画有尖角, 如宋体)

会依次查找电脑上的字体, 如果都没有, 就使用一种非衬线字体

### 3) 粗细font-weight

> 作用

设置文本的粗细

> 示例

```css
div {
  font-weight: bold
}
```

| 属性值  | 描述                                                      |
| ------- | :-------------------------------------------------------- |
| normal  | 默认值（不加粗的）                                        |
| bold    | 定义粗体（加粗的）                                        |
| 100~900 | 400 等同于 normal，而 700 等同于 bold  我们重点记住这句话 |

### 4) 风格font-style

> 作用

设置文本的倾斜

```css
div {
  font-style: italic
}
```

### 5) 常用连写

font是可以连写的, 通常连写也是很常见的

```html
选择器 { font: font-style  font-weight  font-size/line-height  font-family;}
```

> 示例

```css
body {
  font: 16px "Microsoft Yahei"
}
```

## 2 外观

### 1) color

> 作用

color属性用于定义文本的颜色

| 表示表示             | 属性值                              |
| :------------------- | :---------------------------------- |
| 预定义的颜色值       | red，green，blue                    |
| 十六进制(使用的最多) | \#rrggbb, #FF0000，#FF6600，#29D794 |
| RGB代码              | rgb(255,0,0)或rgb(100%,0%,0%)       |

![image-20201125143636887](http://image.brojie.cn/images/image-20201125143636887.png)

R: red红色, `#00~#FF`(0~255), 前两位

G: green绿色, `#00~#FF`(0~255), 中间两位

B: blue蓝色,`#00~#FF`(0~255), 后两位

### 2) 文本对齐

text-align

> 作用

设置文本内容的水平对齐方式

| 属性   |       解释       |
| ------ | :--------------: |
| left   | 左对齐（默认值） |
| right  |      右对齐      |
| center |     居中对齐     |

### 3) 行高

line-height

> 作用

属性用于设置行间距，就是行与行之间的距离，即字符的垂直间距，一般称为行高

### 4) 装饰线

text-decoration   通常我们用于给链接修改装饰效果

| 值           | 描述                                                  |
| ------------ | ----------------------------------------------------- |
| none         | 默认。定义标准的文本。 取消下划线（最常用）           |
| underline    | 定义文本下的一条线。下划线 也是我们链接自带的（常用） |
| overline     | 定义文本上的一条线。（不用）                          |
| line-through | 定义穿过文本下的一条线。（不常用）                    |

### 5) 单位

| 值   |                                                              |
| ---- | ------------------------------------------------------------ |
| px   | 像素值                                                       |
| em   | 1em 等于当前的字体尺寸. 例如，如果某元素以 12px 显示，那么 2em 是24px |
| %    | 百分比                                                       |
| 数值 | 倍数                                                         |

## 小综合练习

实现如下效果:

![image-20201224143414307](http://image.brojie.cn/img/image-20201224143414307.png)

提示:

1. 标题文本都居中, 可以考虑提取一个公共样式
2. 腾讯新闻有下划线, 但是并不是一个链接
3. 收藏本文是链接, 但是没有下划线
4. 在段落里有一个首行缩进的效果, 是两个汉字, 如何实现

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>综合案例</title>
    <style>
      body {
        font: 16px 'Microsoft Yahei';
      }
      article .title {
        font-size: 28px;
        font-weight: 400;
      }
      article .tac {
        text-align: center;
      }
      article .date {
        color: #ccc;
      }
      article .author {
        color: #990000;
        text-decoration: underline;
      }
      article .sub-title a {
        color: #00f;
        text-decoration: none;
      }
      article .sub-title input {
        color: red;
      }
      article .sub-title button {
        color: green;
        font-weight: 700;
      }
      article p {
        line-height: 26px;
        text-indent: 2em;
      }
    </style>
  </head>
  <body>
    <article>
      <h1 class="title tac">加强反垄断监管是为了更好发展</h1>
      <div class="sub-title tac">
        <span class="date">2020年12月20日</span>
        <span class="author">腾讯新闻 （20人参与）</span>
        <a href="">收藏本文</a>
        <input type="text" value="请输入查询条件" />
        <button>搜索</button>
      </div>
      <hr />
      <p>
        近日，市场监管总局根据举报，在前期核查研究的基础上，对阿里巴巴集团控股有限公司实施“二选一”等涉嫌垄断行为立案调查。这是我国在互联网领域加强反垄断监管的一项重要举措，有利于规范行业秩序、促进平台经济长远健康发展。
      </p>
      <p>
        近年来，我国线上经济蓬勃发展，新业态、新模式层出不穷，对推动经济高质量发展、满足人民日益增长的美好生活需要发挥了重要作用。但与此同时，线上经济凭借数据、技术、资本优势也呈现市场集中度越来越高的趋势，市场资源加速向头部平台集中，关于平台垄断问题的反映和举报日益增加，显示线上经济发展中存在一些风险和隐患。近期召开的中央政治局会议和中央经济工作会议均明确要求强化反垄断和防止资本无序扩张，得到社会热烈反响和广泛支持。可见，反垄断已成为关系全局的紧迫议题。
      </p>
    </article>
  </body>
</html>

```



# 四. 背景相关属性

> 什么是叫背景

背景的概念最早提出是在摄影和图像处理领域, 

主要目的是为了突出主体, 通常会用一个背景来衬托. 比如`证件照`

![365e1b0057f9c361dd2f76ccdfa6b53c](http://image.brojie.cn/365e1b0057f9c361dd2f76ccdfa6b53c.jpg)

网页一开始主要也是来处理文字和图片, 就借鉴了背景这个概念

背景可以**纯色**的, 也可以是一张**图片**

## 1 背景颜色(color)

> 语法
>

```
background-color:颜色值;   默认的值是 transparent  透明的
```

如果要设置背景, 元素必须有宽高!

## 2 背景图片(image)

> 语法 

```css
background-image : none | url (url) 
```

| 参数 |           作用           |
| ---- | :----------------------: |
| none |    无背景图（默认值）    |
| url  | 使用相对地址指定背景图像 |

```css
background-image : url(images/demo.png);
```

### 1) 背景图片与插入图片的区别

- img元素: 属于HTML的范畴, 当图片是HTML结构的一个组成部分时, 使用img
- 背景图片: 属于CSS的范畴, 当图片只是为了美化, 使用背景图片

> 示例

比如一篇文章, 除了文字描述外, 为了更好的表达要说明的内容, 配了一张图, 这张图就是网页的组成部分,是一个HTML的元素, 就使用img

![image-20210107115100134](http://image.brojie.cn/image-20210107115100134.png)

这里是一个按钮(属于HTML功能), 但是为了让这个按钮更漂亮, 使用背景图片

![image-20210107114812794](http://image.brojie.cn/image-20210107114812794.png)

### 2) 路径

在CSS中的路径是相对于CSS文件的. 

## 3 背景平铺（repeat）

默认情况下背景图片是铺满整个容器的, 就好比**贴地板**, 这样做的好处是可以减小整个图片的体积, 加快网站的访问速度

> 语法

```css
background-repeat : repeat | no-repeat | repeat-x | repeat-y 
```

| 参数      |                 作用                 |
| --------- | :----------------------------------: |
| repeat    | 背景图像在纵向和横向上平铺（默认的） |
| no-repeat |            背景图像不平铺            |
| repeat-x  |         背景图像在横向上平铺         |
| repeat-y  |          背景图像在纵向平铺          |

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background-image: url('./images/bg.jpg');
      }
    </style>
  </head>
  <body></body>
</html>
```

## 4 背景位置(position) 

> 语法 

```css
background-position : length || length

background-position : position || position 
```

| 参数     |                              值                              |
| -------- | :----------------------------------------------------------: |
| length   |         百分数 \| 由浮点数字和单位标识符组成的长度值         |
| position | top \| center \| bottom \| left \| center \| right   方位名词 |

- 注意：
  - 必须先指定background-image属性
  - position 后面是x坐标和y坐标。 可以使用方位名词或者 精确单位。
  - 如果指定两个值，两个值都是方位名字，则两个值前后顺序无关，比如left  top和top  left效果一致
  - 如果只指定了一个方位名词，另一个值默认居中对齐。
  - 如果position 后面是精确坐标， 那么第一个，肯定是 x  第二的一定是y
  - 如果只指定一个数值,那该数值一定是x坐标，另一个默认垂直居中
  - 如果指定的两个值是 精确单位和方位名字混合使用，则第一个值是x坐标，第二个值是y坐标

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 600px;
        height: 600px;
        background-color: #aaa;
        background-image: url(./images/money.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        /* background-position: 100px 100px; */
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

## 5 背景简写

> 建议

background: 背景颜色 背景图片地址 背景平铺 背景位置

> 示例

```css
background: transparent url(image.jpg) repeat-y center top ;
```

## 6 背景图的应用

精灵图, 很多时候, 我们可以把多个小图标整合到一起, 再通过position调节找出我们想要的背景图. 

> 优势

可以减少请求次数

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        height: 40px;
        width: 40px;
        background-image: url('./images/icon.png');
        background-position: -130px -35px;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

# 五. CSS的特性

## 1 层叠性

所谓层叠性是指多种CSS样式的叠加在一起, 同时作用在一个元素时, 最终浏览器以谁为主的问题

> 原则

后写的样式会覆盖先写的样式

> 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		div {
			color: red;
			font-size: 30px;
		}

		div {
			color: blue;
		}
	</style>
</head>
<body>
	<div>
		 长江后浪推前浪，前浪死在沙滩上。
	</div>
</body>
</html>
```

![image-20201125172658731](http://image.brojie.cn/images/image-20201125172658731.png)

## 2 继承性

子元素会继承父元素==文本==相关的属性

- font-
- text-
- line-
- color

> 示例

一般, 我们会统一给body设置`font-size`

```css
body {
  font: 16px "Mircosoft Yahei"
}
```

给父元素设置color

## 3 优先级

### 1) 权重公式

定义CSS样式时，经常出现两个或更多规则应用在同一元素上，此时，

* 选择器相同，则执行层叠性
* 选择器不同，就会出现优先级的问题

关于优先级，我们需要一套计算公式来去计算，这个就是 CSS Specificity（特殊性）权重公式

| 标签选择器             | 计算权重公式 |
| ---------------------- | ------------ |
| 继承或者 *             | 0,0,0,0      |
| 每个元素（标签选择器） | 0,0,0,1      |
| 每个类，伪类           | 0,0,1,0      |
| 每个ID                 | 0,1,0,0      |
| 每个行内样式 style=""  | 1,0,0,0      |
| 每个!important  重要的 | ∞ 无穷大     |

总的原则是, 影响范围越小, 选出的元素越特殊, 权重越高

### 2) 权重叠加

我们经常用交集选择器，后代选择器等，是有多个基础选择器组合而成，那么此时，就会出现权重叠加。

就是一个简单的加法计算

- div ul  li   ------>      0,0,0,3
- .nav ul li   ------>      0,0,1,2
- a:hover      -----—>   0,0,1,1
- .nav a       ------>      0,0,1,1

> 注意

不存在进位

比如, 10个元素选择器叠加在一起, 权重依然没有一个类选择器高

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      a {
        color: red;
      }
      ul a {
        color: blue;
      }
      .mylink {
        color: green;
      }
      #myli a {
        color: grey;
      }
      #mydiv .mylink {
        color: skyblue;
      }
    </style>
  </head>
  <body>
    <div id="mydiv">
      <ul id="myul">
        <li id="myli"><a href="#" class="mylink">举例</a></li>
      </ul>
    </div>
  </body>
</html>

```

# 六. 盒子模型

## 1 盒子分类

每个元素都有默认的显示方式, 包括

- 块盒: 独占一行, 可以设置宽高
- 行盒: 不独占一行, 高度由字体大小撑开

显示方式都是由display属性控制的

display常见的值:

- block: 块盒
- inline: 行盒
- inline-block: 行内块

### 重要结论

块盒(div)可以设置宽高

行盒(span)设置宽高不生效, 由内容决定

行内块(img)可以设置宽高, 又跟其它元素在同一行显示

## 2 盒子模型

### 1) 网页的布局

网页布局中，我们是如何把里面的文字，图片，按照美工给我们的效果图排列的整齐有序呢？

<img src="http://image.brojie.cn/images/t.png" />

网页布局

-  首先利用CSS设置好盒子的大小，然后摆放盒子的位置
-  最后把网页元素比如文字图片等等，放入盒子里面

<img src="http://image.brojie.cn/images/t1.png" />

因此, 我们需要先了解如何摆放盒子

### 2) 盒子模型

现实中的盒子有

- 边框(厚度): border
- 填充泡沫: padding
- 内容: content

盒子与盒子之间的距离就是外边距

![](http://image.brojie.cn/images/boxs.png)

代码中的盒子模型, 打开浏览器, 通过调试窗口, 可以看到

![](http://image.brojie.cn/images/标准盒子模型.png)

> 示例

```css
div {
	width: 100px;
	height: 100px;
	border: 1px solid;
	margin: 10px;
	padding: 10px;
}
```

### 3) 边框border

> 语法

```
border : border-width || border-style || border-color 
```

| 属性         |          作用          |
| ------------ | :--------------------: |
| border-width | 定义边框粗细，单位是px |
| border-style |       边框的样式       |
| border-color |        边框颜色        |

边框的样式包括:

- none：没有边框即忽略所有边框的宽度（默认值）
- solid：边框为单实线(最为常用的)
- dashed：边框为虚线 
- dotted：边框为点线

> 示例

```css
div {
   border: 1px solid red;
}
```

> 圆角边框

在新的设计语言里, 圆角边框也是非常常见的表现形式, 在CSS3中新增了`border-radius`

比如:

![image-20201127091620460](http://image.brojie.cn/images/image-20201127091620460.png)

> 示例

```css
p {
  width: 80px;
  height: 30px;
  background-color: red;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
}
```

通过调整`border-radius`的值改变弧度, 当值为height的一半时, 就是表现为一个半圆形

也可以通过`border-radius: 50%`画一个圆

```css
div {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  border-radius: 50%;
}
```

### 4) 内边距padding

内边距也叫内填充, 是内容和边框border之间的距离

| 属性           | 作用     |
| -------------- | :------- |
| padding-left   | 左内边距 |
| padding-right  | 右内边距 |
| padding-top    | 上内边距 |
| padding-bottom | 下内边距 |

> 简写

按顺时针的方向: 上右下左

> 示例

```css
div {
  /* 上:10px 右:20px 下:10px 左:20px */
  padding: 10px 20px 10px 20px;
}
```

一般, 写两个值的情况比较常见

分别表示: 上下和左右

> 示例

```css
div {
  /* 上:10px 右:20px 下:10px 左:20px */
  padding: 10px 20px;
}
```

> 实战案例

新浪导航栏的核心就是因为里面的字数不一样多，所以我们不方便给具体的宽度

这个时候, 我们就可以通过设置padding的方式撑开盒子

![](http://image.brojie.cn/images/al.gif)

> 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>新浪导航栏案例</title>
	<style>
	/*清除元素默认的内外边距*/
		* {
			margin: 0;
			padding: 0;
		}
		.nav {
			height: 41px;
			background-color: #FCFCFC;
			/*上边框*/
			border-top: 3px solid #FF8500;
			/*下边框*/
			border-bottom: 1px solid #EDEEF0;
		}
		.nav a {
			/*转换为行内块*/
			display: inline-block;
			height: 41px;
			line-height: 41px;
			color: #4C4C4C;
			/*代表 上下是 0  左右是 20 内边距*/
			padding: 0 20px;
			text-decoration: none;
			font-size: 12px;
		}
		.nav a:hover {
			background-color: #eee;
		}
	</style>
</head>
<body>
	<div class="nav">
		<a href="#">设为首页</a>
		<a href="#">手机新浪网</a>
		<a href="#">移动客户端</a>
		<a href="#">博客</a>
		<a href="#">微博</a>
		<a href="#">关注我</a>
	</div>
</body>
</html>
```

> 影响

设置padding会使盒子的宽度变大, 而影响布局

比如, 使最后一个盒子被挤到下一行, 这里需要学了浮动后再给大家演示

> 演示

盒子的宽度改变

> 设置box-sizing

默认情况下, 盒子是`content-box`, 宽高都是基于内容计算的, 但是这样计算不方便

为了解决这个问题, CSS3引入了`box-sizing`, 宽高的计算可以根据`border-box`计算

### 5) 外边距margin

外边距通常用来设置**两个盒子之间的距离**, 可以用来确定盒子之间的相对位置关系

| 属性          | 作用     |
| ------------- | :------- |
| margin-left   | 左外边距 |
| margin-right  | 右外边距 |
| margin-top    | 上外边距 |
| margin-bottom | 下外边距 |

> 块盒水平居中

- 盒子必须指定了宽度（width）
- **左右的外边距都设置为auto**

> 示例

```css
.container {
  width: 1100px;
  margin: 0 auto;
}
```

> 清除默认内外边距

由于浏览器会有一个默认的样式, 为了使我们的网页在所有的浏览器中看起来是一样的效果, 通常我们会先清除一些默认样式, 这个过程叫`reset`

最简单的`reset`

> 示例

```css
* {
  margin: 0;
  padding: 0;
}
```

使用margin定义块元素的**垂直外边距**时，可能会出现外边距的合并。

#### 相邻块元素垂直外边距的合并

- 当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom
- 下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和
- **取两个值中的较大者**这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。

 <img src="http://image.brojie.cn/images/www.png" />

**解决方案：尽量给只给一个盒子添加margin值**。

#### 嵌套块元素垂直外边距的合并（塌陷）

- 对于两个嵌套关系的块元素，如果父元素没有上内边距及边框
- 父元素的上外边距会与子元素的上外边距发生合并
- 合并后的外边距为两者中的较大者

 <img src="http://image.brojie.cn/images/n.png" />

**解决方案：**

1. 可以为父元素定义上边框
2. 可以为父元素定义上内边距

# 七. 浮动

## 1 为什么需要浮动

首先, 思考一下下面的问题:

1. 如何让多个块盒(div)水平排列成一行？
2. 如何实现块盒的左右对齐?

## 2 什么是浮动

> 概念

**设置了浮动属性的元素**会

1. 脱离标准普通流
2. 移动到指定位置

浮动最早的出现, 是为了实现图文混排的, 但是随后, 大家发现可以通过浮动来实现布局

## 3 语法

```
选择器 { 
	float: left/right; 
}
```

| 属性值    | 描述                     |
| --------- | ------------------------ |
| **none**  | 元素不浮动（**默认值**） |
| **left**  | 元素向**左**浮动         |
| **right** | 元素向**右**浮动         |

让一个元素向左或向右浮动

## 4 特性

### 1) 脱标

设置了浮动的元素会脱离标准流, 不再占用原来的位置, 后面的盒子会向上跑

```css
.box1 {
  float: left;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 0, 0, 0.5);
}
.box2 {
  width: 150px;
  height: 300px;
  background-color: skyblue;
}
```

![](http://image.brojie.cn/images/zou.gif)

### 2) 改变display

float属性会改变元素display属性。

任何元素都可以浮动。浮动元素会生成一个块盒，而不论它本身是何种元素。 

生成的块盒和我们前面的行内块极其相似

- 同在一行显示
- 可以设置宽高

## 5 应用

我们知道，浮动是脱标的，会影响下面的标准流青霉素

因此, 我们需要给浮动的元素添加一个标准流的父元素，这样可以最大化的减小了对其他标准流的影响

### 1) 实现头部布局

- 左边是一个logo
- 右边是导航

![image-20201127105513857](http://image.brojie.cn/images/image-20201127105513857.png)

### 2) 实现内容布局

![](http://image.brojie.cn/images/mii.png)

### 3) 演示padding改变的影响

## 6 清除浮动

### 1) 为什么要清除浮动

因为父级盒子很多情况下，不方便给高度，但是子盒子浮动就不占有位置，最后父级盒子高度为0，就影响了下面的标准流盒子

### 2) 如何清除浮动

目前使用最多的方式, 使用:after伪元素

> 示例

```css
.clearfix:after {  
  content: ""; 
  display: block; 
  clear: both;
}   
```

# 八. 定位

## 1 为什么需要定位

如果想实现下面的效果, 只靠浮动是没有办法实现的

![](http://image.brojie.cn/images/01_定位示例1.gif)

![](http://image.brojie.cn/images/ding.png)

像上面这种, 让一个盒子固定在某个位置的情况, 需要使用定位来实现

## 2 什么是定位

定位也是用来布局的，它有两部分组成：

> `定位 = 定位模式 + 边偏移`

定位模式包括:

- 绝对定位: `posistion: absolute`
- 相对定位: `position: relative`
- 固定定位: `position: fixed`

边偏移包括

| 边偏移属性 | 示例           | 描述                                                     |
| ---------- | :------------- | -------------------------------------------------------- |
| `top`      | `top: 80px`    | **顶端**偏移量，定义元素相对于其父元素**上边线的距离**。 |
| `bottom`   | `bottom: 80px` | **底部**偏移量，定义元素相对于其父元素**下边线的距离**。 |
| `left`     | `left: 80px`   | **左侧**偏移量，定义元素相对于其父元素**左边线的距离**。 |
| `right`    | `right: 80px`  | **右侧**偏移量，定义元素相对于其父元素**右边线的距离**   |

定位的盒子有了边偏移才有价值。 一般情况下，凡是有定位地方必定有边偏移。

## 3 定位模式详解

### 1) 相对定位

相对定位参考自己在标准流中的位置偏移 

效果图

![](http://image.brojie.cn/images/04_相对定位案例.png)

特点

1. 相对于自己原来在标准流中位置来移动的
2. 原来**在标准流的区域继续占有**，后面的盒子仍然以标准流的方式对待它

> 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		div {
			width: 200px;
			height: 200px;
			background-color: pink;
		}
		.two {
			background-color: purple;
			position: relative;
			top: 100px;
			left: 100px;
		}
	</style>
</head>
<body>
	<div>1</div>
	<div class="two">2</div>
	<div>3</div>
	
</body>
</html>
```

### 2) 绝对定位

绝对定位参考最近的带有定位的父级元素偏移

- 如果父级没有定位, 就参考浏览器的左上角偏移

![](http://image.brojie.cn/images/05_绝对定位_父级无定位.png)

- 如果父元素有定位, 参考父元素的左上角偏移

![](http://image.brojie.cn/images/06_绝对定位_父级有定位.png)

> 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>绝对定位以带有定位的父级元素来移动位置</title>
	<style>
		.yeye {
			width: 500px;
			height: 500px;
			background-color: skyblue;
			position: absolute;
		}
		.father {
			width: 350px;
			height: 350px;
			background-color: pink;
			margin: 100px;
			/*position: relative;*/
		}
		.son {
			width: 200px;
			height: 200px;
			background-color: purple;
			/*margin-left: 100px;*/
			position: absolute;
			top: 50px;
			left: 50px;
		}
	</style>
</head>
<body>
	<div class="yeye">
		<div class="father">
				<div class="son"></div>
		</div>
	</div>
</body>
</html>
```

> 规律

如果给一个元素设置绝对定位, 一定要记得给其父元素设置相对定位, 否则会出现意料之外的情况

简记: **子绝父相** —— **子级**是**绝对**定位，**父级**要用**相对**定位

### 3) 固定定位

固定定位参考浏览器可视窗口偏移

> 示例

微信公众号底部布局

## 4 应用

### 1) 小图标

### 2) 侧栏广告

### 3) 盒子居中

> 绝对定位的盒子居中

> 相对定位的盒子居中

## 5 z-index

在使用**定位**布局时，可能会**出现盒子重叠的情况**

加了定位的盒子，默认**后来者居上**， 后面的盒子会压住前面的盒子

应用 `z-index` 层叠等级属性可以**调整盒子的堆叠顺序**

![图片1](http://image.brojie.cn/images/图片1.png)