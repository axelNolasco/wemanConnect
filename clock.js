'use strict';
var i=1
var cuenta=setInterval(clock,1000);

function clock(){
  if (i<61){
    console.log(i);
    i++;
  }
  else {
    clearInterval(cuenta);
    }
}

/*
Buen trabajo!

Cuida tu indentacion, semicolons y blank spaces
*/