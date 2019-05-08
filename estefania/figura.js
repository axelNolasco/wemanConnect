"use strict";

module.exports = class Figura {
	constructor(tipoDeFigura, ladoUno, base, altura) {
		this.tipoDeFigura = tipoDeFigura;
		this.ladoUno = ladoUno;
		this.base = base;
		this.altura = altura;
	}

	getarea() {
		let tipoDeFigura = this.tipo.toLowerCase();
		let area = null;

		switch (tipoDeFigura) {
			case "cuadrado":
				area = this.ladoUno * this.ladoUno;
				console.log("El área del cuadrado es: ", area);
				break;
			case "triangulo":
				area = this.base * this.altura / 2;
				console.log("El área del triángulo es: ", area);
				break;
			case "rectangulo":
				area = this.base * this.altura;
				console.log("El área del rectángulo es: ", area)
				break;
			default:
				console.log("Figura no soportada");
				break;
		}
	}
}