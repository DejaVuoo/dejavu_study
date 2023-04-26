# 一.HTML起步

## 前言-认识网页

### 1) 什么是网页

网页就是一个`.html`的文件, 里面按照一定的规范书写了一些`代码`

### 2) 网页是如何显示出来

很多没有接触过 web 的学员可能会有这样一个疑问

**为什么 html 文件里写的是代码, 看到的网页却有具体的样子呢**

网页文件一般使用浏览器打开, 浏览器在加载网页文件后会根据代码 <u>渲染</u> 成我们看到的样子

**渲染**: 也叫解析, 翻译, 加工 

### 3) 网页的组成

网页一般由三个方面**构成**

- 结构(Structure): 网页中**包含**哪些内容
- 样式(Style): 这些内容如何**呈现**出来
- 行为(Behavior): 网页上的内容如何跟用户**交互**

| 标准 | 说明                                                         | 备注                                                     |
| :--- | :----------------------------------------------------------- | :------------------------------------------------------- |
| 结构 | 结构用于对**网页元素**进行整理和分类，主要指`HTML`           | <img src='http://image.brojie.cn/qiniuImg/html.jpg' />   |
| 样式 | 表现用于设置网页元素的版式、颜色、大小等**外观样式**，主要指 `CSS` | <img src='http://image.brojie.cn/qiniuImg/css.jpg' />    |
| 行为 | 行为是指网页模型的定义及**交互**的编写，主要指 `Javascript`  | <img src='http://image.brojie.cn/qiniuImg/search.gif' /> |

## 1 HTML 是什么

> HTML(Hyper Text Markup Language): 超文本标记语言

- **超文本**:
  1. 超越文本: 不仅仅只有文本, 还有多媒体文件, 如: image 图片, audio 音频, video 视频
  2. 超链接: 可以从一个页面跳到另一个页面
- **标记语言**: 带有固定的格式, 只是用来标记某种含义, **不是**编程语言

![](http://image.brojie.cn/qiniuImg/html_cizhixin.jpg)

> 举例

```xml
<from>我</from>
<to>公司</to>
<title>辞职申请</title>
<content>世界那么大, 我想去看看</content>
<time>2015.4.13</time>
```

## 2 HTML 的组成

HTML 由一系列的 **元素 [elements](https://developer.mozilla.org/zh-CN/docs/Glossary/元素)** 组成, 在元素中包含 **属性**（Attribute）

### 1) 元素

> 示例

```html
<p>我的猫咪脾气爆:)</p>
```

![](http://image.brojie.cn/qiniuImg/element.png)

### 2) 属性

元素中可以包含属性

> 示例

```html
<p class="editor-note">我的猫咪脾气爆:)</p>
```

![](http://image.brojie.cn/qiniuImg/attribute.png)

在有些教程里不分元素和标签, 都是混用的. 但是根据 HTML5 的规范, 元素(element)更加准确

参考 MDN 文档: [HTML 是何方神圣](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#HTML_是何方神圣？)

## 3 HTML 文档的基本结构

HTML 有自己固定的基本格式

```html
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

> 示例

```html
<html>
  <head>
    <title>我的第一个页面</title>
  </head>
  <body>
    主体内容
  </body>
</html>
```

![](http://image.brojie.cn/qiniuImg/html_base.jpg)

![](http://image.brojie.cn/qiniuImg/pig.png)

> HTML 标签名、属性名和大部分属性值统一用小写, 一般使用`双引号`

_推荐：_

```html
<head>
  <title>我的第一个页面</title>
</head>
<body>
  <a href="http://www.baidu.com">百度</a>
</body>
```

_不推荐：_

```html
<Head>
  <TITLE>我的第一个页面</title>
</head>
```

> @扩展阅读

更多关于文档的详细内容, 参考MDN文档: [HTML 文档详解](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#HTML_文档详解)

## 4 元素的分类

HTML 的元素分为两类

- 双标签元素
- 单标签元素

### 1) 双标签元素

在 HTML 中, 绝大部分元素(99%)都是`双标签元素`, 即<u>有开始, 有结束</u>, 在标签内部可以包含内容

```html
<标签名> 内容 </标签名>
比如: <body>我是文字</body>
```

### 2) 单标签元素

极少部分(常见就几个)元素不包含任何内容, 叫做**空元素**, 也叫`单标签元素`

```html
<标签名 /> 比如: <img />
```

## 5 元素的关系

针对`双标签元素`, 主要存在两种关系

- 嵌套关系(父子关系)
- 并列关系(兄弟关系)

1. 嵌套关系

```html
<head>
  <title></title>
</head>
```

![](http://image.brojie.cn/qiniuImg/father.jpg)

2.并列关系

```html
<head></head>
<body></body>
```

![](http://image.brojie.cn/qiniuImg/xiong.jpg)

# 二.HTML 入门

## 1 HTML 的由来

> 为什么发明 HTML? 或者说发明 HTML 是为了解决什么问题

在早些年的时候. 人们获取信息的主要途径是看 <u>报纸</u>

后来, 随着互联网的普及, 人们主要通过 <u>电脑浏览网页</u> 来获取信息(新闻)

因此, 发明 HTML 最初的目的其实是为了解决人们**如何通过电脑来看新闻**的问题

当然, 现在及未来, 移动互联网的兴起, 大家更多的会使用移动设备(手机, 平板)来看新闻

> 移动互联网会取代互联网吗? 或者说手机会取代电脑吗

移动互联网技术本质上还是是基于互联网的. 是对互联网的延伸和补充, 让大家能更方便的, 随时随地的使用互联网, 享受互联网的便捷

---

通过上面的分析, 我们大概就能猜到 HTML 在设计的时候或多或少会参考报纸的一些理念.

![](http://image.brojie.cn/qiniuImg/baozhi.jpg)

大致分析一下, 报纸上有哪些元素

- 总标题
- 文章
- 段落
- 图片
- 页头页脚

其实 HTML 也是这么设计的

![](http://image.brojie.cn/qiniuImg/1587684832159.jpg)

HTML 由元素组成, 认识 HTML 其实就是学习 HTML 中的元素. 本章主要介绍常见的 HTML 元素, 大致分为

- 文本相关元素
- 超文本相关元素
- 布局相关元素
- 表单元素(进阶部分介绍)
- 表格元素(进阶部分介绍)

> 说明

当然, 如果你想了解更多, 更完整的 HTML 元素相关的内容的话

还是请自行查阅 MDN: [HTML 元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

## 2 文本相关元素

首先, 我们来了解跟文本相关的 HTML 元素

### 1) 标题元素 h

这里有六个标题元素 —— `h1~h6`

每个元素代表文档中不同级别的内容;

- `h1` 表示主标题（the main heading）
- `h2` 表示二级子标题（subheadings）
- `h3` 表示三级子标题（sub-subheadings）

其基本语法格式如下：

```html
<h1>标题文本</h1>
<h2>标题文本</h2>
<h3>标题文本</h3>
<h4>标题文本</h4>
<h5>标题文本</h5>
<h6>标题文本</h6>
```

![](http://image.brojie.cn/qiniuImg/h.png)

> 强调

HTML 只规定结构和内容. 不规定样式.

总原则: **结构和样式分离**, 结构由 HTML 控制, 样式由 CSS 控制!!!



> 为什么看到的 h1 比 h2 大呢

浏览器会给每个元素一些默认的样式. 而这些样式都是可以被修改的.

事实上, 我们完全可以控制`h2`的样式, 让它看起来像`h1`. 但是从语义上来说, 是不同的

> @扩展-语义

语义(semantic)是一个非常重要的概念, 通常表示一个元素有特殊的含义. 比如

`h1`是一个语义元素, 一般表示一个网页中最重要的内容. 最好只出现一次, 这样有利于搜索引擎的处理

参考 MDN: [为什么我们需要语义](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#为什么我们需要语义？)

> 最佳实践

- 您应该最好只对每个页面使用一次`<h1>`— 这是顶级标题，所有其他标题位于层次结构中的下方。
- 请确保在层次结构中以正确的顺序使用标题。不要使用`<h3>`来表示副标题，后面跟`<h2>`来表示副副标题 - 这是没有意义的，会导致奇怪的结果。
- 在可用的六个标题级别中，您应该旨在每页使用不超过三个，除非您认为有必要使用更多。具有许多级别的文档（即，较深的标题层次结构）变得难以操作并且难以导航。在这种情况下，如果可能，建议将内容分散在多个页面上。

以上内容摘自 MDN: [编辑结构层次](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#编辑结构层次)

### 2) 段落元素 p

单词缩写： paragraph 段落 [ˈpærəgræf] 无须记这个单词

**作用语义：**

可以把 HTML 文档分割为若干段落

> 语法

```html
<p>内容</p>
```

### 3) 综合小案例

有这样一段文本, 请按照语义添加合适的元素, 使用网页的结构更清晰

```txt
三国演义

罗贯中

第一回 宴桃园豪杰三结义 斩黄巾英雄首立功

话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉……

第二回 张翼德怒鞭督邮 何国舅谋诛宦竖

且说董卓字仲颖，陇西临洮人也，官拜河东太守，自来骄傲。当日怠慢了玄德，张飞性发，便欲杀之……

却说张飞

却说张飞饮了数杯闷酒，乘马从馆驿前过，见五六十个老人，皆在门前痛哭。飞问其故，众老人答曰：“督邮逼勒县吏，欲害刘公；我等皆来苦告，不得放入，反遭把门人赶打！”……
```

### 4) 强调元素

在人类语言中，为了突出一句话的意思，我们通常强调某些词，并且我们通常想要标记某些词作为重点或者在某种程度上的不同。 HTML 提供了许多语义化的元素，并且允许我们通过这些元素的意义标记正文内容，在这个章节中，我们将看到最常见的一小部分元素

- 强调: 使用`<em>`
- 非常重要: 使用`<strong>`

#### 表示强调 em

当我们想要在口语中添加强调，我们重读某些词，以便隐含的说出我们想要说的意思。类似的，在写作中，我们通过将文字写成 _斜体_ 来强调它

> 举例

![](http://image.brojie.cn/qiniuImg/image-20200425082543844.png)

#### 表示非常重要 strong

为了强调重要的词，在口语方面我们往往用重音强调，在文字方面则是用 **粗体字** 来达到强调的效果

> 举例

![](http://image.brojie.cn/qiniuImg/image-20200425082743276.png)

> @扩展-表示强调的元素

参考 MDN: [重点强调](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#重点强调)

## 3 超文本相关元素

超文本主要包括两层含义:

1. 超越普通文本, 如多媒体: 图片(img 元素), 音频(audio 元素), 视频(video 元素)
2. 超链接, a 元素

### 1) 超链接元素 a

正是因为超链接元素的存在, 将世界上所有的网页联系在一起, 使互联网成为一个互相联系的网络

> 作用

超链接可以使我们的文档跳转到任何其他的文档（或其他资源 resource）

> 语法

```html
<a href="统一资源定位符(URL)">显示信息</a>
```

#### 什么是 URL

URL(Uniform Resource Locator): 统一资源定位符

> URL 就是我们在浏览器地址栏输入的内容

基本结构

```html
protocol :// hostname[:port] / path
```

> 举例

- `http://127.0.0.1:5500/01_体验html.html`

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>超链接元素</h1>
    <h2>超链接元素a: 可以使我们从一个网页跳转到另一个网页</h2>
    <hr />
    我是一个超链接, 点我可以跳转到百度:<a href="http://www.baidu.com">百度</a>
    <hr />
   	<a href="./01-第一个页面.html">点我可以跳转到本站点的其它页面</a>
    <hr />
  </body>
</html>
```

### 2) 图片元素 img

图片元素允许我们将图片放到网页中, 这样我们的网页就变得漂亮起来

> 语法

```html
<img src="文件路径/文件名.后缀名" />
```

#### 文件路径

> 什么是文件路径

用来 表示 文件 或者 文件夹 在计算机存储的位置

文件路径就是找到一个文件的途径. 有两个概念

**路径分类**

- 绝对路径(完整路径)
  
  > 举例
  
  /宇宙/银河系/太阳系/地球/中国/武汉/栋哥
  
  - **网络绝对路径**: 从`http://域名`对应的地址开始查找, 直到找到目标文件为止
  - **本地绝对路径**: 从计算机的根盘符下开始查找, 直到找到目标文件为止
  
- 相对路径: 从当前文件开始查找, 直到找到目标文件为止

  > 举例

  指路, 从当前地方出发, 向前100米, 再左转

  ./: 要找的文件在同级目录下

  ../: 要找的文件在上一级目录 `../资源/01.jpg`

  目录名/: 要找的文件在子目录中

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>图片元素img</h1>
    <h2>可以在网页中嵌入图片</h2>
    <hr />
    <ul>
      <li>
        使用绝对路径: <img src="http://127.0.0.1:5500/blog.png" width="200px" />
      </li>
      <li>使用相对路径: <img src="./blog.png" width="200px" /></li>
    </ul>
  </body>
</html>
```

> 最佳实践

在 img 标签中, 最好使用`相对路径`

### 3) 视频元素 video

video 元素是 HTML5 新增的元素. 用于在 HTML 文档中嵌入媒体播放器

video 标签就是用来播放视频的

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>视频元素video</h1>
    <h2>可以在网页上播放视频</h2>
    <video src="./test_video.mp4" width="480px" autoplay controls muted></video>
  </body>
</html>
```

## 4 布局相关元素

一个“典型的网站”可能会这样布局

![](http://image.brojie.cn/qiniuImg/snapshot.png)

- 页头(header): 通常横跨于整个页面顶部有一个大标题 和/或 一个标志
- 导航(nav): 指向网站各个主要区段的超链接
- 主体(main): 中心的大部分区域是当前网页大多数的独有内容
- 侧边栏(aside): 一些外围信息、链接、引用、广告等
- 页脚(footer): 页脚放置公共信息（比如版权声明或联系方式）

### 1) header

- 可以是`body`的子元素, 表示网站的全局页头(常用)
- 也可以是`section`或`article`的子元素, 表示这个区域的页头

### 2) nav

通常是`body`的子元素, 表示网站的顶部导航

### 3) main

网页的主体部分, 每个页面只能用一个`main`. 且直接做为`body`的子元素, 最后不要把他嵌套到别的元素中

### 4) section 和 article

section 表示一组类似功能的区块. article 表示一篇文章

形式一: section 包含 article

![](http://image.brojie.cn/qiniuImg/image-20200428081115301.png)

```html
<section>
  <article>
    <h2>
      标题一
    </h2>
    <p>内容....</p>
  </article>
  <article>
    <h2>
      标题二
    </h2>
    <p>内容....</p>
  </article>
  ...
</section>
```

形式二: article 包含 section

![](http://image.brojie.cn/qiniuImg/image-20200428081828232.png)

### 5) footer

通常做为页面的页脚

### 6) 综合案例

![](http://image.brojie.cn/qiniuImg/1523421588540.png)

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>二次元俱乐部</title>
  </head>
  <body>
    <!-- 头部header-导航nav -->
    <header>
      <h1>二次元俱乐部</h1>
      <img src="./assets/01.jpg" alt="logo" />
      <nav>
        <a href="#">首页</a>
        <a href="#">产品</a>
        <a href="#">分类</a>
        <a href="#">联系我们</a>
      </nav>
    </header>
    <!-- 左侧main -->
    <main>
      <section>
        <article>文章一</article>
        <article>文章二</article>
        <article>文章三</article>
      </section>

      <section>
        <article>文章一</article>
        <article>文章二</article>
        <article>文章三</article>
      </section>
    </main>
    <!-- 右侧aside -->
    <aside>
      <section>热门</section>
      <section>广告</section>
    </aside>
    <!-- 底部footer -->
    <footer>版本所有©2000-2077</footer>
  </body>
</html>
```

### 7) 无语义元素

这里重点介绍两个元素

- div 元素
- span 元素

标准的制定者不可能把生活中的所有内容都语义化.

所以 80%的情况下, 不好确定某个部分的具体语义时, 一般使用无语义元素.

> 提示

无语义元素反而是使用的更多的元素, 在 HTML5 标准之前, 布局基本都是使用 div

## 5 块元素与行元素

本节是非常重要的一节!

前面关于元素的分类是按照**功能**性进行划分的

从**显示**上进行划分, 元素又可以被分为

- **块元素**(block element): 独占一行显示的元素
- **行元素**(inline element): 多个元素在同一行上显示的元素

### 1) 默认的块元素

- 标题元素: `h1~h6`
- 段落元素: `p`
- 列表元素: `ul` `ol` `dl` `li`
- 布局元素: `header` `nav` `main` `section` `article`
- 无语义元素: **`div`**

一般块元素里可以放其它元素, 或者文本内容

### 2) 默认的行元素

- 超文本元素: a
- 图片元素: img
- 无语义元素: span

> 特别说明

1. 元素是块元素还是行元素, 不是由 html 决定的. html 只定义结构, 显示是由 CSS 控制的
2. 决定元素是块元素还是行元素, 是通过 CSS 的 display 属性控制的.

## 6 列表元素

列表元素按使用频率可以细分为

- 无序列表(ul: unordered list)
- 有序列表(ol: ordered list)
- 描述列表(dl: description list)

### 1) 无序列表 ul

表示列表项之间是没有先后顺序的

> 示例

```
emmet: ul>li*3>lorem1
```

```html
<ul>
  <li>Lorem.</li>
  <li>Quisquam.</li>
  <li>Sapiente.</li>
</ul>
```

### 2) 有序列表 ol

表示列表项之间是存在先后顺序的

> 示例

```
emmet: ol>li{第$项}*3
```

```html
<ol>
  <li>第1项</li>
  <li>第2项</li>
  <li>第3项</li>
</ol>
```

### 3) 描述列表 dl

表示一个自定义的列表

```
emmet: dl>(dt{标题$}+dd{内容$})*3
```

```html
<dl>
  <dt>标题1</dt>
  <dd>内容1</dd>
  <dt>标题2</dt>
  <dd>内容2</dd>
  <dt>标题3</dt>
  <dd>内容3</dd>
</dl>
```

## 7 表单

### 1) 基本介绍

> 生活中的表单

在生活中, 比如我们去银行申请信用卡, 我们需要填写一张申请表

![](http://image.brojie.cn/qiniuImg/car.jpg)

在我们申请email的时候, 我们需要填写用户名, 密码这些信息

![image-20201223143247820](http://image.brojie.cn/img/image-20201223143247820.png)

像这些申请单在程序里就是以表单的形式的存在的

> 表单的作用

目的是为了收集用户的信息, 传递给服务器, 在服务器中存储

### 2) 语法

```html
<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>
```

**常用属性：**

| 属性   | 属性值   | 作用                                               |
| ------ | :------- | -------------------------------------------------- |
| action | url地址  | 用于指定接收并处理表单数据的服务器程序的url地址。  |
| method | get/post | 用于设置表单数据的提交方式，其取值为get或post。    |
| name   | 名称     | 用于指定表单的名称，以区分同一个页面中的多个表单。 |

### 3) input元素

> 语法

```html
<input type="属性值" value="你好">
```

- input 输入的意思 
- input是单标签元素
- type属性设置不同的属性值用来指定不同的控件类型
- 除了type属性还有别的属性

![image-20201124162421756](http://image.brojie.cn/images/image-20201124162421756.png)

### 4) label元素

> 语法

```html
<label for="sex">男</label>
<input type="radio" name="sex" id="sex">
```

### 5) textarea元素

> 语法

```html
<textarea >
  文本内容
</textarea>
```

### 6) select元素

> 语法

```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>
```

## 8 表格

### 1) 基本介绍

为了更方便人们的阅读, 对于一些数据以表格的形式展现效果会更好, 比如

![image-20201124164133986](http://image.brojie.cn/images/image-20201124164133986.png)

还有: 成绩表, 工资表, 人员名单表,  商品清单表等等...

在程序中, 我们使用`table`来表示

### 2) 语法

> 语法

```html
<table>
  <tr>
    <th>表头</th>
  </tr>
  <tr>
    <td>单元格内的文字</td>
    ...
  </tr>
  ...
</table>
```

1. table用于定义一个表格标签。
2. tr(table row) 用于定义表格中的**行**，必须嵌套在 `table`中
3. th(table head)用于定义表格中的表头, 必须嵌套在`tr`中
4. td(table data) 用于定义表格中的**单元格**，必须嵌套在`tr`中

### 3) table的常用属性

![image-20201124164831993](http://image.brojie.cn/images/image-20201124164831993.png)

> 示例

```html
<table width="600px" border="1" cellspacing="0">
  <caption>
    xx中学高一课程表
  </caption>
  <tr>
    <th>周一</th>
    <th>周二</th>
    <th>周三</th>
    <th>周四</th>
    <th>周五</th>
  </tr>

  <tr>
    <td>语文</td>
    <td>地理</td>
    <td>语文</td>
    <td>地理</td>
    <td>数学</td>
  </tr>
  <tr>
    <td>英语</td>
    <td>美术</td>
    <td>语文</td>
    <td>政治</td>
    <td>微机</td>
  </tr>
  <tr>
    <td>数学</td>
    <td>生物</td>
    <td>语文</td>
    <td>生物</td>
    <td>微机</td>
  </tr>
  <tr>
    <td>数学</td>
    <td>英语</td>
    <td>英语</td>
    <td>体育</td>
    <td>班会</td>
  </tr>
</table>
```

### 4) 标题

> 语法

```html
<table>
   <caption>我是表格标题</caption>
</table>
```

### 5) 高级用法

> 表格的合并

* 跨行合并：rowspan="合并单元格的个数"      
* 跨列合并：colspan="合并单元格的个数"