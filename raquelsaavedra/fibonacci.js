'use strict';

//Funcion que regresa los primeros 5 numeros fibonacci

function fibonacci() {
  	var a = 0 
  	var b = 1;
	for( i = 0 ; i < 5 ; i++ ){
		//la formula para fibonacci xn = xn-1 + xn-2
		var num = a;
   		a=b;
    	b=num+b
		console.log("Fibonacci = ", a);
    }  
}