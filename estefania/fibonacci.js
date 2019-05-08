    
'use strict';

function fibonacci(n) {
  var uno=0;
  var dos=1;

  for(let i=0; i<n;i++){
    var tres = uno;
    uno = dos;
    dos = tres+dos;
    console.log(uno + " ");
  }

}

fibonacci(5);