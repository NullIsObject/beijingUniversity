(function() {
	document.getElementById('searchKuang').getElementsByTagName('div')[1].onclick = function() { //搜索框弹出的提示框
		document.getElementById('searchKuangTiShiBuJu').style.display = "flex";
	}
	document.getElementById('nav3_right_nav_btn').onclick = function() { //手机版的导航栏
		document.getElementById('nav3_right_navBuJu').style.display = "block";
		document.getElementById('nav3_right_navBuJu').style.opacity = "0";
		setTimeout(function() {
			document.getElementById('nav3_right_navBuJu').style.opacity = "1";
		}, 100)
	}
	document.getElementsByClassName('search')[0].onclick =
		document.getElementsByClassName('search')[1].onclick =
		document.getElementById('nav3_right_search').onclick =
		document.getElementById('nav4_bottom').getElementsByTagName('p')[1].onclick =
		function() { //搜索框
			document.getElementById('searchKuangBuJu').style.display = "flex";
			document.getElementById('searchKuangBuJu').style.opacity = "0";
			document.getElementById('searchKuang').getElementsByTagName('input')[0].style.transform =
				"translateY(-50px)";
			document.getElementById('searchKuang').getElementsByTagName('div')[1].style.transform =
				"translateY(-50px)";
			setTimeout(function() {
				document.getElementById('searchKuangBuJu').style.opacity = "1";
				document.getElementById('searchKuang').getElementsByTagName('input')[0].style.transform =
					"translateY(0px)";
				document.getElementById('searchKuang').getElementsByTagName('div')[1].style.transform =
					"translateY(0px)";
			}, 100);
		}
}())
