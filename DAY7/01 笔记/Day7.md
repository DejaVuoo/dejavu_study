# Day7

# 昨日回顾

```
浮动
    概念
    	一种布局方式，让元素漂浮起来，实现块元素水平布局
    语法
        float
        left right none
        clear
        left right both
    
   	 特点
        1,脱标
        2,优先级比标准流高，可以覆盖标准流
        3,下一个浮动元素在上一个浮动元素左右排布
        4,会受上面元素边界的影响
        5,对于行级元素浮动之后，可以设置宽高，相当于变成了块级元素
    清除浮动
        原因
        	子元素浮动之后，无法撑开父元素的高度，会对后面元素布局产生影响
        解决
            1,给父元素设置高度
            2,额外标签法
            3,单伪元素清除
            4,双伪元素清除 

定位
    概念
    	一种布局方式，解决盒子层叠问题和固定显示
    使用
        设置定位方式
        设置偏移值
    分类
        相对定位
            相对于元素之前的位置（没有脱标）
            原点：它在标准流的左上角
    	绝对定位
            相对于最近有定位祖先元素，如果都没有，相对于body(脱标)
            原点：有定位的祖先元素，没有的话，就是body左上角
        固定定位
            相对于body
            原点：body的左上角
        应用
            子绝父相，固定显示 
其他属性
	vertical-align
        作用
        	设置行内元素，行内块元素的垂直对齐方式
        取值
            baseline
            bottom
            middle
            top
        应用	
        	图片和文字底部对齐
                img撑开div高度的时候，底部有间隙
                img在div中垂直居中问题（只设置1ine-height不起作用）
     overflow
        概念
        	控制内容区域超出之后的显示效果
        取值
            hidden
            auto
      隐藏效果
        display:none 不占位置，常用方式
        visibility:hidden  占据位置           
字体图标
    iconfont
    	需要下载字体库，引入，调用对应的类名去展示
    font-awesome
    	直接引入，调用对应的类名去展示       
```

# CSS新特性

### 过渡

```
作用
	让元素的样式慢慢发生改变，通常跟hover配合使用
使用
	transition:属性名过渡时间
注意
	这个一般需要在过渡元素本身上添加
```

### 位移

```
作用
	让元素沿着×轴或者y轴移动
语法
    translatex(x) 	 定义转换，只是用X轴的值。
    
    translateY(y)	 定义转换，只是用Y轴的值。
    
    translate(x,y)   定义2D转换。
取值
	像素值，或者百分百（相对于自身）  
```

### 旋转

```
语法
	transform:rotate(angle)定义2D旋转，在参数中规定角度。
取值
    正数：顺时针
    负数：逆时针
```

### 渐变

```
语法
	background-image:linear-gradient()创建一个线性渐变的"图像"（从上到下）
linear-gradient()
    函数用于创建一个表示两种或多种颜色线性渐变的图片。
    创建一个线性渐变，需要指定两种颜色，还可以实现不同方向（指定为一个角度）的渐变效果，如果不指定方向，默认从上到下渐变。

```

### 动画

```
语法
	1,先定义动画
        @keyframe 动画名称{
            from{开始状态}
            to{结束状态}
            }
	2,使用动画
        animation动画名称动画时长
        animation属性（复合属性）
        	name duration timing-function delay iteration-count direction fill-mode  play-state;
        animation-name 指定要绑定到选择器的关键帧的名称
        animation-duration 动画指定需要多少秒或毫秒完成
        animation-timing-function 设置动画将如何完成一个周期
        
        animation-de1ay 设置动画在启动前的延迟间隔。
        animation-iteration-count  定义动画的播放次数。
      
```

# flex布局

### 概念

```
概念
    一种弹性布局方式，使用它布局页面更加的简单灵活避免浮动脱标的影响,提高开发效率
和浮动区别
	1,浮动会导致子元素脱标，flex不会
	2,浮动属性写在子元素上，flex布局属性写在父元素上
```

### 组成

```
弹性容器（父元素）
弹性盒子（子元素/flex子项/弹性元素）
主轴（横轴），默认是水平方向 --子元素默认是沿着主轴排布，所以默认在水平方向
侧轴（纵轴/交叉轴），默认是在垂直方向
```

### 使用

```
1,在父元素上添加display:flex属性
2,根据需要添加对应轴的属性来实现布局
```

### 主轴对齐方式

```
justify-content设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
	
	center 居中排列。	

    space-between 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点。

    space-evenly 均匀排列每个元素，每个元素之间的间隔相等。

    space-around 均匀排列每个元素，每个元素周围分配相同的空间。
    
    

```

### 侧轴对齐方式

```
a1ign-items定义f1ex子项在f1ex容器的当前行的侧轴（纵轴）方向上的对齐方式。

flex-start	元素位于容器的开头（上面）。

flex-end	元素位于容器的结尾（底部）。

center		元素位于容器的中心。

stretch		默认值。元素被拉伸以适应容器

```

### 子项空间分配

```
属性名
	flex(复合属性)
作用
	设置了子元素如何分配空间，实现子元素宽度的动态调节
使用
	flex:数值（占据父元素刺余尺寸的分数）
```

### 换行显示

```
子级元素换行显示
	flex-wrap:wrap
换行之后行的显示方式
	align-content
        center居中
        space-between上下没有间隙，中间间隙等分
        Space-around中间间隙是上下间隙的2倍
        space-even1y所有间隙等分
```

### 修改轴向

```
做法
	flex-direction:column;
修改之后的对齐
    水平居中：align-items:center;
    垂直居中：justify-content:center;
```

