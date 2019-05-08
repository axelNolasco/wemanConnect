//función de fiboncci

'use strict';
console.log("ejercicio 1 Número de fibonacci");

function fibonacci(n){
var a=0;
var b=1;
 
for(i=0; i<n;i++){
	console.log("número fibonacci:", i)
	var numeroTemporal=a;
	a=b;
	b=numeroTemporal+b;
 
	document.writeln(a+" ");
	}
}

fibonacci(10)

//no puedo hacer que se ejecute en node pero si en consola chrome