'use strict';

module exports = class Figuras {
  constructor(tipofigura, ladoA, ladoB, altura, base, pi, radio) {

    this.tipofigura = tipofigura
    this.ladoA= ladoA;
    this.ladoB = ladoB;
    this.altura = altura;
    this.base = base;
    this.pi = pi;
    this.radio = radio
 }

getarea() {
	let tipofigura === this.tipo.toLowerCase();
	let area = null;
	
//cuadrado
  if(tipofigura === "cuadrado") {
	area= this.ladoA ** 2;
	console.log("El área del cuadrado es:", area)
    }
   
 //triangulo
     if(tipofigura === "triangulo") {
	area= (this.base * this.altura) / 2;
	console.log("El área del triangulo es:", area)
    }   

//rectangulo
     if(tipofigura === "rectangulo") {
	area= this.ladoA * this.ladoB;
	console.log("El área del rectangulo es:", area)
    }  
	
//circulo
    if(tipofigura === "circulo") {
	area= this.pi * (this.radio ** 2);
	console.log("El área del circulo es:", area)
    }  
  }
}



