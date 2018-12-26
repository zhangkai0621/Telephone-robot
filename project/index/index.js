
var head_menu=document.getElementsByClassName("head_menu");
//移动端打开菜单栏
menu_open.onclick=function(){
	head_menu[0].style.top="3.3rem";
	menu_open.style.display="none";
	menu_close.style.display="inline-block";
	var w=banner1.offsetWidth;
	if(w>767){
		menu_open.style.display="none";
		menu_close.style.display="none";
	}
}
//移动端关闭菜单栏
menu_close.onclick=function(){
	head_menu[0].style.top="-16rem";
	menu_close.style.display="none";
	menu_open.style.display="inline-block";
	var w=banner1.offsetWidth;
	if(w>767){
		menu_open.style.display="none";
		menu_close.style.display="none";
	}
}


//轮播图
function banner(){
	var w=banner1.offsetWidth;//获取屏幕宽度
	var timer=setTimeout(function(){
		banner1.style.marginLeft=(-w)+"px";//显示第二张
		banner_change1();
	},3000)
}
function banner_change1(){
	var w=banner1.offsetWidth;
	var timer=setTimeout(function(){
		banner1.style.marginLeft=(-2*w)+"px";//显示第三张
		banner_change2();
	},3000)
}
function banner_change2(){
	var w=banner1.offsetWidth;
	var timer=setTimeout(function(){
		banner1.style.marginLeft="0px";//显示第一张
		banner();
	},3000);
}




