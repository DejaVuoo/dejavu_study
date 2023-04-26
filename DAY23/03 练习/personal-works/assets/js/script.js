const preloader = document.querySelector("[data-preloader]");

window.addEventListener("Load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * Custom cursor 鼠标滚动跟随效果
 */

const cursors = document.querySelectorAll("[data-cursor]");
// const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];
const hovercursors = document.querySelectorAll('a')
window.addEventListener("mousemove", function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});

// 此段代码有一个暂时无法解决的BUG，就是滚动页面之后圆图案会发生严重错误
// 获取页面中所有的 a 标签和 button 标签
			const links = document.querySelectorAll('a, button,span');
			
			// 创建一个 div 元素作为跟随鼠标移动的圆型图案
			const circle = document.createElement('div');
			circle.style.position = 'absolute';
			circle.style.width = '60px';
			circle.style.height = '60px';
			circle.style.borderRadius = '50%';
			circle.style.backgroundColor = '#eee';
			circle.style.opacity = '0.5';
			circle.style.pointerEvents = 'none'; // 禁止图案响应鼠标点击事件
			
			// 绑定鼠标移动事件监听器，显示/隐藏圆型图案
			document.addEventListener('mousemove', (event) => {
			  if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'SPAN') {
			    // 显示圆型图案，并跟随鼠标移动
			    circle.style.top = `${event.clientY - circle.offsetHeight / 2}px`;
			    circle.style.left = `${event.clientX - circle.offsetWidth / 2}px`;
			    document.body.appendChild(circle);
			  } else {
			    // 隐藏圆型图案
			    circle.remove();
			  }
			});



/**
 * Element tilt effect 图片的动画效果 通过perspective 和rotate实现
 */

// const tiltElements = document.querySelectorAll("[data-tilt]");

// const initTilt = function (event) {

//   /** get tilt element center position */
//   const centerX = this.offsetWidth / 2;
//   const centerY = this.offsetHeight / 2;

//   const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
//   const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

//   this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;

// }

// addEventOnElements(tiltElements, "mousemove", initTilt);

// addEventOnElements(tiltElements, "mouseout", function () {
//   this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
// });


// /* 获取header元素对象 */
// const header = document.querySelector('.header')

// //监听文档的滚动
// window.addEventListener('scroll',function(){
//     if(scrollY > 300 ){ 
//         header.classList.add('active')
//     }else{
//         header.classList.remove('active')
//     }
// })











/**
 *  导航栏固定效果
 */

const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
	header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});




/**
 * section3 tab栏选项卡切换
 */
const tablist = document.querySelector('.tab-btn-list')
const lis = tablist.querySelectorAll('li')
const shows = document.querySelectorAll('.show')
for (var i = 0; i < lis.length; i++) {
	
	
	
	lis[i].setAttribute('index',i)
	
	
	lis[i].onclick = function() {
		//干掉所有
		for (var i = 0; i < lis.length; i++) {
			lis[i].setAttribute('id','')
		}
		//留下自己
		this.setAttribute('id','current')
		
		const index = this.getAttribute('index')
		//干掉所有
		for(var i = 0; i<shows.length; i++){
			shows[i].style.display = 'none'
		}
		//留下自己
		shows[index].style.display = 'block'
	}

}


  //图片的动画效果 通过perspective 和rotate实现

        //获取要添加抖动动画的图片
        const img = document.querySelectorAll('img');

        //鼠标移入时抖动
        img.addEventListener("mousemove", function (event) {

            /** 获取倾斜元素的中心位置 */
            const centerX = this.offsetWidth / 2;
            const centerY = this.offsetHeight / 2;

            const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
            const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

            this.style.transform = ` rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;

        })

        //鼠标移出的时候复原
        img.addEventListener("mouseout", function () {
            this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });











//初始化百度地图
var map = new BMapGL.Map("baidumap"); // 创建地图实例 
var point = new BMapGL.Point(114.413815, 30.470714); // 创建点坐标 
map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放  
var marker = new BMapGL.Marker(point); // 创建标注   
map.addOverlay(marker); // 将标注添加到地图中