# 一. JavaScript简介

## 1 JS的发展历程

回顾整个JavaScript的发展历程, 实际上就是Web发展的历程

从最开始的拨号上网方式到现在的100M光纤, 4G/5G移动Web的发展

在近20年, 上网的方式发生了翻天复地的变化, 可以说是科技大爆炸.

人们在享受越来越便捷的上网的同时, 对Web产品的需求越来越高

从单纯的对访问速度的需求, 越来越多的转移到视觉美感, 智能操作交互, 沉浸式虚拟现实, 这些需求又反过来推动了技术的不断创新与进步.

### 1) JS的诞生

在互联网初期(20世纪90年代) ----**web1.0**

主要通过拨号上网的方式浏览网页, 提交信息. 上网的速度只有28.8 kbit/s

JavaScript最初是网景公司的工程师`Brandan Eich`花了10天的时间设计出来的, 主要是为了在浏览器上先验证用户输入的信息是否符合格式. 

> 为什么要这样做呢?

因为当时的网络是非常慢的, 如果用户填写了大量的信息, 提交到服务器, 在服务器端验证发现不合格, 用户要再次重新填写, 这个是很让人抓狂的. 

设想一下，用户填完一个表单，点击提交按钮，等待了 30 秒的处理后，看到的却是一条告诉你忘记填写一个必要的字段

最开始的时候, `Eich`把自己设计的这种运行在浏览器上的脚本叫做`liveScript`, 在发布的时候为了蹭Java的热度, 就改名叫做`JavaScript`, 实际上跟Java没有半毛钱关系

### 2) JS的成长

在PC互联网(2010年之前)----**web2.0**

这个时候, 个人电脑PC开始普及, 网络速度突飞猛进, 上网的成本越来越低

人们开始大量的使用PC访问web应用, 包括: 

- blog(博客)--新浪
- RSS(订阅)
- 社交网络(SNS)--FaceBook/人人网
- P2P(下载)--迅雷
- 搜索引擎--Google/baidu
- 即时通讯(IM)--QQ
- 电子商务--Taobao

在这个时代, JavaScript都只是一种不起眼的小脚本, 没有人把他当成真正的编程语言.

 JavaScript在这个时候依然只是用来处理PC网页的简单动画和验证, 也没有单独的前端岗位, 大部分前端的工作都是由php程序员或者UI人员完成的

### 3) JS的新生

> **web3.0**

随着乔帮主推出的IPhone智能手机, 改变了人们的生活方式

以智能手机为代表的移动互联网应运为生, 称为**web3.0**

> HTML5与CSS3

到2015年左右, HTML5和CSS3的标准化, 大大推进了前端的发展

前端做为一个独立的方向真正开始被重视

> ECMA2015

在2015年, JavaScript的规范组织ECMA(欧洲计算机制造商协会)推出了ECMA2015, 也被称为ES6

这一版本的出现, 极大的改进了JavaScript语言, 使得JavaScript具备开发大型项目的能力

> V8引擎与Node.js

Chrome推出的V8引擎将JavaScript的速度提升了几个数量级

Node.js的出现, 完善了JavaScript在服务端的能力, 使得JavaScript编写服务端程序作为可能

> 未来的发展

自2016年以来, 前端发展非常迅速,  开源社区越来越活跃, 出现了大量的工作岗位, 薪资也水涨船高

JavaScript现在应用的范围越来越广

- 微信小程序
- H5游戏
- 桌面应用(Electron)
- webApp
- AI+物联网( AIot)

![全球十大编程语言排行榜：C最古老,JavaScript第一](http://image.brojie.cn/1-1P314222029.png)

## 2  JS的组成

一般认为JavaScript由三部分组成

- ECMAScript: 基础语法
- DOM: 文档数据模型
- BOM: 浏览器对象模型

![image-20201130102735850](http://image.brojie.cn/images/image-20201130102735850.png)

### 1) ECMAScript

ECMAScript 是由ECMA（ 原欧洲计算机制造商协会）进行标准化的一门编程语言, 主要规定了像变量, 数据类型, 流程控制, 函数等基础语法

### 2) DOM和BOM

W3C: **万维网联盟** (World Wide Web Consortium) 主要是完成HTML和CSS及浏览器标准化的研究, 是一个非盈利性的公益组织, 主要由大公司和开发人员组成

其中, 

- DOM是由W3C组织制定的标准, 通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色、事件等）
- BOM是由各个浏览器厂商根据DOM在各自浏览器上的实现, 不同的浏览器会略有差异, 通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等

## 3 JS的写在哪里

跟CSS一样, JS也有3种书写方式

- 外部: 将JS文件单独保存, 再通过`<script src="xxx.js">`引入
- 内嵌: 在HTML文件中, 将JS代码写在`<script>`标签中
- 行内: 现在几乎不用

> 示例

外部

```html
<script src="my.js"></script>
```

内嵌

```html
<script>
  alert('Hello  World~!')
</script>
```

在实际工作中, 通常将js代码写在文件中, 再使用外部方式引入.

在学习阶段, 为了调试方便, 主要采用内嵌的方式

## 4 体验JS

为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下：

| 方法             | 说明                           | 归属      |
| ---------------- | ------------------------------ | --------- |
| alert(msg)       | 浏览器弹出警示框               | 浏览器BOM |
| console.log(msg) | 浏览器控制台打印输出信息       | 浏览器BOM |
| prompt(info)     | 浏览器弹出输入框，用户可以输入 | 浏览器BOM |

- 注意：alert() 主要用来显示消息给用户，console.log() 用来给程序员自己看运行时的消息

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
    <script>
      // 这是一个输入框
      var name = prompt('请输入您的姓名')
      // alert 弹出警示框 输出的 展示给用户的
      alert(name + ' 你好!')
      // console 控制台输出 给程序员测试用的
      console.log('我是程序员能看到的:' + name)
    </script>
  </body>
</html>

```

> 调试技巧

在Chrome浏览器中, 使用F12或者`Ctrl+Shift+I`打开调试窗口, 在`console`控制台中查看

![image-20201130140055296](http://image.brojie.cn/images/image-20201130140055296.png)

在控制台中, 也可以编写JS的代码

![image-20201130140307699](http://image.brojie.cn/images/image-20201130140307699.png)

# 二. 变量

## 1 什么是变量

变量是一个存放数据的容器(盒子), 由**变量名**和**变量值**组成

就好比, 通过**房间号(变量名)**可以找到**某个人(变量值)**

![image-20201130141327063](http://image.brojie.cn/images/image-20201130141327063.png)

> 扩展

变量是程序在内存中申请的一块用来存放数据的空间

## 2 变量的使用

### 1) 变量的声明

> 语法

```js
// var 变量名
var uname
var age
```

- var ( variable )是一个 JS关键字, 用来声明变量, 后面跟变量名
- uname/age就是变量名, 计算机通过这个名字就可以找到对应的内存空间, 进而访问到空间里的数据

### 2) 变量的赋值

> 语法

```js
// 变量名 = 变量值
age = 10  // 将数值10放到age对应的空间
```

### 3) 声明的同时赋值

> 示例

```js
var age = 18
```

变量可以重新赋值, 新值会覆盖旧值

```js
age = 81
```

> 注意

一般, 变量先声明再使用

## 3 变量命名规则

在JS中, 变量的命名是有一定的规则的

- 标识符: 由字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号( $ )组成，如：usrAge, num01, _name
- 变量名**严格区分大小写**, 如 `app`和`App`是两个不同的变量
- **不能**以数字开头
- **不能**是 关键字 或者 保留字

推荐使用 驼峰法 (首字母小写，后面单词的首字母需要大写)

如: `myFirstName`

## 4 关键字与保留字

![image-20201130143049376](http://image.brojie.cn/images/image-20201130143049376.png)

更多相关的内容, 参考[JavaScript 保留关键字](https://www.runoob.com/js/js-reserved.html)

# 三. 数据类型

## 1 什么是数据类型

> 现实

描述不同的数据时, 人们往往会使用不同的类型, 比如:

- 姓名: 字符
- 年龄: 数字
- 一个命题的结论: 真假

> 程序

在程序中, 不同类型的数据在存储和传输时占用空间的大小是不同的. 因此, 会存在数据类型的区别

> 变量的数据类型

变量的数据类型就是在变量中保存的数据的类型

> 示例

```js
var uname = '小小胖' // uname变量的数据类型就是字符型
var age = 1 // age变量的数据类型就是数字型
```

JavaScript是弱类型语言, 并没有严格的规定变量的类型, 换句话说, 变量的类型是可以改变的, 但是强烈不建议这么做, 

*不推荐*

```js
var age = 1 // 初始类型是数字型
age = '你好' // age现在是字符型
```

## 2 常用的数据类型

### 1) 简单数据类型

- Number: 数字型
- String: 字符型
- Boolean: 布尔型
- Undefined: 未定义
- Null: 空

| 简单数据类型 | 说明                                   | 默认值     |
| ------------ | -------------------------------------- | ---------- |
| Number       | 数字型, 包含整型和小数型, 如21, 0.2333 | 0          |
| String       | 字符型, 如'张三', 字符串带引号         | ''(空字符) |
| Boolean      | 布尔型, 如true, false; 等价于1和0      | false      |
| Undefined    | 未定义, 变量声明, 未赋值就是undefined  | undefined  |
| Null         | 空                                     | null       |

**数字型**

> 示例

```js
var num = 10 // num 数字型
var PI = 3.14 // PI 数字型
var num3 = 0xFF // 0x开头的是16进制数

console.log(Number.MAX_VALUE) // 数字型的最大值
console.log(Number.MIN_VALUE) // 数字型的最小值
console.log(Number.MAX_VALUE * 2) // Infinity 无穷大
console.log(-Number.MAX_VALUE * 2) // -Infinity 无穷大

console.log('小小胖' - 100) // NaN 非数
```

这里注意一种特殊的数: NaN(Not a Number)非数

**字符型**

使用**引号**来表示一个字符串

- 单引号, 双引号都可以, 推荐使用单引号, HTML中一般使用双引号
- 引号成对使用

> 示例

```js
var str = '我是一个"高富帅"的程序员';
console.log(str);
// 字符串转义字符  都是用 \ 开头 但是这些转义字符写道引号里面
var str1 = "我是一个'高富帅'的程序员";
console.log(str1);
```

转义字符

| 转义符 | 解释说明                          |
| ------ | --------------------------------- |
| `\n`   | 换行符，n   是   newline   的意思 |
| `\\`   | 斜杠   \                          |
| `\'`   | '  单引号                         |
| `\"`   | ” 双引号                          |
| `\t`   | tab  缩进                         |
| `\b`   | 空格 ，b   是   blank  的意思     |

> 字符串拼接

在JavaScript中, `+`是一个很特别的符号, 可以用于字符串的拼接

```js
var str = 'hello ' + 'world'
console.log(str) // hello world
```



```js
var hello = 'hello '
var world = 'world'
var str = hello + world
console.log(str)
```



```js
var str = '10' + '20'
console.log(str) // 1020
```

> 小技巧

在Chrome调试控制台中, 

- 蓝色: 数字
- 黑色: 字符

> 示例

![image-20201130164725021](http://image.brojie.cn/images/image-20201130164725021.png)

**布尔型**

布尔类型有两个值：true 和 false. 其中

- true 表示真
- false 表示假

```js
console.log(true);  // true
console.log(false); // false
```

**Undefined**

一个变量声明了, 但是没有被赋值, 这时变量里会使用默认值undefined

**Null**

空, 在讲对象的时候再讲

### 2) 引用数据类型

- Object: 对象

关于引用数据类型是相对比较难的问题, 在后面的章节, 我们会专门来讲解

这里, 有一句名言, 大家可以先记下来, 后面慢慢体会

> 在JavaScript中, 一切都是对象

## 3 如何判断数据类型

通过`typeof` 可用来获取检测变量的数据类型

> 示例

```js
var num = 18;
console.log(typeof num) // 结果 number
```

## 4 数据类型转换

### 1) 显式转换

最常见的是字符型转数值型

> 需求

1. 先弹出第一个输入框，提示用户输入第一个值 保存起来
2. 再弹出第二个框，提示用户输入第二个值 保存起来
3. 把这两个值相加，并将结果赋给新的变量
4. 弹出警示框（alert) ， 把计算的结果输出 （输出结果）

> 示例

```js
var num1 = prompt('请您输入第一个值：')
var num2 = prompt('请您输入第二个值：')
var result = num1 + num2
alert('您的结果是:' + result)
```

我们发现prompt返回的类型是字符型, 两个字符型相加, 其实是拼接, 并不是我们想要的结果, 这时我们需要先将字符型转换成数字型, 再运算

```js
var num1 = prompt('请您输入第一个值：')
var num2 = prompt('请您输入第二个值：')
var result = parseInt(num1) + parseInt(num2)
alert('您的结果是:' + result)
```

- 第3行, 用到了一个函数, `parseInt`作用是将字符转换成整数

更多转换函数, 参考手册: [JavaScript类型转换](https://www.w3school.com.cn/js/js_type_conversion.asp)

### 2) 隐式转换

> 什么是隐式转换

隐式转换就是JS引擎偷偷将类型转换了, 不让你知道

由于JavaScript是一种非常灵活的语言, 导致数据类型存在大量隐式转换, 这里面有很多坑.

我不打算在这里细讲, 这对初学者来说是个灾难. 但是一些技术的面试题里又特别喜欢扣这些细节

因此, 我们先知道这里有坑, 再后续的面试准备课时, 我们会做一个专题专门来针对性的练习

这些问题, 说实话, 在真实的工作中遇到的概率极低, 但是在面试中(尤其是笔试)中考查的很多. 不得不吐槽一下天朝的面试

> 面试造航母, 上班拧螺丝

通过几个例子, 大家先理解一些常用的

> 示例

`+`的隐式转换

```js
// 只要+号的一边是字符, 最终的结果就是字符
console.log('123' + '456') // '123456'
console.log('123' + 456) // '123456'
console.log('123' + true) // '123true'

// 特殊
undefined + 1 // NaN
```

`==`的隐式转换

大体的原则是

- 字符型 转换成 数字型
- 布尔型 转换成 数字型

> 示例

```js
'1' == 1 // true
true == 1 // true
'1' == true // true

// 特殊的
NaN != NaN // true
undefined == null // true
```

关于Boolean类型的转换

**空字符串(''), NaN, 0, null, undefined** => false

其余的全部 => true

# 四. 运算符

## 1 运算符的分类

**运算符**（operator）也被称为操作符，是用于实现赋值、比较和执行算数运算等功能的符号, 常用的有:

-  算数运算符
-  自增自减运算符
-  比较运算符
-  逻辑运算符
-  赋值运算符

### 1) 表达式和返回值

表达式：是由数字、运算符、变量等以能求得数值的有意义排列方法所得的组合

简单理解：是由数字、运算符、变量等组成的式子

表达式最终都会有一个结果，返回给开发者，称为返回值

> 示例

```js
1 + 1 // 是一个表达式, 返回值是2

var a = 100
a + 100 // 返回值是200

1 == '1' // 返回值是true
```

## 2 算数运算符

算数运算符就是数学运算中的`加减乘除`

| 运算符 | 描述 | 实例                            |
| ------ | ---- | ------------------------------- |
| +      | 加   | 20 + 10 = 30                    |
| -      | 减   | 20 - 10 = 10                    |
| *      | 乘   | 20 * 10 = 200                   |
| /      | 除   | 20 / 10 = 2                     |
| %      | 取模 | 返回余数18 % 2 = 0 ; 15 % 2 = 1 |

小数会存在精度丢失的问题

```js
0.1 + 0.2 ===== 0.30000000000000004
```

![image-20201201103319101](http://image.brojie.cn/images/image-20201201103319101.png)

因此, 不要直接拿小数进行比较!!!

## 3 自增自减运算符

自增自减都是对数字变量的操作

> 示例

```js
var num = 1
num++
++num
```

下面这种是错误的

```js
1++
```

### 1) 前置自增

++num: 先+1, 再返回结果

```js
var num = 10
++num // 表达式返回11, 执行完后num的值是11
```

### 2) 后置自增

num++: 先返回结果, 再+1

```js
var num = 10
num++ // 表达式返回10, 执行完后num的值是11
```

> 练习

```js
var a = 10;
++a; 
var b = ++a + 2;
console.log(b);

var c = 10;
c++;
var d = c++ + 2;
console.log(d);

var e = 10;
var f = e++ + ++e;
console.log(f);
```

## 4 比较运算符

比较运算符是两个数据进行比较时所使用的运算符，比较运算后，会返回一个布尔值（true / false）作为比较运算的结果

| 运算符 | 说明               | 案例         | 返回值 |
| ------ | ------------------ | ------------ | ------ |
| <      | 小于               | 1 < 2        | true   |
| >      | 大于               | 1 > 2        | false  |
| <=     | 小于等于           | 1 <= 2       | true   |
| `>=`   | 大于等于           | 1 >= 2       | false  |
| ==     | 等于(会隐式转换)   | '1' == true  | true   |
| !=     | 不等于             | NaN != NaN   | true   |
| ===    | 全等, 判断类型和值 | '1' === true | false  |

> 字符的比较

字符的比较是按照ASCII码表依次比较的

> 示例

```js
'100' > '99' // false
100 > 99 // true
```



## 5 逻辑运算符

逻辑运算符是用来进行布尔值运算的运算符

后面开发中经常用于多个**条件判断**

| 运算符 | 说明       | 案例         | 返回值 |
| ------ | ---------- | ------------ | ------ |
| &&     | 逻辑与 and | 2>1 && 3 >2  | true   |
| \|\|   | 逻辑或 or  | 2>1 \|\| 3>2 | true   |
| !      | 逻辑非 not | !true        | false  |

### 1) 逻辑与

全真为真, 一假为假

| 案例           | 返回值 |
| -------------- | ------ |
| true && true   | true   |
| false && true  | false  |
| true && false  | false  |
| false && false | false  |

### 2) 逻辑或

全假为假, 一真为真

| 案例             | 返回值 |
| ---------------- | ------ |
| true \|\| true   | true   |
| false \|\| true  | true   |
| true \|\| false  | true   |
| false \|\| false | false  |

### 3) 逻辑非

真假互换

| 案例   | 返回值 |
| ------ | ------ |
| !true  | false  |
| !false | true   |

### 4) 短路运算

当有多个表达式（值）做逻辑运算时

第一个表达式值可以确定结果时,就不再继续运算后边的表达式的值

- 逻辑与

  语法： 表达式1 && 表达式2

      如果第一个表达式的值为真，则返回表达式2
      如果第一个表达式的值为假，则返回表达式1

  ```js
  console.log( 123 && 456 );        // 456
  console.log( 0 && 456 );          // 0
  console.log( 123 && 456 && 789 ); // 789
  ```

- 逻辑或

  语法： 表达式1 || 表达式2

      如果第一个表达式的值为真，则返回表达式1
      如果第一个表达式的值为假，则返回表达式2

   ```js
  // 通常用来给默认值, 如
  function setName(name) {
    var uname = name || ''
  }
   ```

> 示例

```js
var num = 0;
console.log(123 || num++);
console.log(num);
```

> 练习

判断是否为润年, 满足以下两个条件之一就是润年

- 能被4整除且不能整除100
- 能够被 400 整除

```js
var year = 2000
var res = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
```

## 6 赋值运算符

把数据赋值给变量的运算符

| 运算符     | 说明                 | 案例                   |
| ---------- | -------------------- | ---------------------- |
| =          | 赋值                 | var a = 100            |
| +=, -=     | 加, 减一个数后再赋值 | var age = 10; age += 5 |
| *=, /= ,%= | 乘, 除, 取模后再赋值 | var a = 5; age *= 2    |

## 7 运算符的优先级

| 优先级 | 运算符     | 顺序              |
| ------ | ---------- | ----------------- |
| 1      | 小括号     | ()                |
| 2      | 一元运算符 | ++ -- !           |
| 3      | 算数运算符 | 先 * / % 后 + -   |
| 4      | 关系运算符 | `>` `>=` `<` `<=` |
| 5      | 逻辑运算符 | 先 && 后 \|\|     |
| 6      | 赋值运算符 | =                 |

# 五. 流程控制

## 1 概念

流程控制就是来控制代码按照一定结构顺序来执行

主要有3种结构

- 顺序
- 条件
- 循环

程序的流程图, 可以通过使用processon在线编辑: [ProcessOn](https://processon.com)

![image-20201201141847839](http://image.brojie.cn/images/image-20201201141847839.png)

## 2 顺序

顺序结构是程序中最简单、最基本的流程控制，它没有特定的语法结构，程序会按照代码的先后顺序，依次执行，程序中大多数的代码都是这样执行的

## 3 条件

根据不同的条件，执行不同的路径代码(执行代码**多选一**的过程) 从而得到不同的结果

### 1) if语句

> 语法

```js
// 条件成立执行代码，否则什么也不做
if (条件表达式) {
    // 条件成立执行的代码语句
}
```

```js
// 条件成立  执行 if 里面代码，否则执行else 里面的代码
if (条件表达式) {
    // [如果] 条件成立执行的代码
} else {
    // [否则] 执行的代码
}
```
> 示例

```js
var age = prompt('请输入您的年龄:');
if (age >= 18) {
  alert('已成年');
} else {
  alert('未成年');
}
```



```js
// 适合于检查多重条件
if (条件表达式1) {
    语句1
} else if (条件表达式2)  {
    语句2
} else if (条件表达式3)  {
   语句3
 ....
} else {
    // 上述条件都不成立执行此处代码
}
```



### 2) switch语句

switch 语句也是多分支语句，它用于基于不同的条件来执行不同的代码

当要针对变量设置一系列的特定值的选项时，就可以使用 switch

```js
switch( 表达式 ){ 
    case value1:
        // 表达式 等于 value1 时要执行的代码
        break;
    case value2:
        // 表达式 等于 value2 时要执行的代码
        break;
    default:
        // 表达式 不等于任何一个 value 时要执行的代码
}
```

> 示例

将数字1~7转换成星期一到星期天

```js
var num = prompt('请输入一个数字:')
switch (num) {
  case '1':
    alert('星期一')
    break
  case '2':
    alert('星期二')
    break
  case '3':
    alert('星期三')
    break
  case '4':
    alert('星期四')
    break
  case '5':
    alert('星期五')
    break
  case '6':
    alert('星期六')
    break
  case '7':
    alert('星期天')
    break
  default:
    alert('输入有误, 请输入1~7的数字')
}
```

## 4 循环

重复多次执行有规律的代码, 可以使用循环来表示, 通过一个变量可以记录第几次循环, 已经循环的总次数

### 1) for循环

> 语法

```js
for(初始化变量; 条件表达式; 操作表达式 ){
    //循环体
}
```

> 示例

```js
// 基本写法
for(var i = 1; i <= 10; i++){
    console.log('媳妇我错了~')
}
// 用户输入次数
var num = prompt('请输入次数:')
for (var i = 1 ; i <= num; i++) {
    console.log('媳妇我错了~')
} 
```

> 示例

累加求和

```js
var sum = 0
for(var i=1; i<=10; i++) {
  sum += i
}
console.log(sum)
```

> 练习

提示用户输入两个数, 计算累加求和

```js
var num1 = parseInt(prompt('请输入第一个数'))
var num2 = parseInt(prompt('请输入第二数'))

var sum = 0
for (var i = num1; i <= num2; i++) {
  sum += i
}
alert('从' + num1 + '到' + num2 + '的和是: ' + sum)
```

在for循环中, 可以使用if和for循环

> 示例

分别求1~100的奇数和, 偶数和

```js
var even = 0;
var odd = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    even = even + i;
  } else {
    odd = odd + i;
  }
}
console.log('1~100 之间所有的偶数和是' + even);
console.log('1~100 之间所有的奇数和是' + odd);
```

> 示例

 打印3行3列的星星

```js
var star = '';
for (var j = 1; j <= 3; j++) {
    for (var i = 1; i <= 3; i++) {
      star += '☆'
    }
    // 每次满 3个星星 就 加一次换行
    star += '\n'
}
console.log(star);
```

> 练习

打印n行m列的星星

```js
// 打印n行m列的星星
var rows = prompt('请您输入行数:');
var cols = prompt('请您输入列数:');
var str = '';
for (var i = 1; i <= rows; i++) {
  for (var j = 1; j <= cols; j++) {
    str = str + '★';
  }
  str += '\n';
}
console.log(str);
```

> 示例

打印9*9乘法表

```js
var str = '';
for (var i = 1; i <= 9; i++) { // 外层循环控制行数
  for (var j = 1; j <= i; j++) { // 里层循环控制每一行的个数  j <= i
    str += j + '×' + i + '=' + i * j + '\t';
  }
  str += '\n';
}
console.log(str);
```

### 2) while循环

> 语法

```js
while (条件表达式) {
  // 当...条件满足时, 一直执行循环体
  // 循环体代码 
}
```

do...while

```js
do {
    // 循环体代码 - 条件表达式为 true 时重复执行循环体代码
} while(条件表达式);
```

当条件满足时, 执行

区别是do...while会先执行一次, 再判断

### 3) 跳出循环

continue: 跳出当前循环

break: 跳出整个循环

> 示例

```js
 for (var i = 1; i <= 5; i++) {
   if (i == 3) {
     console.log('这个包子有虫子，扔掉');
     continue; // 跳出本次循环，跳出的是第3次循环 
   }
   console.log('我正在吃第' + i + '个包子呢');
 }
```

```js
for (var i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log('发现半条虫子，再也吃不下了');
    break; // 直接退出整个for 循环，跳到整个for下面的语句
  }
  console.log('我正在吃第' + i + '个包子呢');
}
```

# 六. 数组

## 1 基本概念

### 1) 定义数组

数组是指**一组数据的集合**，其中的每个数据被称作**元素**，在数组中可以**存放任意类型的元素**。数组是一种将一组数据存储在单个变量名下的优雅方式

> 语法

```js
//1. 使用[]创建空数组
var  数组名 = []；
//2. 在创建数组时, 给初始值
var  数组名 = ['小白','小黑','小胖'];
```

数组中可以存放任意类型的数据，例如字符串，数字，布尔值等

> 示例

```js
var arr = ['小小胖',12,true,28.9]
```

### 2) 访问数组元素

通过下标(索引)访问数组元素, 下标从0开始

```js
console.log(arr[0])
```

### 3) 添加数组元素

> 示例

```js
var arr = ['小小胖', 12, true, 28.9]
arr[4] = 'newValue'
arr[6] = '第7个值'
console.log(arr) // 数组的长度为7
console.log(arr[5]) // undefined
```

### 4) 删除数组元素

> 示例

```js
delete arr[1] // 删除数组元素, 不改变数组长度
console.log(arr)
```

## 2 遍历

> 遍历: 依次访问数组的每一个元素

```js
var arr = ['red','green', 'blue'];
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

> 示例

求数组中的最大值

```js
var arr = [1, 2, 11, 3, 4]

var max = arr[0]
for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= max) {
    max = arr[i]
  }
}
console.log(max)
```

## 3 多维数组

如果一个数组a的一个元素也是一个数组, 数组a就叫多维数组

> 示例

```js
var arr = [1, 2, ['xiaopang', '小小胖']]
// 如何获得小小胖的值
console.log(arr[2][1])
```

# 七. 函数

## 1 基本概念

可能会有非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用

我们把实现特定功能的代码块叫做一个函数

- 函数可以需要的任何时候调用
- 函数不调用不执行

### 1) 函数声明

> 语法

```js
// 声明函数
function 函数名() {
    //函数体代码
}
```

### 2) 调用函数

> 语法

```js
函数名();
```

> 示例

将累加求和的功能

封装成一个函数, 求1到100和

```js
// 声明函数
function getSum(){
  var sumNum = 0;// 准备一个变量，保存数字和
  for (var i = 1; i <= 100; i++) {
    sumNum += i;// 把每个数值 都累加 到变量中
  }
  alert(sumNum);
}
// 调用函数
getSum();
```

## 2 参数

参数可以使函数实现更加强大的功能

### 1) 实参与形参

> 语法

```js
// 带参数的函数声明
function 函数名(形参1, 形参2 , 形参3...) { // 可以定义任意多的参数，用逗号分隔
  // 函数体
}
// 带参数的函数调用
函数名(实参1, 实参2, 实参3...); 
```

- 形参: 函数声明时参数
- 实参: 函数调用时参数

### 2) 传参的过程

传参的过程就是赋值的过程, 将实参的值赋值给形参

> 示例

进一步改造, 计算从n到m的和

```js
// 声明函数
function getSum(n, m){
  var sumNum = 0;// 准备一个变量，保存数字和
  for (var i = n; i <= m; i++) {
    sumNum += i;// 把每个数值 都累加 到变量中
  }
  alert(sumNum);
}
// 调用函数
getSum(5, 10);
```

## 3 返回值

一般一个函数在调用后, 会产生一个固定的结果, 一般将结果返回出来, 具体要怎么使用这个结果, 不是由函数决定的. 这就是编程里的"单一职责"原则

进一步改造

```js
// 声明函数
function getSum(n, m){
  var sumNum = 0;// 准备一个变量，保存数字和
  for (var i = n; i <= m; i++) {
    sumNum += i;// 把每个数值 都累加 到变量中
  }
  return sumNum
}
// 调用函数
var res = getSum(5, 10)
alert(res)
console.log(res)
```

尝试封装一些函数

1. 求n到m的奇数和
2. 封装一个函数求n到m的平均值
3. 封装一个函数求数组中的最大值

# 八. 对象

## 1 类和对象

### 1) 对象的概念

> 对象: 一个具体的实体

在现实世界中, 对象随处可见, 一个人,  一个学生, 一个杯子, 一辆汽车, 游戏里的一个英雄... 都是一个对象

### 2) 对象的组成

> 如何描述一个对象呢

比如, 

- 每个人都有**姓名**, **年龄**, **性别**这些特征. 
- 游戏里的英雄都有**生命值**, **攻击力**, **防御力**这些特征.

对象除了这些**特征**外, 还有一些**行为/动作**

比如, 

- 人可以**吃饭**, **睡觉**	
- 游戏里的英雄可以**移动**, 可以放**技能**

在程序里,

- 把对象的特征叫做==属性==, 使用**变量**来描述
- 把对象的行为叫做==方法==, 使用**函数**来描述

因此, 我们得出一个重要结论:

> 对象是由属性和方法组成的!!

### 3) 类的概念

> 类: 具有相同特征的事物的集合

我们把具有相同特征和行为的实体抽象出来, 就形成了一个类. 

**比如**: 把人集合在一起, 就形成了人类, 把王者荣耀里的英雄集合起来, 就形成了英雄类

- 每一个人类都有一些相同的特征, 比如: 姓名, 性别, 年龄, 身高, 体重...等
- 每一个英雄也有一些相同的特征, 比如: 生命值, 攻击力, 防御力...等

### 4) 程序中的类与对象

> 那么如何使用程序来描述这些相同的特征呢?

可以定义一个**模板/规范/设计图纸**, 然后通过这个**模板/规范/设计图纸**来==生产==一个个的**实体**. 

比如: 我们可以通过宝马车的设计图纸来生产一辆宝马车

![1565924541133](http://image.brojie.cn/images/1565924541133.png)

- 我们把定义的这个**模板**叫做==类==
- 把生产出来的**实体**叫做==对象==
- 把生产的过程叫做==实例化==

### 5) 类和对象的关系

类和对象的关系, 可以认为是==整体和个体, 抽象和具体的关系==

通过上面的描述, 总结起来说, 就是

- 类是对象的集合
- 对象是类的实例化

### 6) 小结

1. 对象是由属性和方法组成的
2. 属性就是变量, 方法就是函数
3. 类是对象的集合, 对象是类的实例化

补充: 由于类是对象的集合, 通常我们也可以说类由属性和方法组成~

## 2 初步认识JS中的类和对象

### 1) 构造函数的定义

在JS中, 没有类(class)的概念, 主要是通过`构造函数`来模拟的.[^1]

> 语法

```js
function 构造函数名 () {
    // 函数体
}
```

1. 使用`function`关键字表示定义一个构造函数
2. 构造函数名一般==首字母大写==

> 示例: 2-1构造函数的定义.html

```js
function Person() {
    
}
```

通过以上方式就可以定义一个Person构造函数, 相当于定义好了一个Person类

### 2) 构造函数的作用

#### 通过构造函数实例化对象

在JS中, 我们通过构造函数(类)来实例化对象

> 语法

```js
new 构造函数名()
```

> 示例: 2-2通过构造函数实例化对象.html

```js
// 一. 定义一个构造函数
function Person() {
    
}
// 二. 实例化一个对象, 赋值给变量p
var p = new Person();
console.log(typeof p); // object
```

以上代码

- 通过new关键字, 产生了一个对象, 并赋值给变量p
- 通过`typeof p`测试变量p的类型为object, 说明p是一个对象

#### 在构造函数中定义属性

> 构造函数规定了由该类实例化出来的对象应该包含哪些属性

比如, 由学生类实例化出来的学生对象都应该有`姓名`, `年龄`这些属性

```js
function Student () {
    this.uname = null;
    this.age = null;
}
```

在构造函数的内部, 我们通过`this.属性名`的方式来定义属性

在这里, 大家先把这个看作固定写法, 后面我们再具体分析

> 构造函数虽然可以规定实例对象应该包含哪些属性, 但是并不能确定实例对象的属性值

比如 人类都应该有名字这个属性, 但是具体叫什么名字, 只有在一个人出生的时候才去确定

因此, 在实例化对象的时候, 需要将`具体的数据`传递给构造函数

> 示例: 2-3在构造函数中定义属性.html

``` js
// 一. 定义一个学生类
function Student(n, a) {
    this.uname = n;
    this.age = a;
}
// 二. 实例化对象
var stu = new Student('xiaoming', 20);
```

> 重要结论
>
> ​	==构造函数主要完成属性的初始化!!!==

> 练习

一. 通过构造函数Phone定义一个手机类, 包含型号(type), 价格(price), 颜色(color), 屏幕大小(size)

二. 实例化两个对象

- 一个iphone对象, 型号: iphoneX, 价格: 6999, 颜色: 土豪金, 屏幕大小: 5.8英寸
- 一个huawei对象, 型号:p30 pro, 价格: 5988, 颜色: 极光蓝, 屏幕大小: 6.1英寸

> 参考答案

```js
// 一. 定义手机类
function Phone(type, price, color, size) {
    // 属性
    this.type = type;
    this.price = price;
    this.color = color;
    this.size = size;
}
// 二. 实例化对象
var iphone = new Phone('iphoneX', 6999, '土豪金', '5.8英寸');
var huawei = new Phone('p30 pro', 5988, '极光蓝', '6.1英寸');
```

> 作业

一.通过构造函数Hero定义一个英雄类, 包含血量(HP), 类型(type), 攻击力(attack)

二.实例化两个对象

- 一个lianpo对象, 血量:700, 类型: 力量型, 攻击力: 70
- 一个houyi对象, 血量:300, 类型: 射手, 攻击力: 130

### 3) 小结

1. 通过构造函数定义类(规定应该包含哪些属性名)
2. 通过new实例化对象(在实例化时, 确定属性值)
3. 构造函数主要完成==属性==的初始化

## 3 对象的方法

### 1) 方法的定义与使用

我们已经知道

1. 类由属性和方法组成
2. 在JS中, 通过构造函数定义类
3. 在构造函数中可以通过`this.属性名`定义属性

那么, 在构造函数中是否也可以通过`this.方法名`定义方法呢?

#### 在构造函数中定义方法

> 示例: 3-1在构造函数中定义方法.html

按照之前的方式, 尝试编写如下代码

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = function () {
    console.log('大家好');
  }
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);
```

- uname和age是属性
- sayHi是方法, 方法就是一个==函数==

#### 方法的使用(调用)

> 语法

```js
对象.方法名()
```

- 由于方法就是一个函数, 在后面加小括号表示方法的调用

> 示例: 3-2调用对象的方法.html

```js
// 三. 调用方法 -- 对象.方法名()
stu.sayHi(); // 大家好
```

### 2) 存在的问题

虽然可以在构造函数中定义方法, 但是一般不这么做, 为什么呢?

看如下示例:

> 示例: 3-3为什么不在构造函数中定义方法.html

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = function () {
    console.log('大家好');
  }
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// 三.判断stu.sayHi === stu1.sayHi ?
console.log(stu.sayHi === stu1.sayHi); //false
```

- 上面这个比较表示stu对象和stu1对象的sayHi方法在内存中的首地址是不同的!!!

我们发现

```js
function () {
  console.log('大家好');
}
```

这段代码是相同的, 但是在每次实例化新对象时, 都会分配新的内存空间, 造成浪费.

### 3) 小结

1. 一般不在构造函数中定义方法, 为什么?
2. 方法的调用语法: `对象.方法名()`

## 4 对象实例化原理分析

### 1) 引用数据类型

对象是一种特殊的数据, 看如下代码

> 示例

```js
// 一. 定义一个学生类
function Student(n, a) {
    this.uname = n;
    this.age = a;
}
// 二. 实例化对象
var stu = new Student('xiaoming', 20);
```

- 这里并**不是**把所有的数据直接保存在变量中
- 而是先在堆区开辟一个空间, 把这个空间的**引用**保存在变量中. 
- 在js中, ==函数==和==对象==都是**引用**数据类型

![1565939764990](http://image.brojie.cn/images/1565939764990.png)

这里有个词--"==引用=="

> 什么是引用呢, 引用有什么用呢?

一句话解释: ==**引用**就是来找数据的==

类似于路径的概念, 就像我们可以通过路径`E:\docment\image\img.jpg`找到电脑中的一个文件, 

又或者酒店的房间号, 通过房间号就可以找到房间

通过引用就可以找到内存中的数据.

引用本质上是**内存首地址**. 通过这个地址就可以找到对应的内存空间, 进而获取数据

### 2) new实例化的过程

> 示例

```js
// 一. 定义一个学生类
function Student(n, a) {
    this.uname = n;
    this.age = a;
}
// 二. 实例化对象
var stu = new Student('xiaoming', 20);
```

![new过程](http://image.brojie.cn/images/new过程.gif)

当代码执行到行7行时. 

1. 在堆内存中开辟一段内存空间, 假设这段内存空间是从`0x1111~0x2000`

   因此通过`0x1111`就可以找到对应的这段内存空间, 进而获取其中的数据

2. 将`0x1111`保存在`this`中, 我们也可以说让this指向这个空间

3. 执行函数. 通过`this=0x1111`找到内存空间, 在这个空间中保存数据`name:xiaoming,age:20`

4. 最后, 将`0x1111`返回, 保存在stu中

> 练习

如果再实例化一个对象stu1, (假设内存地址是0x2222), 画出实例化的过程

```js
// 一. 定义一个学生类
function Student(n, a) {
    this.uname = n;
    this.age = a;
}
// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);
```

> 参考答案

![1565942200223](http://image.brojie.cn/images/1565942200223.png)

这样, 我们就可以通过一个模板(Student构造函数)得到多个不同的对象(stu对象和stu1对象). 对象中保存的数据也不一样.

### 3) 为什么不在构造函数中定义方法

我们在上面的基础上进一步深入.

> 示例

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = function () {
    console.log('大家好');
  }
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);
```

上述代码的图解如下:

![1565944523218](http://image.brojie.cn/images/1565944523218.png)

这就解释了我们前面的问题. 虽然sayHi方法的代码是相同的, 但是每次实例化时会开辟一个新的内存空间, 造成浪费. 

### 4) 初步解决

既然方法是相同的, 我们可不可以单独定义一个函数赋值给sayHi呢?

> 示例: 4-1初步解决方法定义.html

```js
// 初步解决方案

// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = sayHi;
}

function sayHi() {
  console.log('大家好');
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);
```

上述代码图解如下:

![1565945656148](http://image.brojie.cn/images/1565945656148.png)

这样做确实可以解决, 但是这种做法很奇怪. 一般也不会使用, 为什么这么说呢. 

照理说, `sayHi`函数应该仅仅是属于Student类. 只有通过Student类实例化出来的对象可以调用. 而如果把`sayHi`放在全局下. 可以当成普通函数调用. 因此, 我们称这种做法破坏了类的`封装性`. 

> 什么是**封装性**?
>
> ​	==类的成员尽量封闭在类的内部, 隐藏细节与实现==

看下面这个示例

> 示例: 4-2初步解决方案带来的问题.html

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = sayHi;
}

function sayHi() {
  console.log('大家好, 我叫'+this.uname);
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// 使用对象调用可以得到希望的结果
stu.sayHi(); // 大家好, 我叫xiaoming

// 当普通函数直接调用, 会得到'奇怪'的结果
sayHi(); // 大家好, 我叫undefined
```

为什么会出现这种'奇怪'的现象. 要搞明白这个问题, 就要了解js中的this指向[^2]

### 5) 初步了解this指向

为了搞清楚构造函数中的this, 我们还是先通过图解的方式来分析

> 示例

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = sayHi;
}

function sayHi() {
  console.log('大家好, 我叫'+this.uname);
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// 使用对象调用可以得到希望的结果
stu.sayHi(); // 大家好, 我叫xiaoming
```

> 图解

![对象调用方法的过程](http://image.brojie.cn/images/对象调用方法的过程.gif)

通过上面的分析. 我们至少可以得出这样的结论

1. this也是一种引用数据类型
2. this的指向是在函数调用时确定的

上述代码, 更为准确的写法是

> 示例: 

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = sayHi;
}

function sayHi() {
  console.log('大家好, 我叫'+this.uname);
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// call表示调用函数, 并确定this指向stu对象
stu.sayHi.call(stu); // 大家好, 我叫xiaoming
```

> 思考: 4-3思考题答案.html
>
> ​	如果在调用sayHi的时候, 让this指向stu1, 大家思考一下会得到什么结果

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = sayHi;
}

function sayHi() {
  console.log('大家好, 我叫'+this.uname);
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// call表示调用函数, 并规定this指向stu1对象
stu.sayHi.call(stu1); // ???
```

> 思考题答案
>
> ​	大家好, 我叫xiaomei

过程分析

1. 通过stu找到0x1111
2. 调用sayHi函数
3. 确定this指向stu1
4. 通过this找到this.uname, 也就是stu1.uname等于xiaomei

最后, 我们分析把`sayHi`当普通函数调用的过程

如果把`sayHi`当普通函数调用, 相当于在全局对象(在浏览器环境中是window)添加了属性和方法

因此, 更准确的写法如下

> 示例: 4-4当做普通函数调用.html

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = sayHi;
}

function sayHi() {
  console.log('大家好, 我叫'+this.uname);
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// call表示调用函数, 并确定this指向window对象
// 在window对象中并没有uname这个属性, 因此值为undefined
window.sayHi()
sayHi.call(window); // 大家好, 我叫undefined
```

> 思考
>
> ​	如果我们人为在window中添加一个uname属性会怎样呢?

> 示例

```js
// 一. 定义类
function Student(n, a) {
  this.uname = n;
  this.age = a;
  this.sayHi = sayHi;
}

function sayHi() {
  console.log('大家好, 我叫'+this.uname);
}

// 二. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// 定义一个全局变量, 相当于在window对象中添加了一个uname属性
var uname = '全局uname';
sayHi(); // 大家好, 我叫全局uname
```

## 5 原型

前面, 我们了解到属性可以定义在构造函数中, 但是==方法的定义==没有很好的解决方案. 

为了解决这个问题, 提出了**原型模式**

或者, 换句话说: ==原型的产生主要是为了解决**方法共享**的问题==

### 1) 什么是原型模式

系统在创建构造函数的同时, 会自动在内存中生成一个与之相应的对象, 这个对象就是**原型对象**

比如: 

```js
// 定义一个构造函数
function Person() {}
```

系统在创建Person构造函数的同时, 自动在内存中生成一个与之对应的Person原型对象

![1566028407103](http://image.brojie.cn/images/1566028407103.png)

由上图可知, 构造函数与原型对象是两个**独立**的内存空间

### 2) 构造函数与原型对象的关系

他们是相对独立的. 但是又存在联系

> 示例

```js
// 一. 构造函数
function Person(n) {
  this.uname = n;
}
// 二. 打印构造函数的结构
console.dir(Person);
```

在Person构造函数的内部存在一个属性 **prototype**指向Person的原型对象

在Person原型对象的内部也存在一个属性**constructor**指向Person的构造函数

![1566028693235](http://image.brojie.cn/images/1566028693235.png)

证明Person构造函数中存在prototype属性

![1566030090490](http://image.brojie.cn/images/1566030090490.png)

由上图可知, Person构造函数中, 确实存在prototype属性, 该属性指向一个对象

### 3) 实例对象与原型对象的关系

在由Person类实例化出来的对象person1和person2中也有一个属性`__proto__`(隐式原型)指向原型对象

> 示例

```js
// 一. 构造函数
function Person(n) {
  this.uname = n;
}

// 二. 实例化对象
var person1 = new Person('xiaoming');
var person2 = new Person('xiaomei');

// 三. 打印person1和person2的内部结构
console.dir(person1);
console.dir(person2);
```

> 证明

由Person实例化出来的实例对象person1中存在`__proto__`属性指向Person的原型对象

![1566095096622](http://image.brojie.cn/images/1566095096622.png)

### 4) 三者的关系

构造函数的`prototype`属性和实例对象的`__proto__`属性指向同一个对象

> 示例

```js
// 一. 定义构造函数
function Person(n) {
  this.uname = n;
}

// 二. 实例化对象
var p = new Person('xiaoming');

// 三. 测试
console.log(Person.prototype === p.__proto__); // true
```

> 图解

![1568169094147](http://image.brojie.cn/images/1568169094147.png)

### 5) 使用原型定义方法

我们先大致了解下如何通过原型模式定义方法, 再具体分析

> 示例

```js
// 一. 在构造函数中定义属性
function Student(n, a) {
  this.uname = n;
  this.age = a;
}

// 二. 在原型中定义方法
Student.prototype.sayHi = function () {
  console.log('大家好, 我叫'+this.uname);
}

// 三. 实例化对象
var stu = new Student('xiaoming', 20);
var stu1 = new Student('xiaomei', 18);

// 比较不同的对象的方法是否相同
console.log(stu.sayHi === stu1.sayHi); // true
// 我们发现stu中并没有sayHi这个方法, 但是为什么可以使用呢?
```

### 6) 小结

- 在构造函数中定义属性
- 在原型对象中定义方法

# 九. 常用的内置对象

## 1 常用的内置对象

- Math对象
- Date对象
- 字符串对象
- 数组对象

> 学习方法

**查文档! 查文档! 查文档!**

学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。
		Mozilla 开发者网络（MDN）提供了有关开放网络技术（Open Web）的信息，包括 HTML、CSS 和万维网及 HTML5 应用的 API。
		MDN:https://developer.mozilla.org/zh-CN/

## 2 Math对象的常用方法

| 方法名                | 功能                      |
| --------------------- | ------------------------- |
| Math.floor()          | 向下取整                  |
| Math.max()/Math.min() | 求最大和最小值            |
| Math.random()         | 获取范围在[0,1)内的随机值 |

## 3 Date对象的常用方法

| 方法名        | 功能           |
| ------------- | -------------- |
| getFullYear() | 获取年份       |
| getMonth()    | 获取月份(0~11) |
| getDate()     | 获取日期(1~31) |
| getDay()      | 获取星期(0~6)  |
| getHours()    | 获取小时       |
| getMinutes()  | 获取分钟       |
| getSeconds()  | 获取秒         |

## 4 数组对象的常用方法

| 方法名   | 功能                     | 返回值         |
| -------- | ------------------------ | -------------- |
| push()   | 在末尾添加元素           | 新数组的长度   |
| pop()    | 删除最后一个元素         | 删除的元素的值 |
| slice()  | 截取子数组               | 新数组         |
| splice() | 通常用于删除某个指定元素 | 新数组         |

## 5 JSON对象的常用方法

| 方法名                       | 功能                         | 返回值     |
| ---------------------------- | ---------------------------- | ---------- |
| JSON.parse(str)              | 将JSON字符串转换成JS对象     | JS对象     |
| JSON.stringify(obj, null, 2) | 将 JS 对象转换为 JSON 字符串 | JSON字符串 |

