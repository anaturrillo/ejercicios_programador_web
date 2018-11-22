### If... else...

1) Escribir un programa para calcular el perímetro de un triángulo que:
- obtenga los lados por medio de prompts.
- valide que los valores ingresados sean todos números. 
- calcule el perímetro.


2) Escribir un programa que realice las siguientes tareas:
- solicitar nombre
- solicitar numero
- si el numero es mayor a 20 desearle un buen dia, si esta entre 5 y 20 desearle un pésimo día y si es menor que 5 decirle que vuelva mañana. (definir los rangos para que no se superpongan)

3) Crear un programa que muestre un mensaje personalizado
- Pedir al usuario mediante prompt que ingrese su género y luego su edad. 
- Luego mostrar un mensaje en consola que diga Sr., Sra. o Sx. según corresponda 
- y que también evalue si es mayor de edad o no.

4) Pedir al usuario mediante prompt que ingrese un día de la semana y mostrar en consola un mensaje si el día es fin de semana, hábil o no es un día valido.


----
### Soluciones
1)
```javascript
    //Pido los 3 lados
    var lado1 = prompt('Ingrese el lado 1');
    var lado2 = prompt('Ingrese el lado 2');
    var lado3 = prompt('Ingrese el lado 3');
    
    // parseo los 3 números que recibí
    var lado1Num = parseInt(lado1);
    var lado2Num = parseInt(lado2);
    var lado3Num = parseInt(lado3);
    
    // valido que ningún parser me haya devuelno NaN, NaN -> falsy value
    if (!lado1Num || !lado2Num || !lado3Num) {
        alert('Valores de lados inválidos')
    } else {
        // Si los valores son números, calculo el perímetro
        var perimetro = lado1Num + lado2Num + lado3Num;
        alert('El perimetro es' + perimetro) 
    }
```

2) 
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

3) 
```javascript
// Pido el nombre y la edad
var gender = prompt('Ingrese su género, male, female u other')
var age = prompt('Ingrese su edad');

// Creo una variable en la cual voy a ir acumulando las partes de mi mensaje
var message = 'Hola, ';

// Agrego la parte del mensaje relacionada con el género
switch (gender) {
  case 'male':
    message = message + 'Sr. ';
    break;
  case 'female':
    message = message + 'Sra. ';
    break;
  case 'other':
    message = message + 'Sx. ';
    break;
  default:
    message = message + 'Género inválido ';
    break
}

// Agrego la parte del mensaje relacionada con la edad
if (age < 18) {
  message = message + 'usted es menor de edad no puede ingresar'
} else if (age >= 18) {
  message = message + 'usted es mayor de edad puede ingresar'
}

// Muestro el mensaje final que esta acumulado en la variable
console.log(message)

```

4) 
```javascript
	var dayOfTheWeek = prompt('Ingrese día de la semana', 'Lunes');
    
    // Creo una variable para guardar el mensaje según el caso elegido por el usuario
    var message;
    
    // Comparo el día ingresado por el usuario con todos los casos posibles
    switch (dayOfTheWeek) {
      case 'Lunes':
      case 'Martes':
      case 'Miércoles':
      case 'Jueves':
      case 'Viernes':
        message = 'Es un día habíl';
        break;
      case 'Sábado':
      case 'Domingo':
        message = 'Es día de fin de semana';
        break;
      default:
        message = 'Ingresaste cualquier cosa!';
        break
    }
    
    // Muestro en consola el mensaje según el caso en el coincidió
    console.log(message);

```