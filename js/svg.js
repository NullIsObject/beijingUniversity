(function(){
	var item=document.getElementById('main5').getElementsByClassName('item');
	var svg=document.getElementById('main5').getElementsByTagName('svg');
	for(let i=0;i<item.length;i++){
		item[i].onmouseover=function(){
			var path=svg[i].getElementsByTagName('path');
			for(let j=0;j<path.length;j++){
				path[j].style.transition="0s";
				path[j].style.strokeDashoffset=parseInt(path[j].style.strokeDasharray);
				setTimeout(function(){
					path[j].style.transition="1s";
					path[j].style.strokeDashoffset='0';
				},100);
			}
		}
	}
}());
(function(){
	var item=document.getElementById('main8').getElementsByClassName('item');
	var svg=document.getElementById('main8').getElementsByTagName('svg');
	for(let i=0;i<item.length;i++){
		item[i].getElementsByTagName('div')[0].onmouseover=function(){
			var path=svg[i].getElementsByTagName('path');
			for(let j=0;j<path.length;j++){
				path[j].style.transition="0s";
				path[j].style.strokeDashoffset=parseInt(path[j].style.strokeDasharray);
				setTimeout(function(){
					path[j].style.transition="1s";
					path[j].style.strokeDashoffset='0';
				},100);
			}
		}
	}
}());