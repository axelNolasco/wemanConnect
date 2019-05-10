module.exports = class Figuras{
  constructor (tipoFigura, radio, lado1, lado2, altura){
    this.tipoFigura=tipoFigura;
    this.radio=radio;
    this.lado1=lado1;
    this.lado2=lado2;
    this.altura=altura;
  }


obtenerArea (){
    switch (this.tipoFigura.toLowerCase()) {
      case "circulo":
          console.log("el area del círculo es "+ (3.14159*(this.radio*this.radio)));
        break;
      case "rectangulo":
          console.log("el area del rectangulo es "+(this.lado1*this.lado2));
        break;
      case "cuadrado":
            console.log("el area del cuadrado es "+(this.lado1*this.lado1));
        break;
          case "triangulo":
              console.log("el area del triangulo es "+((this.lado1*this.altura)/2));
          break;
      default:
        console.log("Figura no soportada");
        break;
    }
  }
}

/* 
Good code.
Pay attention to indentation and blank spaces
You are able to use Math.PI to get PI value
*/