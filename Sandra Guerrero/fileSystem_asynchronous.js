var fs = require('fs');
 
fs.readFile('readme.txt', 'utf8', function(err, contents) {
    console.log(contents);
});

console.log('Hola');

/* 
Cool!

Que pasa si ocurre un error en la lectura del archivo?

No te olvides de manejar tus errores.
*/