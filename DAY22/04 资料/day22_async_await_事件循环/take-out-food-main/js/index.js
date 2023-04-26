/* 获取header元素对象 */
const header = document.querySelector('.header')

//监听文档的滚动
window.addEventListener('scroll',function(){
    if(this.scrollY > 300 ){  //使用pageYOffset也是可以的!!!
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})