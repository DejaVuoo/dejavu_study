# 昨日回顾

```
面向对象
    概念
        思维方式，完成一件事，找对象，找合适对象，帮我们去做

	类和对象
		目的：用代码去描述现实生活中的事物
		类：对现实生活中具有相同属性和行为的事物的统称(模板-->汽车图纸)
		对象：根据类创建出来的一个真实存在的个体(实物-->汽车)
		
	类的设计(三要素)
		三要素	类名	属性行为

	创建类
        function类名（参数列表）{
            //给属性赋值
            this,属性名=参数值
            //给方法赋值
            this.方法名=匿名函数
        }
		var 对象名 = new 类名（实际参数）
		
	字面量形式
        var对象名={
            属性名：属性值，
            方法名：匿名函数
        }

Math
    属性
    	PI
    方法
        ceil()
        floor ()
        round ()
        random()
        [min,max]Math.floor (Math.random()*(max-min+1))+min

Date
    创建
        new Date()
        new Date(数字参数或者字符串参数)
    
    方法
        获取年月日
        获取时分秒
        获取毫秒值

Numbe r
    属性
    	NaN
    方法
        parseInt
        parseFloat
        isNaN()


```



# Array对象

```
添加和删除
    push()	shift()
    pop()	unshift()
	splice()

查找
	查找索引indexof()	lastIndexof()
	查询元素include() 	find()

遍历每个元素进行操作（都必须传一个函数）
	filter()	every()		some()		find()		map()
	
拼接截取
	concat() 拼接数组	slice()	截取数组	join()	拼接元素截取数组(可以将数组转成字符串,可以指定分隔符)
	
转换
	tostring()(也可以将数组转成字符串，默认用逗号分隔元素)	
	
遍历
	forEach()数组每个元素都执行一次回调函数

反转和排序
	reverse() sort()

展开运算符
	...数组名	
	
	
	
	
	
	
	
	
	
	
	
	
	
```



# String对象

```
































```



# 正则对象

# Json格式