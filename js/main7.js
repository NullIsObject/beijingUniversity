(function() {
	var main7_1 = document.getElementById('main7_1');
	var img = main7_1.getElementsByTagName('div')[0].getElementsByTagName('img');
	var imgSrc; //做为img的src的临时存储变量
	img[0].style.marginLeft = "-40%"; //赋初值
	var TF = false; //开关变量
	var X, imgLeft;

	function timerLeft() {
		img[0].style.transition = "0.8s";
		img[0].style.marginLeft = "-60%";
		setTimeout(function() {
			img[0].style.transition = "0s";
			imgSrc = img[0].src;
			for (let i = 0; i < 4; i++) {
				img[i].src = img[i + 1].src;
			}
			img[4].src = imgSrc;
			img[0].style.marginLeft = "-40%";
			main7_1.onmousedown = onDown;
		}, 800);
	}

	function timerRight() {
		img[0].style.transition = "0.8s";
		img[0].style.marginLeft = "-20%";
		setTimeout(function() {
			img[0].style.transition = "0s";
			imgSrc = img[4].src;
			for (let i = 4; i > 0; i--) {
				img[i].src = img[i - 1].src;
			}
			img[0].src = imgSrc;
			img[0].style.marginLeft = "-40%";
			main7_1.onmousedown = onDown;
		}, 800);
	}
	var timer = setInterval(timerLeft, 6500);
	main7_1.onmouseover = function() {
		clearInterval(timer);
	}
	main7_1.onmouseout = function() {
		timer = setInterval(timerLeft, 6500);
		main7_1.onmouseup();
	}

	function onDown() {
		TF = true;
		img[0].style.transition = "0s";
		X = event.offsetX;
		imgLeft = img[0].style.marginLeft;
	}
	main7_1.onmousedown = onDown;
	main7_1.onmousemove = function() {
		if (TF) {
			img[0].style.marginLeft = 'calc(' + parseInt(imgLeft) + '% + ' + (event.offsetX - X) + 'px)';
		}
	}
	main7_1.onmouseup = function() {
		if (TF) {
			if (event.offsetX > X) {
				timerRight();
				main7_1.onmousedown = null;
			} else if (X > event.offsetX) {
				timerLeft();
				main7_1.onmousedown = null;
			} else img[0].style.marginLeft = "-40%";
			TF = false;
		}
	}
}())
