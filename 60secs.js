'use strict';

var Segundos=setInterval(clock,10);
var i=0

function clock(){
  if (i<61){
    console.log(i);
    i++;
  }
  clearInterval(Segundos);
}
