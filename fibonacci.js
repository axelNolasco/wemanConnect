function fibonacci(n) {
	let a = 0;
	let b = 1;
	for(i = 0; i < n; i++) {
		let numTemporal = a;
		a = b;
		b = numTemporal + b;
		console.log(a + " ")
	}
}







 
 /* 
ESTABA VIENDO ALGUNAS DE LAS FORMAS QUE ESTÁN EN INTERNET COMO LA DE ABAJO
  function fibonacci(numero)
        {
            var var1 = 0;
            var var2 = 1;
            var var3;
 
            document.write(var1+"");
            document.write(var2+"");
 
            for(var i=3; i <= numero;i++)
            {
                var3 = var1 + var2;
                var1 = var2;
                var2 = var3;
                document.write(var3+"");
            }
        }
        */


