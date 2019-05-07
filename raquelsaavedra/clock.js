'use strict';

// Funcion que imprime segundos en pantalla 

function clock() {
  	var fecha = new Date();
	var segundos = fecha.getSeconds();
	console.log("Segundos=",segundos)
	if(segundos==59){

		clearInterval(inter);
	}
}
  
var inter = setInterval(clock, 1000);