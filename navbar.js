// -- navbar --

function chdisplay(x) {
	let elements=['homepage','projects'];
	for(const e of elements) {
		document.getElementById(e).style.display='none';
	}
	document.getElementById(elements[x]).style.display = 'block';
}

var bar='';
bar+='<ul class="navbar">';
bar+='<a href="#homepage"><li class="navitem">Home</li></a>';
bar+='<a href="#projects"><li class="navitem">Projects</li></a>';
bar+='</ul>';

function onload() {
	let oldelem = document.querySelector("script#replace_with_navbar");
	let newelem = document.createElement("div");
	newelem.innerHTML = bar;
	oldelem.parentNode.replaceChild(newelem,oldelem);

	// -- css random color --

	var primaryColors   = ['#00eeff','#00ffaa','#ff5e97'];
	var secondaryColors = ['#bbeeff','#ccffd9','#ffbde8'];

	var i = Math.floor(Math.random()*primaryColors.length);

	var r=document.querySelector(':root');
	r.style.setProperty('--primary',primaryColors[i]);
	r.style.setProperty('--secondary',secondaryColors[i]);

	//chdisplay(0);
}
