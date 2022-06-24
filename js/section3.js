(function() {
	var section = document.getElementById('section3');
	var _section = section.getElementsByClassName('section')[0];
	var sectionUl = _section.getElementsByTagName('ul')[0];
	var sectionUlLi = sectionUl.getElementsByTagName('li');
	var sectionImg = _section.getElementsByClassName('img')[0];
	var sectionBtn = _section.getElementsByClassName('btn')[0];
	var img = _section.getElementsByTagName('img');
	var TF = false;
	for (let i = 0; i < sectionUlLi.length; i++) {
		sectionUlLi[i].onclick = function() {
			for (let j = 0; j < sectionUlLi.length; j++) {
				sectionUlLi[j].className = null;
			}
			this.className = "textLi";
			sectionUlLi[0].style.marginLeft = -51 * i + 'px';
			img[0].src = 'pic/section/pic/section3/0' + (i + 1) + '.jpg';
			img[1].src = 'pic/section/pic/section3/1' + (i + 1) + '.jpg';
		}
	}
	sectionImg.onmousedown = function() {
		TF = true;
		this.className = "img img1"; //优化
	}
	section.onmousemove = function() {
		if (TF) {
			var _left = event.clientX - section.getElementsByClassName('title')[0].offsetWidth;
			if (_left > 0 && _left < sectionUl.offsetWidth) {
				sectionImg.style.left = 'calc(' + _left / sectionUl.offsetWidth * 100 + '% - 20px)';
				sectionUlLi[Math.floor(_left / (sectionUl.offsetWidth / sectionUlLi.length))].onclick();
			}
		}
	}
	section.onmouseup = section.onmouseout = function() {
		TF = false;
		sectionImg.className = "img";
	}
	sectionBtn.onclick = function() {
		var _left = event.clientX - section.getElementsByClassName('title')[0].offsetWidth;
		if (_left > 0 && _left < sectionUl.offsetWidth) {
			sectionImg.style.left = 'calc(' + _left / sectionUl.offsetWidth * 100 + '% - 20px)';
			sectionUlLi[Math.floor(_left / (sectionUl.offsetWidth / sectionUlLi.length))].onclick();
		}
	}
}())
