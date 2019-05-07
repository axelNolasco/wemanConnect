function buzzfizz() {
	for (let ini = 1, fin = 100, i = ini; i <= fin; i++)
		if (i%2==0) {
			console.log("Buzz", i);
		}
		else {console.log ("Fizz", i);
		}
}

buzzfizz()
