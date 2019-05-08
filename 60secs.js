'use strict';

var Segundos=setInterval(clock,1000);
var i=0

function clock(){
  if (i<61){
    console.log(i);
    i++;
  }
  else {
    clearInterval(Segundos);
    }
}
