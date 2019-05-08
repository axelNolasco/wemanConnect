'use strict';

var segundos=setInterval(clock,10);
var i=0

function clock(){
  if (i<=60){
    console.log(i);
    i++;
  }
  clearInterval(segundos);
}