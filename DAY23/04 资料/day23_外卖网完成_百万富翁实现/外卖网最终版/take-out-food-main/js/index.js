/* 获取header元素对象 */
const header = document.querySelector('.header')

//监听文档的滚动
window.addEventListener('scroll',function(){
    if(scrollY > 300 ){  //使用pageYOffset也是可以的!!!
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})

//获取元素
const items = document.querySelectorAll('[data-reveal]')

//移动的动画方法
function moveAnimation(){
    items.forEach(function(item){
        //元素距离浏览器可视区域顶部的距离 < 1屏
        if(item.getBoundingClientRect().top<window.innerHeight-100){
            item.classList.add('reset')
        }
    })
}

//添加load事件
window.addEventListener('load',moveAnimation)

window.addEventListener('scroll',moveAnimation)