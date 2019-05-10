'use strict';

function fibonacci(n) {
  var a=0;
  var b=1;

  for(let i=0; i<n;i++){
    var c=a;
    a=b;
    b=c+b;
    console.log(a+" ");
  }

}

fibonacci(10);

/*
good code, good indentations.
pay attention to blank spaces.
please, provide us with a description about
how do the variables you use work.
*/