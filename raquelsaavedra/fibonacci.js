'use strict';

//Funcion que regresa los primeros 5 numeros fibonacci

function fibonacci() {
  	var num1 = 0 
  	var num2 = 1;
	for( i = 0 ; i < 5 ; i++ ){
		//la formula para fibonacci xn = xn-1 + xn-2
		var num3 = num1;
   		num1=num2;
    	num2=num3+num2
		console.log("Fibonacci = ", num1);
    }  
}