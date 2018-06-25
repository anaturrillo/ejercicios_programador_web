Modificación del algoritmo del ejercicio01

- solicitar nombre
- solicitar numero
- si el numero es mayor a 20 desearle un buen dia, si esta entre 5 y 20 desearle un pésimo día y si es menor que 5 decirle que vuelva mañana. (definir los rangos para que no se superpongan)

```javascript
	var name = prompt('Cómo te llamás?');
	var number = prompt('Ingresá un número');
	var message;

	if (number > 20) {
		message = name + ', buen día!'
	} else if(number < 5) {
		message = name + ', vuelva mañana por favor'
	} else {
	    message = name + ', le deseo que tenga un pésimo día...';
	}
	/* 
		No me hace falta definir el rango del medio:
		todos los numeros que no son menores que 5 ni mayores que 20 están entre 5 y 20.

		Para todos ellos la sentencia number >= 5 && number <= 20 evalúa a true.
	*/
	alert(message)

```

