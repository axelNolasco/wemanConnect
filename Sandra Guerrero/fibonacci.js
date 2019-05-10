function fibonacci() {
    var resultado = 0;
    var num = 1;
    for (let i = 1; i <= 3; i++) {
      num = num + resultado;
      resultado = num + resultado;
      console.log(num + "\n" + resultado);
    }
  }
  fibonacci();
  //1, 1, 2, 3, 5, 8, 13, 21, 34, 55


/*
Buen trabajo. 
Tu codigo es limpio, legible y sigues buenas practicas.
Eso te ahorrara muchos problemas cuando empieces a desarrollar

Cuida tu indentacion; la declaracion de la funcion y su invocacion deberian estar al mismo nivel

Ahora intenta imprimir un numero por cada iteracion hasta la 10
*/
