module exports = class FigurasGeometricas {
	constructor(tipfig, cantlados, mlado1, mlado2, mlado3, mlado4, radio) {
	this.tipfig=tipo; //triangulo, cuadrado, rectangulo
	this.cantlados=lados;
	this.mlado1=lado1;
	this.mlado2=lado2;
	this.mlado3=lado3;
	this.mlado4=lado4;
	this.radio=radio;
	}




function perimetro () {
	if this.tipfig= "triangulo" {
		totperimetro= this.medidaslados 
		}
	if this.tipfig= "cuadrado" {
		totperimetro= (this.cantlados * this.mlado1);
		console.log(totperimetro);
		}
	if this.tipfig= "circulo" {
		perimetro= this.medidaslados 
		}
	}
}

"use strict";

module.exports = class Figura {
	constructor(tipoDeFigura, numeroDeLados, ladoUno, ladoDos, ladoTres, LadoCuatro, radio) {
	this.tipoDeFigura = tipoDeFigura;
	this.numeroDeLados = numeroDeLados;
	this.ladoUno = ladoUno;
	this.ladoDos = ladoDos;
	this.ladoTres = ladoTres;
	this.LadoCuatro = LadoCuatro;
	}
		getarea() {
			return this.ladoUno ** 2;
		}
		dituFigura() {
			console.log(this.tipoDeFigura);
		}
}




