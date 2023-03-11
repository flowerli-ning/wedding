function requestFullScreen(element) {
  var requestMethod = element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullScreen;
    console.log(requestMethod)
  if (requestMethod) {
    requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") {
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
};
var mySwiper = null
function fullScreen(){
  requestFullScreen(document.documentElement)
  $('.swiper-container').css("display","block")
  mySwiper=new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    speed:1000,
    autoplay:4000
  })   
}
window.onload=function(){
  let str=''
  for(let i=1;i<7;i++){
    str+=`<div class="swiper-slide f_r_c">
      <img src="img/horizontal/${i}.jpg" />
    </div>`
  }
  for(let i=1;i<14;i++){
    str+=`<div class="swiper-slide f_r_c">
      <img src="img/vertical/${i}.jpg" />
    </div>`
  }
  $('.swiper-wrapper').html(str)
}
//监听window是否全屏，并进行相应的操作,支持esc键退出
window.onresize = function() {
  //判断是否是全屏
  var isFull=!!(document.webkitIsFullScreen || document.mozFullScreen || 
      document.msFullscreenElement || document.fullscreenElement
  );//!document.webkitIsFullScreen都为true。因此用!!
  if (isFull==false) {
      $("#heheda").css("display","");
      $('.swiper-container').css("display","none")
      mySwiper&&mySwiper.stopAutoplay()
  }else{
      $("#heheda").css("display","none");
  }
}