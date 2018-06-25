### Loops!

Imprimir por consola:

- Los números del 1 al 250
```javascript
	for (var i = 1; i <= 250; i++) {
	    console.log(i)
	}
```

- Los números múltiplos de 3 mayores que 10 y menores que 1000.
```javascript
	for (var i = 1; i < 1000; i++) {
	    if (i%3 === 0) console.log(i)
	}
```
o

```javascript
	for (var i = 12; i < 1000; i = i+3) {
	    console.log(i)
	}
```

- Letra por letra la frase "anita lava la tina".
- La misma frase pero de atras hacia adelante.
```javascript
	var a = "Anita lava la tina";


	for (var i = 0; i < a.length; i++) {
	    console.log(a[i])
	}

	for (var i = a.length; i >= 0; i--) {
	    console.log(a[i])
	}
```

- Cómo validarías que una frase es un palíndromo?
