const Figuras = require('./figuras.js');

//constructor(tipofigura, ladoA, ladoB, altura, base, pi, radio)
const Cuadrado = new Figuras ("Cuadrado",2,null, null, null, null, null);
const Triangulo = new Figuras ("Triangulo",null, null, 5, 3, null, null);
const Rectangulo = new Figuras ("Rectangulo",4, 6, null, null, null, null);
const Circulo = new Figuras ("Circulo",null, null, null, null, 3.14, 6);

Cuadrado.getarea();
Triangulo.getarea();
Rectangulo.getarea();
Circulo.getarea();
	