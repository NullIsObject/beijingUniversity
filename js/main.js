(function() {
	document.getElementById('headerBottom').onclick = function() {
		document.getElementsByTagName('main')[0].style.top = "0vh";
		document.getElementById('nav1').style.top = "-125px";
		document.getElementById('nav2').style.top = "0px";
		document.getElementById('nav1').style.opacity = "0";
		document.getElementById('nav2').style.opacity = "1";
	}
	document.getElementsByTagName('header')[0].onmousewheel = function() { //鼠标再header向下滚动时向下切页
		if (event.wheelDelta < 0 && document.body.clientWidth > 850) {
			document.getElementsByTagName('main')[0].style.top = "0vh";
			document.getElementById('nav1').style.top = "-125px";
			document.getElementById('nav1').style.opacity = "0";
			document.getElementById('nav2').className = "nav2a";
		}
	}
	document.getElementsByTagName('main')[0].onmousewheel = function() {
		event.wheelDelta < 0 ? document.getElementById('nav2').className = "nav2b" : document.getElementById(
			'nav2').className = "nav2a"; //鼠标在main滚动时nav2的变化
		if (event.wheelDelta > 0 && document.getElementsByTagName('main')[0].scrollTop ==
			0) { //鼠标在main向上滚动时向上切页
			this.style.top = "100vh";
			document.getElementById('nav1').style.top = "0px";
			document.getElementById('nav1').style.opacity = "1";
			document.getElementById('nav2').className = null;
		}
	}
	//上面是谷歌的，下面是火狐的
	document.getElementsByTagName('header')[0].addEventListener('DOMMouseScroll',
		function() { //鼠标再header向下滚动时向下切页
			if (event.detail > 0 && document.body.clientWidth > 850) {
				document.getElementsByTagName('main')[0].style.top = "0vh";
				document.getElementById('nav1').style.top = "-125px";
				document.getElementById('nav1').style.opacity = "0";
				document.getElementById('nav2').className = "nav2a";
			}
		})
	document.getElementsByTagName('main')[0].addEventListener('DOMMouseScroll', function() {
		event.detail > 0 ? document.getElementById('nav2').className = "nav2b" : document.getElementById(
			'nav2').className = "nav2a"; //鼠标在main滚动时nav2的变化
		if (event.detail < 0 && document.getElementsByTagName('main')[0].scrollTop ==
			0) { //鼠标在main向上滚动时向上切页
			this.style.top = "100vh";
			document.getElementById('nav1').style.top = "0px";
			document.getElementById('nav1').style.opacity = "1";
			document.getElementById('nav2').className = null;
		}
	})
}())
