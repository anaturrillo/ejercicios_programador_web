# Estructuras de control
Las estructuras de control nos permiten modificar el flujo de datos. Son los *condicionales* y los *loops*

## Operadores de comparación
Los operadores de comparación permiten comparar elementos y arrojar un resultado verdadero `true` o falso `false` que nos permite tomar decisiones en nuestro código.

### Estrictamente igual

El operador estrictamente igual `===` recibe dos parámetros y los compara, si ambos son iguales tanto en su valor como en su tipo devuelve `true`, en caso contrario `false`. Los objetos y arrays los compara por el lugar al que apuntan, por lo cual solo son iguales si apuntan al mismo objeto.

```js
var firstName = 'Juan'

firstName === 'Juan' // Esto da como resultado true, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

var number = 1234

number === '1234' // Esto da como resultado false porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

var result = 'FF5733' === 'FF5733' // Devuelve true porque ambas cadenas de caracteres son iguales y luego le asigna true a result

{} === {} // Devuelve false porque no son la misma referencia.

var obj1 = {}

var obj2 = obj1

obj1 === obj2 // Devuelve true, porque apuntan al mismo objeto

```

### Estrictamente desigual

El operador estrictamente desigual `!==` recibe dos parámetros y los compara, si ambos son iguales tanto en su valor como en su tipo devuelve `false`, en caso contrario `true`. Los objetos y arrays los compara por el lugar al que apuntan, por lo cual solo son iguales si apuntan al mismo objeto.

```js
var number = 1234

number !== '1234' // Esto da como resultado true porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

var firstName = 'Juan'

firstName !== 'Juan' // Esto da como resultado false, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

{} === {} // Devuelve true porque no son la misma referencia.

var obj1 = {}

var obj2 = obj1

obj1 === obj2 // Devuelve false, porque apuntan al mismo objeto

```

### Mayor

El operador mayor `>` devuelve `true` si el número de la izquierda es mayor al de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado `false`. En el caso de comparar dos string hace una comparación carácter por carácter que es mayor si tiene una posición posterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' > 5 // Devuelve true, porque convierte el '7' en un number y 7 es mayor que 5.

'Ana' > 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

'Ana' > 'Alan' // Devuelve true, porque el carácter 'A' de 'Ana' tiene la posición 65 al igual que la 'A' de 'Alan', pero la 'n' tiene la posición 110, mientras que la 'l' tiene la posición 108.

```

### Mayor igual


El operador mayor igual `>=` devuelve true si el número de la izquierda es mayor o igual que el de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado false. En el caso de comparar dos string el string hace una comparación carácter por carácter que es mayor o igual si tiene una posición posterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' >= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' >= 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

### Menor

El operador menor `<` devuelve true si el número de la izquierda es menor que el de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado false. En el caso de comparar dos string hace una comparación carácter por carácter que es menor si tiene una posición anterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' < 5 // Devuelve false, porque convierte el '7' en un number y 7 no es menor que 5.

'Ana' < 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

### Menor igual


El operador menor igual `<=` devuelve true si el número de la izquierda es menor o igual que el de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado false. En el caso de comparar dos string hace una comparación carácter por carácter que es menor o igual si tiene una posición anterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' <= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' <= 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

 > Nota: La tabla [ASCII](http://www.elcodigoascii.com.ar/) diferencia minúsculas de mayúsculas, tiene también otros caracteres como saltos de linea o espacios y esta pensada para el alfabeto inglés. Por lo cual las tildes, la ñ, u otros caracteres no necesariamente respetan la posición del alfabeto Español.


## Operadores lógicos

Los operadores lógicos nos permiten evaluar dos elementos que arrojen un resultado booleano o puedan evaluarse como tal. En el caso del NOT la operación la hace solo con un elemento.

#### Falsy values
En JavaScript existen algunos valores que sin ser `false` se evalúan como falso.

- `false`
- El string vacío `''` o  `""` 
- El número cero `0` o menos cero `-0`
- El símbolo `NaN`
- El nulo `null`
- El indefinido `undefined`

Los valores que no están en esta lista se evalúan `true`.

### NOT

El operador de negación evalúa una sentencia de un solo término, si la evaluación es verdadera devuelve `false` y si la evaluación es falsa devuelve `true`.


```js
!false // true

!null // true

!!'' // false, porque niega el '' convirtiéndolo en true y luego niega el !'' convirtiéndolo en false. 

// La doble negación sirve para transfromar una sentencia en booleana, por ejemplo:

var frase = 'Esto no es una pipa';

!!frase // true. Puedo chequear que la variable 'frase' tiene contenido.

!'Hola' // Devuelve false

!('Hola' === 'Hola')// Devuelve false, porque el estrictamente igual devuelve true y luego la negación lo convierte en false
```

## AND

El operador AND se declara utilizando dos veces el símbolo ampersand `&&` y compara dos expresiones que puedan ser evaluadas como `true` o `false`. El valor que retorna es de uno de los dos términos, según la siguiente tabla:


| Expresión 1   | Expresión 2   | Resultado   -> Booleano  |
| :-----------: |:-------------:| :----------------------- |
| `true`        | `true`        | Expresión 2 -> `true`    |
| `true`        | `false`       | Expresión 2 -> `false`   |
| `false`       | `true`        | Expresión 1 -> `false`   |
| `false`       | `false`       | Expresión 1 -> `false`   |



```js
'Juan' && 'Pedro' // Devuelve 'Pedro', que se puede evaluar como true

'Juan' && 0 // Devuelve 0, que se puede evaluar como false

'' && true // Devuelve '', que se puede evaluar como false

7 > 9 && false // Devuelve 7 > 9, que puede evaluarse como false
```


## OR

El operador OR se declara utilizando dos veces el símbolo barra vertical `||` y compara dos expresiones que puedan ser evaluadas como `true` o `false`. El valor que retorna es de uno de los dos términos, según la siguiente tabla:


| Expresión 1   | Expresión 2   | Resultado   -> Booleano  |
| :-----------: |:-------------:| :----------------------- |
| `true`        | `true`        | Expresión 1 -> `true`    |
| `true`        | `false`       | Expresión 1 -> `true`    |
| `false`       | `true`        | Expresión 2 -> `true`    |
| `false`       | `false`       | Expresión 2 -> `false`   |


```js
'Juan' || 'Pedro' // Devuelve 'Juan', que se puede evaluar como true

'Juan' || 0 // Devuelve 'Juan', que se puede evaluar como true

'' && true // Devuelve true, que es true

7 > 9 && false // Devuelve false, que es false
```

## Condicionales
Los condicionales nos permiten evaluar una condición y decidir seguir según el resultado qué código ejecutar.

### If

El If se declara usando la palabra reservada `if` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se coloca una expresión booleana para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera.

```js
if(firstName === 'Juan'){
  console.log('Tu nombre es Juan')
}

console.log('Gracias!')
```

> En este código el `if` evalúa si la variable `firstName` contiene el string `Juan`, si es así muestra en consola `Tu nombre es Juan`, por otro lado siempre se va a mostrar en consola un `Gracias!` no importa el valor de `firstName` porque esta por fuera de las llaves `{}` del `if`.

### If else

El If Else se declara usando la palabra reservada `if` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se coloca una expresión booleana para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera, seguido de esto se pone la palabra reservada `else` y llaves de nuevo `{}`, dentro de las cuales se coloca el código que se va a ejecutar si la condición booleana es falsa.

```js
if(firstName === 'Juan'){
  console.log('Tu nombre es Juan')
} else {
  console.log('Tu nombre no es Juan')
}
```

> En este código el `if` evalúa si la variable `firstName` contiene el string `Juan`, si es así muestra en consola `Tu nombre es Juan`, en caso contrario muestra en consola `Tu nombre no es Juan`. Es importante ver que siempre se va a cumplir un caso o el otro, pero es imposible que se cumplan ambos.

### Switch

El Switch se declara usando la palabra reservada `switch` seguida de paréntesis y llaves `(){}` dentro de los paréntesis se coloca el valor que se quiere comparar y dentro de las llaves se colocan los casos contra los cuales se va a comparar el valor. Cada caso se escribe usando la palabra reservada `case` espacio el caso a evaluar y dos puntos `:`, luego de eso se escribe el código a ejecutar y se termina el caso con `break`. El switch admite también el caso `default:` que se va a ejecutar siempre que fallen todas las otras opciones. La comparación entre los casos y el valor se hace haciendo estrictamente igual `===`.

```js
switch (resultOfGame) {
  case 'Ganó':
    console.log('Se le suman 3 puntos')
    break
  case 'Perdió':
    console.log('Se le suma 1 punto')
    break
  case 'Empató':
    console.log('No se le suma ningún punto')
    break
  default:
    console.log('El resultado no es correcto')
    break
}
```

> En el ejemplo vemos como el valor que se ingresa es el resultado de un partido de fútbol `resultOfGame` y según cual sea se muestra en consola los puntos ganados por el jugardor. También dejamos el caso `default` por si el usuario se equivoca al ingresar el resultado.

Cuando multiples casos deben ejecutar el mismo código lo que se hace es poner los casos `case` uno a continuación del otro y dejando luego del último el código a ejecutar, como en el siguiente ejemplo:


```js
switch (dayOfTheWeek) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un día hábil')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('Es un día de fin de semana')
    break
  default:
    console.log('El día ingresado no es valido')
    break
}
```

En este ejemplo siempre que el día ingresado sea Lunes, Martes, Miércoles, Jueves o Viernes se muestra en consola `Es un día hábil`, si ingresó Sábado o Domingo se muestra en consola `Es un día de fin de semana` y si ingresó cualquier otra cosa se muestra `El día ingresado no es valido`.

## Loops

Los ciclos nos permiten repetir una parte del código una cierta cantidad de veces.

### For

El ciclo For se declara usando la palabra reservada `for` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se escribe la inicialización de la variable (que se ejecuta solo la primera vez), la condición de corte del ciclo que se evalúa antes de ejecutar cada porción de código y la modificación de la variable que se asigna luego de cada ejecución, y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera.

```js
for(var i = 1 ; i < 10 ; i++){
  console.log(i)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números del 1 al 9 (la condición corta en `i < 10`).

Los ciclos For suelen ser muy empleados para recorrer arrays, de la siguiente forma:

```js
var daysOfTheWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysWeek[i]
  console.log(day)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en cero `var i = 0`, que es la primera posición del array.
2. Verifica que se cumpla la condición booleana `i < daysOfTheWeek.length`, en este caso el largo del array es 7.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `day`, que contiene el día de la semana en la esa posición `var day = daysWeek[i]`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto da como resultado que se muestre en consola todos los días de la semana que están cargados en el array, respetando el orden.

### While

El ciclo While se declara usando la palabra reservada `while` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se escribe la condición de corte del ciclo y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera. Es importante poner en los paréntesis una condición de corte que se deje de cumplir en algún momento para evitar generar un ciclo infinito.

```js
var i = 1

while(i < 10){
  console.log(i)

  i++
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números del 1 al 9 (la condición corta en `i < 10`).

### Do while

El ciclo Do while se declara usando la palabra reservada `do` seguida de llaves `{}`, la palabra reservada `while` y paréntesis `()`, dentro de los paréntesis se escribe la condición de corte del ciclo que se evalúa en cada ciclo, excepto la primera vez y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera. Es importante poner en los paréntesis una condición de corte que se deje de cumplir en algún momento, para evitar generar un ciclo infinito.

```js
var i = 1

do{
  console.log(i)

  i++
}while(i > 10)
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
3. Le suma un 1 a la variable `i++`.
4. Verifica que se cumpla la condición booleana `i > 10`, como la condición no se cumple termina el ciclo.

> Esto nos da como resultado que se muestran en consola solo el número 1.

El Do While nos permite por ejemplo pedir un dato y volver a pedirlo hasta que sea el esperado como en el siguiente ejemplo.

```js
var value

do{
  value = promp('Ingrese un valor mayor a 5')

}while(value <= 5)

console.log(value)
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `value`.
2. Ejecuta el código dentro de las llaves pidiendo le al usuario que ingrese un valor y lo asigna a la variable `value`.
3. Verifica que se cumpla la condición booleana `value <= 5`, si el usuario ingresa un número menor a 5 se va a ejecutar el código entre llaves pidiendo le al usuario que ingrese un valor hasta que el valor ingresado no cumpla con la condición `value <= 5`.
4. Imprime el valor ingresado por el usuario en consola.

> Esto nos da como resultado que se muestran en consola el valor ingresado por el usuario, que siempre va a ser mayor a 5.
