
"use scrictic";

var intervSeg = setInterval(Segundero, 1000);
var i = 0;

function Segundero() {
	if (i <= 60) {
		console.log("Segundo", i);
		i++
	}
	else {clearInterval(intervSeg)
	}
}









