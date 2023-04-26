const mouseDot=document.querySelector('.mouse-dot');
const mouseCircle=document.querySelector('.mouse-circle');
const oTopbar=document.querySelector('.topbar');
const menuTits=document.querySelectorAll('.page-two .wrap .menu li');
const menuContents=document.querySelectorAll('.page-two .wrap .content>li');

//圆圈跟随鼠标动画特效；鼠标移入a标签内跟随圆圈变化
(function mouseMove(){
    document.addEventListener('mousemove',function(e){
        const topDistance=window.pageYOffset
        // console.log(e.clientY);
        //中心点跟随
        setTimeout(function(){
            mouseDot.style.top=e.clientY+topDistance-3+'px';
            mouseDot.style.left=e.clientX-3+'px';
        },60)
        //圆圈跟随
        setTimeout(function(){
            mouseCircle.style.top=e.clientY+topDistance-16+'px';
            mouseCircle.style.left=e.clientX-16+'px';
        },150)   
    })
    /* window.addEventListener('scroll',function(e){
        const topDistance=window.pageYOffset
        console.log('滚动');
        mouseDot.style.top=e.clientY+topDistance-3+'px';
        mouseDot.style.left=e.clientX-3+'px';
        mouseCircle.style.top=e.clientY+topDistance-16+'px';
        mouseCircle.style.left=e.clientX-16+'px';
    }) */
})();

//鼠标移入a标签内跟随圆点变化
(function dotChange(){
    const aTag=document.querySelectorAll('a');
    //鼠标移入a标签内跟随圆圈变化
    for(let i=0;i<aTag.length;i++){
        aTag[i].addEventListener('mouseover',function(e){
            mouseCircle.style.display='none'
            mouseDot.classList.add('mouse-dot-hover');
        })
        aTag[i].addEventListener('mouseout',function(e){
            console.log('出a标签'+i);
            mouseCircle.style.display='block'
            mouseDot.classList.remove('mouse-dot-hover');
        })
    }
    
})();

//页面向上滑动一定距离，顶部导航栏固定浏览器顶部
(function topbarFixed(){
    window.addEventListener('scroll',function(){
        const topDistance=window.pageYOffset
        // console.log(topDistance,oTopbar);
        if(topDistance>300){
            oTopbar.classList.add('hid');
            oTopbar.style.top='0px';
        }else{
            oTopbar.classList.remove('hid');
            oTopbar.style.top='-78px';
        }
    })
})();

//第二页的轮播图
(function menuClick(){
    for(let i=0;i<menuTits.length;i++){
        menuTits[i].addEventListener('click',function(){
            console.log('点击'+i);   
            for(let j=0;j<menuTits.length;j++){
                // console.log('移除',element,menuTits[j],j);
                menuTits[j].classList.remove('show');
                menuContents[j].classList.remove('show');
            }        
            // menuContents.forEach((element,index) => {
            //     console.log('移除',element,menuTits[index],index);
            //     menuTits[index].classList.remove('show');
            //     element.classList.remove('show');
            // });
            console.log(menuContents[i]);
            menuTits[i].classList.add('show');
            menuContents[i].classList.add('show');
        })
    }
})();

//引入地图
(function getMap(){
    var map = new BMap.Map("allmap");
    var ppp = new BMap.Point(114.413,30.47);
    map.centerAndZoom(ppp, 17);
    //添加地图控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    // var marker = new BMapGL.Point(114.41,30.46);  // 创建标注   
    // map.addOverlay(marker);     
    map.enableScrollWheelZoom(true);  //是否开启滚轮缩放
})();

//侧边导航栏
(function sidebar(){
    const topNavBtn=document.querySelector('.topbar>.btn');
    const leftNav=document.querySelector('.top-nav1');
    const leftClose=document.querySelector('.top-nav1 .close');

    console.log(topNavBtn,leftNav);
    topNavBtn.addEventListener('click',function(){
        leftNav.classList.toggle('show')
    })
    leftClose.addEventListener('click',function(){
        leftNav.classList.toggle('show')
    })
})();
