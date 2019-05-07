'use strict';

function conteo(){
	for(let i=1, max=100; i<=max; i++){
		if ((i%2)==0){
      console.log( i + " buzz");
    }
    else {
      console.log( i + " fizz");
    }
	}
}
conteo();
