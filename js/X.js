(function(){
	function X0(){//定义关闭按钮
		this.parentNode.style.display="none";
	}
	document.getElementById('nav3_right_footer3').onclick=X0;
	function X1(){//定义关闭按钮
		this.parentNode.parentNode.style.display="none";
	}
	document.getElementById('searchKuang_X').onclick=X1;
	document.getElementById('searchKuangTiShi_X').onclick=X1;
	document.getElementById('searchKuangTiShi').getElementsByTagName('div')[1].onclick=X1;
	function X2(){//定义关闭按钮
		this.parentNode.parentNode.parentNode.style.display="none";
	}
	document.getElementById('nav3_right_nav_right_X').onclick=X2;
}())
