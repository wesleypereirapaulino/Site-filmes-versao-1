var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 5000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i in objs) {
		objs[i].style.width = slidewidth;
	}
}

function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";	
}

function abrisubmenu(exibir_menu_mobile){
	var ul = document.getElementById("exibir_menu_mobile");
	if (document.getElementById(exibir_menu_mobile).style.display == "block") {
		document.getElementById(exibir_menu_mobile).style.display ="none"			
	}
	else{
		document.getElementById(exibir_menu_mobile).style.display ="block"
						
	}
}
