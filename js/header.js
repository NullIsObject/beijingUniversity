(function() {
	var header = document.getElementsByTagName('header')[0];
	var _header = document.getElementById('header');
	var item = header.getElementsByClassName('item');
	var ul = document.getElementById('headerBtn');
	var li = ul.getElementsByTagName('li');
	for (let i = 0; i < item.length; i++) item[i].style.backgroundImage = 'url(pic/header/' + i + '.jpg)';
	var _headerLeft = 0;
	_header.style.marginLeft = _headerLeft * 100 + 'vw';
	li[-_headerLeft].className = "li";

	function timerLeft() {
		if (_headerLeft > -item.length + 1) _headerLeft--;
		else _headerLeft = 0;
		_header.style.marginLeft = _headerLeft * 100 + 'vw';
		for (let i = 0; i < item.length; i++) li[i].className = null;
		li[-_headerLeft].className = "li";
	}

	function timerRight() {
		if (_headerLeft < 0) _headerLeft++;
		else _headerLeft = -item.length + 1;
		_header.style.marginLeft = _headerLeft * 100 + 'vw';
		for (let i = 0; i < item.length; i++) li[i].className = null;
		li[-_headerLeft].className = "li";
	}
	var timer = setInterval(timerLeft, 6500);
	for (let i = 0; i < item.length; i++)
		item[i].getElementsByTagName('a')[0].onclick = timerLeft;
	(function() { //鼠标拖动切页
		var X = 0;
		var marginLeft;
		var TF = false;
		header.onmousedown = function() {
			if (!TF) {
				clearInterval(timer);
				X = event.clientX;
				_header.style.transition = '0s';
				TF = true;
			}
		}
		header.onmousemove = function() {
			if (TF)
				_header.style.marginLeft = 'calc(' + _headerLeft * 100 + 'vw' + ' + ' + (event.clientX -
					X) + 'px)';
		}
		header.onmouseup = header.onmouseout = function() {
			if (TF) {
				TF = false;
				timer = setInterval(timerLeft, 6500);
				_header.style.transition = '0.8s';
				if (event.clientX > X + header.offsetWidth / 4) timerRight();
				else if (event.clientX < X - header.offsetWidth / 4) timerLeft();
				else _header.style.marginLeft = _headerLeft * 100 + 'vw';
			}
		}
	})();
	//↓点击数字切页
	for (let i = 0; i < li.length; i++) {
		li[i].onclick = function() {
			_headerLeft = -i;
			_header.style.marginLeft = _headerLeft * 100 + 'vw';
			for (let i = 0; i < item.length; i++) li[i].className = null;
			li[-_headerLeft].className = "li";
		}
	}
})()
