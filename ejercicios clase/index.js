'use strict';

const Figuras = require('./figuras.js');

let circulo = new Figuras("circulo", 5);
let cuadrado = new Figuras("cuadrado",null,5);
let triangulo = new Figuras("triangulo",null,5,null,6);
let rectangulo = new Figuras("rectangulo",null,7,8);
circulo.obtenerArea();
cuadrado.obtenerArea();
triangulo.obtenerArea();
rectangulo.obtenerArea();

/* 
Good code
Pay attention to blank spaces
*/