function clock() {
    var num = 1;
    var segundos = setInterval(function() {
      console.log(num++);
      if (num == 61) {
        clearInterval(segundos);
      }
    }, 1000);
  }
  
  clock();
  
/* 

Buen trabajo.

Cuida tu indentacion: 

function clock() {
  var num = 1;
  var segundos = setInterval(function() {
    console.log(num++);
    if (num == 61) {
      clearInterval(segundos);
    }
  }, 1000);
}

clock();

function clock y su invocacion deberian estar en el mismo nivel de indentacion.

*/