(function main5_2(){
	var main5_4=document.getElementById('main5_4');
	var img=main5_4.getElementsByTagName('img');
	var i=-1;
	img[0].style.marginLeft=i*25+'%';
	function fun1(){
		for(let j=0;j<4;j++) img[j].style.transition="0s";
		if(i==-3) i=-1;
		if(i==0) i=-2;
		img[0].style.marginLeft=i*25+'%';
	}
	function funleft(){//画面向左移动
		for(let j=0;j<4;j++) img[j].style.transition="0.8s";
		i--;
		img[0].style.marginLeft=i*25+'%';
		setTimeout(function(){
			fun1();
		},800);
	}
	function funRight(){//画面向右移动
		for(let j=0;j<4;j++) img[j].style.transition="0.8s";
		i++;
		img[0].style.marginLeft=i*25+'%';
		setTimeout(function(){
			fun1();
		},800);
	}
	var lunBo=setInterval(funleft,6500);//自动轮播6500
	var TF=false;
	var imgLeft=0,SX=0;
	main5_4.onmouseover=function(){clearInterval(lunBo)}//鼠标滑过清除定时器
	main5_4.onmouseout=function(){
		lunBo=setInterval(funleft,6500);
		fun3();
	}//鼠标离开恢复定时器
	function fun2(){//鼠标按下事件
		main5_4.onmousedown=null;
		TF=true;
		SX=event.offsetX;
		var main5_4Width=main5_4.getElementsByTagName('div')[0].offsetWidth;
		imgLeft=parseInt(main5_4Width)*parseInt(img[0].style.marginLeft)/100;
		for(let j=0;j<img.length;j++) img[j].style.transition='0s';
	}
	main5_4.onmousedown=fun2;
	main5_4.onmousemove=function(){
		if(TF){
			img[0].style.marginLeft=imgLeft+event.offsetX-SX+'px';
		}
	}
	function fun3(){//鼠标抬起事件
		if(TF){
			if(event.offsetX<SX-50){
				funleft();
				setTimeout(function(){
					main5_4.onmousedown=fun2;
					main5_4.onmouseup=fun3;
				},800);
			}
			else if(event.offsetX>SX+50){
				funRight();
				setTimeout(function(){
					main5_4.onmousedown=fun2;
					main5_4.onmouseup=fun3;
				},800);
			}
			else{
				img[0].style.marginLeft=i*25+'%';
				main5_4.onmousedown=fun2;
				main5_4.onmouseup=fun3;
			}
			TF=false;
			main5_4.onmouseup=null;
		}
	}
	main5_4.onmouseup=fun3;
}())