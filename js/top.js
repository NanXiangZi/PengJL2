function wechatshow(){
	document.getElementById("wechat").style.display="none"
}
function wechathide(){
	document.getElementById("wechat").style.display="block";
	
}
function change(bgch){
	bgch.style.background="rgba(0,0,0,0.2)" ; 
}
function  primary(bgch){
	bgch.style.background="" ; 
}
function  topfont(topfontcolor){
	topfontcolor.style.color="yellow"
}
function  topfontpri(topfontcolor){
	topfontcolor.style.color="white"
}
function  zxhdchange1(zxhd){
	zxhd.style.background="url('image/news-hover.jpg')";
	document.getElementById("zxhdchange1").style.display="block"
	document.getElementById("zxhdchange2").style.display="none"
	document.getElementById("zxhdchange3").style.display="none"
	document.getElementById("zxhdchange4").style.display="none"
}
function  zxhdchange2(zxhd){
	zxhd.style.background="url('image/news-hover.jpg')";
	document.getElementById("zxhdchange1").style.display="none"
	document.getElementById("zxhdchange2").style.display="block"
	document.getElementById("zxhdchange3").style.display="none"
	document.getElementById("zxhdchange4").style.display="none"
}
function  zxhdchange3(zxhd){
	zxhd.style.background="url('image/news-hover.jpg')";
	document.getElementById("zxhdchange1").style.display="none"
	document.getElementById("zxhdchange2").style.display="none"
	document.getElementById("zxhdchange3").style.display="block"
	document.getElementById("zxhdchange4").style.display="none"
}
function  zxhdchange4(zxhd){
	zxhd.style.background="url('image/news-hover.jpg')";
	document.getElementById("zxhdchange1").style.display="v"
	document.getElementById("zxhdchange2").style.display="none"
	document.getElementById("zxhdchange3").style.display="none"
	document.getElementById("zxhdchange4").style.display="block"
}
function  zxhdpri(zxhd){
	zxhd.style.background="url('')";
}
function  rmhdchange(rmhdfont){
	rmhdfont.style.color="#b52200"

	}
function  rmhdpri(rmhdfont){
	rmhdfont.style.color="#ce8a54"
}
var suspend=0;
window.onload=function (){
	document.getElementById("zxhdchange1").style.display="block"
	document.getElementById("zxhdchange2").style.display="none"
	document.getElementById("zxhdchange3").style.display="none"
	document.getElementById("zxhdchange4").style.display="none"
    var oDiv=document.getElementById("div1");
    var oUl=oDiv.getElementsByTagName("ul")[0];
    oUl.innerHTML=oUl.innerHTML+oUl.innerHTML
    function movement(){
	var timer=setInterval(function (){
    if(oUl.offsetLeft==-oUl.offsetWidth/2){
	oUl.style.left="0";
	};
    oUl.style.left=oUl.offsetLeft-10+"px";
    suspend=suspend+10;
	if(suspend==430){
	clearInterval(timer);
	
	suspend=0;
	setTimeout(movement,1000);
	};
},30);};
    movement();
};
function  gamelistchange(glch){
	glch.style.color="#d65600" ; 
}
function  gamelistpri(glpr){
	glpr.style.color="#563615" ; 
}