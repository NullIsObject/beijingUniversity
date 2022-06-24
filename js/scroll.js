(function() {
	var main = document.getElementsByTagName('main')[0];
	var _main = main.childNodes;

	main.onscroll = onscroll =
		function() {
			if (document.documentElement.scrollTop > 0 || main.scrollTop > 0)
				document.getElementById('nav3').style.backgroundImage = "linear-gradient(#94070a,#94070a)";
			else
				document.getElementById('nav3').style.backgroundImage =
				"linear-gradient(rgba(00,00,00,0.7),rgba(00,00,00,0))";
			for (let i = 1; i < 8; i++) {
				if (main.scrollTop > _main[i + i - 1].offsetTop - _main[i + i - 1].offsetHeight / 2)
					_main[i + i - 1].className = null;
				else _main[i + i - 1].className = 'main' + i;
			}

		}
})();
