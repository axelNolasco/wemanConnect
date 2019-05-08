var fs = require('fs');
 
var contents = fs.readFileSync('readme.txt', 'utf8');
console.log(contents);
console.log('Hola')