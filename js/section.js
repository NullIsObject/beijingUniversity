(function() {
	var btn = document.getElementById('sectionBtn');
	btn.className = "sectionBtn2";
	var section = document.getElementsByTagName('section')[0];
	var indexBtn = section.getElementsByClassName('indexBtn')[0];
	var navBtn = section.getElementsByClassName("navBtn")[0];
	var _section = document.getElementById('section');
	var rightBtn = section.getElementsByClassName('rightBtn')[0];
	var bottomBtn = section.getElementsByClassName('bottomBtn')[0].getElementsByTagName('li');

	function fun1() { //每次改变_section的margin-left就执行一次
		_section.style.marginLeft == "-300vw" ? rightBtn.style.display = "none" : rightBtn.style.display = "block";
		if (_section.style.marginLeft == "-200vw") {
			for (let i = 0; i < bottomBtn.length; i++) bottomBtn[i].className = "bottomBtnLi"
			section.getElementsByClassName('indexBtn')[0].className = "indexBtn indexBtn1";
		} else {
			for (let i = 0; i < bottomBtn.length; i++) bottomBtn[i].className = null;
			section.getElementsByClassName('indexBtn')[0].className = "indexBtn";
		}
		for (let i = 0; i < 4; i++)
			bottomBtn[i].getElementsByTagName('p')[0].className = "bottomBtnP1";
		bottomBtn[parseInt(_section.style.marginLeft) / -100].getElementsByTagName('p')[0].className =
			"bottomBtnP2";
		for (let i = 1; i < 5; i++)
			document.getElementById('section' + i).className = null;
		document.getElementById('section' + (parseInt(_section.style.marginLeft) / -100 + 1)).className =
			"sectionScrollTitle sectionScroll" + (parseInt(_section.style.marginLeft) / -100 + 1);
		if(document.documentElement.offsetWidth<850){
			for(let i=1;i<5;i++){
				document.getElementById('section'+i).className="sectionScrollTitle sectionScroll"+i;
			}
		}
	}
	btn.onclick = function() { //弹出section
		btn.className = "sectionBtn";
		section.className = "section2";
		_section.style.marginLeft = "0vw";
		document.body.className = "body";
		fun1();
	}
	indexBtn.onclick = function() { //关闭section
		btn.className = "sectionBtn2";
		section.className = "section1";
		document.body.className = null;
	}

	function navBlock() { //打开nav4
		document.getElementById("nav4").className = "nav4_2";
		navBtn.onclick = navNone;
		navBtn.className = "navBtn navBtn2";
	}

	function navNone() { //关闭nav4
		document.getElementById("nav4").className = "nav4_1";
		navBtn.onclick = navBlock;
		navBtn.className = "navBtn navBtn1";
	}
	navBtn.onclick = navBlock;

	rightBtn.onclick = function() { //翻下一页
		_section.style.marginLeft = parseInt(_section.style.marginLeft) - 100 + 'vw';
		fun1();
	}

	for (let i = 0; i < bottomBtn.length; i++) {
		bottomBtn[i].onclick = function() {
			_section.style.marginLeft = -i + '00vw';
			fun1();
		}
		document.getElementById('section' + (i + 1)).onmousewheel = function() {
			event.wheelDelta < 0 ?
				_section.style.marginLeft = -i - 1 + '00vw' :
				_section.style.marginLeft = -i + 1 + '00vw';
			_section.style.marginLeft == "100vw" ?
				_section.style.marginLeft = "0vw" :
				_section.style.marginLeft == "-400vw" ?
				_section.style.marginLeft = "-300vw" : null;
			fun1();
		}
		document.getElementById('section' + (i + 1)).addEventListener('DOMMouseScroll', function() {
			event.detail > 0 ?
				_section.style.marginLeft = -i - 1 + '00vw' :
				_section.style.marginLeft = -i + 1 + '00vw';
			_section.style.marginLeft == "100vw" ?
				_section.style.marginLeft = "0vw" :
				_section.style.marginLeft == "-400vw" ?
				_section.style.marginLeft = "-300vw" : null;
			fun1();
		});
	}
})()
