var fs = require('fs');
 
fs.readFile('readme.txt', 'utf8', function(err, contents) {
    console.log(contents);
});

console.log('Hola');