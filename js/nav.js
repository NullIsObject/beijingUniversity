(function() {
	(function() { //插入导航栏的图片
		var nav_2buju2 = document.getElementsByClassName('nav_2buju2');
		for (let i = 0; i < nav_2buju2.length; i++) {
			nav_2buju2[i].getElementsByClassName('nav_2buju2_pic')[0].style.backgroundImage =
				'url(pic/nav/nav' + i + '.jpg)';
		}
		var _nav_2buju2 = document.getElementById('nav2').getElementsByClassName('nav_2buju2');
		for (let i = 0; i < _nav_2buju2.length; i++) {
			_nav_2buju2[i].getElementsByClassName('nav_2buju2_pic')[0].style.backgroundImage =
				'url(pic/nav/nav' + i + '.jpg)';
		}
	})();
	(function() { //导航栏鼠标滑过显示
		var p = document.getElementsByClassName('nav_2_center')[0].getElementsByTagName('p');
		var a = document.getElementsByClassName('nav_2_center')[0].getElementsByTagName('a');
		var nav_2buju2 = document.getElementsByClassName('nav_2buju2');
		for (let i = 0; i < p.length; i++) {
			p[i].onmouseover = nav_2buju2[i].onmouseover = function() {
				nav_2buju2[i].style.display = "block";
				p[i].style.backgroundSize = "100% 1.5px";
				a[i].style.backgroundSize = "1.5px 100%";

			}
			p[i].onmouseout = nav_2buju2[i].onmouseout = function() {
				nav_2buju2[i].style.display = "none";
				p[i].style.backgroundSize = "0% 1.5px";
				a[i].style.backgroundSize = "1.5px 0%";
			}
		}
		var _p = document.getElementsByClassName('nav_2_center')[1].getElementsByTagName('p');
		var _a = document.getElementsByClassName('nav_2_center')[1].getElementsByTagName('a');
		var _nav_2buju2 = document.getElementById('nav2').getElementsByClassName('nav_2buju2');
		for (let i = 0; i < _p.length; i++) {
			_p[i].onmouseover = _nav_2buju2[i].onmouseover = function() {
				_nav_2buju2[i].style.display = "block";
				_p[i].style.backgroundSize = "100% 1.5px";
				_a[i].style.backgroundSize = "1.5px 100%";

			}
			_p[i].onmouseout = _nav_2buju2[i].onmouseout = function() {
				_nav_2buju2[i].style.display = "none";
				_p[i].style.backgroundSize = "0% 1.5px";
				_a[i].style.backgroundSize = "1.5px 0%";
			}
		}
	})();
}())
