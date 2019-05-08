"use strict";

const Figura = require("./figura.js");

const cuadrado = new Figura("cuadrado", 3);
cuadrado.getarea()

const triangulo = new Figura("triangulo", null, 3, 5);
triangulo.getarea()

const rectangulo = new Figura("rectangulo", null, 4, 6);
rectangulo.getarea()