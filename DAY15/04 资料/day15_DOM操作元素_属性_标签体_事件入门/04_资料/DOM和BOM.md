# 一. DOM介绍

一般认为JavaScript由三部分组成

- ECMAScript: 基础语法
- DOM: 文档数据模型
- BOM: 浏览器对象模型

![image-20201130102735850](http://image.brojie.cn/images/image-20201130102735850.png)

通过面前的学习, 我们了解ECMAScript, 也就JS的基础语法部分, 从这一讲开始, 我们来简单的了解一下DOM和BOM

## 1 什么是DOM

> DOM(Document Object Model) 文档对象模型

DOM是W3C组织制定并推荐的标准, 这个标准提供了一系列操作HTML的统一API.

核心对象是`document`

HTML是一种标记语言, 那么浏览器是如何解析并渲染显示的呢?

> 浏览器的工作流程

1. 浏览器读取HTML文件
2. 在内存中生成DOM树
3. 调用API渲染显示

## 2 DOM树

![1550731974575](http://image.brojie.cn/images/1550731974575.png)

`DOM树` 是将HTML文档映射成树形结构，通过**节点对象**对其处理，处理的结果可以加入到当前的页面

- 文档: 一个HTML页面就是一个文档，DOM中使用document表示
- 节点: 网页中的所有内容，在DOM树中都是一个节点(标签、属性、文本、注释等)
  - 元素节点: 网页中的所有内容, 比如`h1`, `div`都是一个元素, 也就是element Node
  - 文本节点: `<h1>文本</h1>`里的文本就是文本节点, 也就是text Node
  - 属性节点: `<img src="1.jpg"></img>`里的属性就是属性节点

大家可以通过[AST](https://astexplorer.net/)研究

![image-20201208103444303](http://image.brojie.cn/images/image-20201208103444303.png)

也可以通过chrome打印调试

![image-20201208104045469](http://image.brojie.cn/images/image-20201208104045469.png)

## 3 获取元素

如果要操作DOM, 首先我们需要知道具体需要操作哪一个元素.  即: **获取元素**

目前最常用的API

- getElementById(兼容性好)
- querySelect(H5新增, 功能强大)
- querySelectAll(H5新增)

> 示例一

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="time">2022-02-02</div>
    <script>
      var div = document.getElementById('time')
      console.log(div)
      console.dir(div)
    </script>
  </body>
</html>
```

> 语法

```js
document.querySelect('选择器')
// 元素选择器, 如: li
// id选择器, 如: #nav
// class选择器, 如: .box
```

> 示例二

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div class="box">盒子1</div>
    <div class="box">盒子2</div>
    <div id="nav">
      <ul>
        <li>首页</li>
        <li>产品</li>
      </ul>
    </div>
    <script>
      // querySelector 返回指定选择器的第一个元素对象
      var firstBox = document.querySelector('.box')
      console.log(firstBox)
      var nav = document.querySelector('#nav')
      console.log(nav)
      var li = document.querySelector('li')
      console.log(li)
      // querySelectorAll()返回指定选择器的所有元素对象集合
      var allBox = document.querySelectorAll('.box')
      console.log(allBox)
      var lis = document.querySelectorAll('li')
      console.log(lis)
    </script>
  </body>
</html>

```

## 4 事件驱动

### 1) 什么是事件驱动

我们说JavaScript采用的是事件驱动机制, 即: **触发---响应机制**

> 如何理解

触发一个特定的事件, 比如: 点击一个按钮. 然后会执行事件对应的函数

> 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button id="btn">唐伯虎</button>
    <script>
      var btn = document.getElementById('btn')
			// 这个函数只有当按钮被点击时, 才会被执行
      btn.onclick = function () {
        alert('点秋香')
      }
    </script>
  </body>
</html>

```

步骤

1. 获取元素
2. 注册事件(绑定事件)处理函数
3. 触发事件, 执行函数

### 2) 鼠标事件

| 事件名      | 触发条件 |
| ----------- | -------- |
| onclick     | 鼠标点击 |
| onblur      | 失去焦点 |
| onfocus     | 获得焦点 |
| onmouseover | 鼠标经过 |

> 示例 - 仿淘宝隐藏二维码

点击x号, 隐藏广告

![taobao](http://image.brojie.cn/rUWJDlQbYOo63Lg.gif)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: relative;
        width: 70px;
        height: 90px;
        margin: 100px auto;
        padding-top: 4px;
        border: 1px solid #ccc;
        font-size: 12px;
        text-align: center;
        color: #ff5000;
      }

      .box img {
        width: 62px;
        margin-top: 4px;
      }

      .box .close_btn {
        position: absolute;
        top: -1px;
        left: -23px;
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        font-style: normal;
        color: #ccc;
      }
    </style>
  </head>
  <body>
    <div class="box">
      去领红包
      <img src="images/tao.png" alt="" />
      <i class="close_btn">x</i>
    </div>
    <script>
      // 需求. 仿淘宝的效果. 点击x号, 关闭广告

      // 一. 获取DOM元素
      var box = document.querySelector('.box')
      var btn = document.querySelector('.close_btn')
      // 二. 绑定事件, 修改属性
      btn.onclick = function () {
        // 修改属性
        box.style.display = 'none'
      }
    </script>
  </body>
</html>

```

> 示例 - 仿京东输入框

文本框获得焦点时, 文字颜色变浅, 文本框的内容清空

文本框失去焦点时, 颜色恢复, 文本框为空时, 提示内容

![jd_search](http://image.brojie.cn/jd_search.gif)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      input {
        color: #999;
      }
    </style>
  </head>

  <body>
    <input type="text" value="婴幼儿奶粉" />
    <script>
      // 一. 获取dom元素
      var text = document.querySelector('input')
      // 二. 绑定事件
      text.onfocus = function () {
        if (text.value == '婴幼儿奶粉') text.value = ''

        text.style.color = '#333'
      }

      text.onblur = function () {
        if (this.value == '') text.value = '婴幼儿奶粉'
        text.style.color = '#999'
      }
    </script>
  </body>
</html>

```

### 3) 键盘事件

| 事件名     | 触发条件                                                |
| ---------- | ------------------------------------------------------- |
| onkeyup    | 按键松开时触发                                          |
| onkeydown  | 按键按下时触发                                          |
| onkeypress | 按键按下时触发, 不能识别ctrl, shift等功能键, 区分大小写 |

### 4) 新增的事件注册方式

addEventListener()

> 示例

```js
domObj.addEventListener('click', function() {
  alert(22);
})
```

- 在注册事件时不用**加on**

### 5) 事件对象

> 示例

```js
domObj.addEventListener('click', function(e) {
  console.dir(e)
})
```

比较常用的属性和方法

- e.target: 触发事件的对象
- e.preventDafult(): 阻止默认行为
- e.stopPropagation(): 阻止冒泡

> 示例 - 判断哪个按键被按下了

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <script>
        // 键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
        // 1. 我们的keyup 和keydown事件不区分字母大小写  a 和 A 得到的都是65
        // 2. 我们的keypress 事件 区分字母大小写  a  97 和 A 得到的是65
        document.addEventListener('keyup', function(e) {
            // console.log(e);
            console.log('up:' + e.keyCode);
            // 我们可以利用keycode返回的ASCII码值来判断用户按下了那个键
            if (e.keyCode === 65) {
                alert('您按下的a键');
            } else {
                alert('您没有按下a键')
            }

        })
        document.addEventListener('keypress', function(e) {
            // console.log(e);
            console.log('press:' + e.keyCode);

        })
    </script>
</body>

</html>
```



> 示例 - this和e.target的区别

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <script>
      var ul = document.querySelector('ul')
      ul.addEventListener('click', function (e) {
        // 我们给ul 绑定了事件  那么this 就指向ul
        console.log(this)
        // 如果是li 触发了事件 会向上冒泡, e.target表示li
        console.log(e.target)
      })
    </script>
  </body>
</html>

```

## 5 自学API

1. 结点操作相关的API(增删改查)
2. 结点关系相关的API(父子兄弟)

> 练习: 实现一个留言板

要求

1. 当输入内容为空时, 提示"请输入内容"
2. 每次发布的留言在最上面显示
3. 发布完后, 清除之前写的内容

![image-20201208134926079](http://image.brojie.cn/images/image-20201208134926079.png)

> 答案

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        padding: 100px;
      }

      textarea {
        width: 200px;
        height: 100px;
        border: 1px solid skyblue;
        outline: none;
        resize: none;
      }

      ul {
        margin-top: 50px;
      }

      li {
        width: 300px;
        margin: 15px 0;
        padding: 5px;
        background-color: blueviolet;
        color: #fff;
      }
    </style>
  </head>

  <body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul></ul>
    <script>
      // 1. 获取元素
      var btn = document.querySelector('button')
      var text = document.querySelector('textarea')
      var ul = document.querySelector('ul')
      // 2. 注册事件
      btn.onclick = function () {
        if (text.value == '') {
          alert('您没有输入内容')
          return false
        } else {
          // (1) 创建元素
          var li = document.createElement('li')
          // 先有li 才能赋值
          li.innerHTML = text.value
          // (2) 添加元素
          ul.insertBefore(li, ul.children[0])
          text.value = ''
        }
      }
    </script>
  </body>
</html>

```

# 二. BOM介绍

## 1 什么是BOM

> BOM(Browser Object Model) 浏览器对象模型

它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 `window`, 

由于每个浏览器厂商实现方式不同, BOM的表现会略有差异.

![image-20201209093721753](http://image.brojie.cn/images/image-20201209093721753.png)



BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性

包括:

- location: URL相关
- navigator: 浏览器相关
- screen: 窗口相关
- history: 浏览历史

其实, BOM 比 DOM 更大, 它包含 DOM

![u=1150090246,3050686777&fm=26&gp=0](http://image.brojie.cn/images/u=1150090246,3050686777&fm=26&gp=0.jpg)

## 2 常用方法

window对象提供了很多可用方法

像之前, 我们经常用到的方法都是window对象的方法

- alert
- prompt

这里, 我们重点介绍

- 定时器
- location对象
- history对象

## 3 定时器

window 对象提供了 2 种定时器

- setTimeout() 
- setInterval()  

### 1) setTimeout

> 语法

```js
setTimeout(函数, ms时间);
```

当时间到了, 会执行函数. 只执行一次

> 示例

```js
setTimeout(function() {
  console.log('1s')
}, 1000)
```

> 回调函数

像上面这样的函数, 我们一般也叫**回调函数**

顾名思义, 回调函数(callback)就是"现在不执行, 过一段时间回过头来执行"

回调函数都有一个触发的时机, 比如

- 事件处理函数: 当按钮点击时触发
- 定时器函数: 当时间到了触发

### 2) setInterval

> 语法

```js
setInterval(函数, ms时间);
```

每隔一段时间, 执行一次函数. 会执行多次

> 示例

```js
setInterval(function() {
  console.log('1s')
}, 1000)
```

### 3) clearInterval

通过clearInterval停止setInterval设置的定时器

> 示例

```js
var counter = 3
var id = setInterval(function () {
  if (counter <= 0) {
    clearInterval(id)
    console.log('时间到了')
  } else {
    console.log('还剩' + counter + '秒')
    counter--
  }
}, 1000)
```

应用场景: 

- 倒计时
- 发送验证码, 60s后重试
- 抽奖

> 示例 - 模拟发送验证码倒计时

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    手机号码: <input type="text" /> <button>发送</button>

    <script>
      var btn = document.querySelector('button')

      var timer = 3
      btn.addEventListener('click', function (e) {
        btn.disabled = true
        var id = setInterval(function () {
          if (timer <= 0) {
            clearInterval(id)
            btn.innerHTML = '发送'
            btn.disabled = false
            return
          }
          btn.innerHTML = timer + '秒后重试'
          timer--
        }, 1000)
      })
    </script>
  </body>
</html>

```



## 4 location对象

### 1) 作用

location对象用于获取设置URL

> 什么是URL

URL(Uniform Resource Locator), 统一资源定位符

在计算机网络中, 可以通过统一资源定位符(**URL**)请求对应的服务器**资源**(Resource)

```
Schema://host[:port]/path[?query-string]#anchor
```

- Schema: 使用的协议类型, 如http/https/ftp等
- host: 	主机域名或IP
- port: 	端口号(可选)
- path: 	路径
- query-string: 查询参数(可选)
- #anchor: 锚链接

### 2) 常用属性

| 属性名            | 说明              |
| ----------------- | ----------------- |
| location.href     | 获取或者设置 URL  |
| location.pathname | 返回路径部分      |
| location.hash     | 返回#后面的锚链接 |

> 示例 - 3秒后跳转

```js
var counter = 3
var id = setInterval(function () {
  if (counter <= 0) {
    clearInterval(id)
    console.log('时间到了')
    location.href = 'http://www.baidu.com'
  } else {
    console.log('还剩' + counter + '秒')
    counter--
  }
}, 1000)
```

## 5 history对象

### 1) 作用

history对象类似于浏览器的前进后退功能, 访问历史记录

### 2) 常用属性方法

| 属性方法  | 说明                                             |
| --------- | ------------------------------------------------ |
| back()    | 后退, 返回到上一次的访问的页面                   |
| forward() | 前进                                             |
| go(参数)  | 前进或后退, 1表示前进1个页面, -1表示后退一个页面 |

## 6 自学

自学navigator对象