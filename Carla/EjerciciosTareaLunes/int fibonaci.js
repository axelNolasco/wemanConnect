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

// Es por que tiene errores. Intenta leer el error que la consola imprime y trata de resolverlo desde ahi.
// Recuerda que cosas como document.writeln no van a poder verlos en la consola de node, por que
// eso pertenece al DOM y eso esta disponible solo en el navegador.

// ajuste unos detalles y funciona bien, buen trabajo.
// intenta arreglarlo, si no puedes, avisame y te ayudo un poco. 
