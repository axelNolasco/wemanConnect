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

/*
* avoid use numbers as name of files
* cammel case to declare variables: var segundos
* separate with spaces: var segundos = setInterval(clock, 100);
* use spaces and semicolon var i = 0; 
* use spaces function clock() {
* use spaces if (i < 61) {
* check indentation on else (line 13)
*/