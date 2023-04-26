# 昨日回顾

```
元素偏移量offset(经常用于获取元素的位置)
    offsetTop 上外边距
    offsetLeft 左外边距
    offsetwidth 宽度，包含边框+内边距
    offsetHeight 高度，包含边框+内边距

元素可视区client(经常用于获取元素的大小)
    clientTop 上边框的宽度
    clientLeft 左边框的宽度
    clientwidth 宽度，包含内边距，不包含边框
    clientHeight 高度，包含内边距，不包含边框

元素滚动scroll(经常用于获取滚动的距离)
    scrollTop 垂直滚动的距离
    scrollleft 水平滚动的距离
    scrollwidth 宽度，包含内边距，不包含边框
    scrollHeight 高度，包含内边距，不包含边框

异常
    throw 抛出
    try-catch-finally 处理

promise
	本质是一个对象，对象有属性和方法
    
    属性
        状态属性promisestate
            默认是pending状态
            调用resolve() 方法 变成完成状态
            调用reject() 方法 变成拒绝状态
       
       	结果属性promiseResult
            默认是 undefined
            调用 resolve()或者reject()方法，加上一个参数，就可以将数据保存结果属性中
            
    方法
        接收两个函数，如果的状态是成功的，就会调用第一个函数，如果是失败的，就会调用第二个函数
        then()只有在状态改变的时候才会调用
        可以给then方法的函数加一个参数，就可以拿到结果属性中的值        
	then方法返回值
        又是一个新的oromise对象，可以继续调用then方法，从而实现链式编程
        链接编程执行的前提条件，第一个promise状态必须发生改变，不能是pending状态
        
    好处
		可以将异步函数写成同步的形式    
```



# async-await

```
概念
    异步的意思

作用
    可以将同步函数变成异步函数（调用async修饰的函数返回就是promise对象）
    就可以调用then方法

使用
    定义
        async function f2(){
        	return 222
        }
    调用
        const p = f2() //因为数据在promise的结果属性中，需要在then方法中获取
        p.then(data=>{
            console.log(data);
        })

await
    概念
    	等待的意思
    作用
        await 可以等待他后面的promise对象，执行完之后，拿到结果属性中的数据（返回的数据）
    注意
        await不能单独使用，必须跟async连用，存在于异步函数中
        await后面必须跟一个promise对象，如果不是promise对象，会自动转成promise对象
        awsit表达式返回的是promise执行后的结果（异步函数结果属性中的值）
    使用   
    async function f() {
				async function f2() {
				return 222
			}
			const p = await f2() //只需要在异步函数的前面加一个await关键字，就可以拿到异步函数结果属性中的值

			console.log(p);
			}
			f()    
```



# 事件循环

```
进程
	内存中正在运行的一个程序，每个应用至少有一个进程
线程
    这个程序一条执行路径
    一个进程至少有一个线程，在进程开启之后会自动创建一个线程来运行代码，这个线程称为主线程

多线程
    一个程序有多条执行路径，每个线程可以执行不同的代码，完成不同的功能

浏览器
    是一个多进程多线程的应用程序，它至少开启了3个进程
        浏览器进程，主要负责界面显示，用户交互，子进程管理等
        网络进程，主要负责加载网络资源
        渲染进程，会开启一个渲染主程序，主程序负责执行html,css,js代码

同步任务
	在主线程上排队的任务，只有一个任务执行完毕，才会执行下一个任务   

异步任务
    不进入主程序，而进入'任务队列'的任务，只有'任务队列'通知主线程，某个异步任务可以执行了
    该任务才会进入主线程执行

事件循环
    Event Loop,是]avascript或者Node为解决单线程代码执行不阻塞主进程的一种机制（也可以理解为异步)，事件循环主要负责执行代码，收集和处理事件，以及执行队列中子任务
 
优先级
    任务没有优先级，但是消息队列有优先级
    由于浏览器复杂性急剧提升，W3C不再使用传统的宏队列和微队列方式
    由浏览器决定选取哪一个队列的任务来执行
    
    
```

