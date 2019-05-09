'use strict';
function fibonacci(n){
	let a=0;
	let b=1;
	
	
for(let i=0; i<n; i++){
	let c=a;

	a=b;
	b=c+b;
	console.log("numero", a);


}
}
 
 fibonacci(6);
