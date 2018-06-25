# ¿Qué es un algoritmo?

Un algoritmo es una serie de instrucciones que deben cumplir las siguientes condiciones:

   - Ser ordenadas: Al igual que en matemáticas no es lo mismo hacer`( 2 + 2 ) * 3` que `2 + ( 2 * 3)`, en programación el orden también es muy importante para que nuestro código funcione correctamente.
   - Estar bien definidas: Las instrucciones tienen que ser claras y estar escritas en el lenguaje que entiende nuestro navegador que en nuestro caso es JavaScript. No deben ser ambiguas.
   - Ser finitas: Si nuestras instrucciones no tiene un punto de corte o un fin, nuestro programa va a entrar en lo que se conoce como un loop y nunca va a terminar tildando el navegador.

Las partes principales de un algoritmo son:

- Datos de entrada: Son los datos necesarios que el algoritmo necesita para ser ejecutado.
- Proceso: Es la secuencia de pasos para ejecutar el algoritmo.
- Datos de salida: Son los datos obtenidos después de la ejecución del algoritmo.

> Nota: Tanto los datos de entrada como de salida no son obligatorios para que sea un algoritmo.

# Algoritmo de un café 

> La idea es tener un ejemplo mental de un algoritmo y sus partes, noten que acá tenemos los ingredientes (elementos de entrada), la preparación del café (proceso) y un resultado final que es la taza de café lista (elementos de salida). En la mayoría de los ejercicios que hagamos la estructura vas a ser la misma, por lo cual es bueno tener esto en mente.

## Ingredientes (Datos de entrada)

- Café 250 ml.
- Azúcar 3 cdas.
- Una taza café.

## Preparación (Proceso)

1. Servir el café en la taza hasta que la misma este completa.
2. Agrega el azúcar en la taza.
3. Revolver hasta disolver el azúcar.

## Resultado (Datos de salida)

Un taza de un buen café!


# Empezando por el principio

Un programa es un conjunto de instrucciones para decirle a la computadora lo que tiene que hacer.
A veces podemos escuchar, en vez de "programa", "código fuente" o simplemente "código".
En javascript podemos guardar nuestro código en archivos de texto con la extensión js, en un snippet en el browser o tiperalo directamente en la consola.

Las reglas escribir instrucciones en conbinaciones y formatos válidos se llaman "sintaxis". Javascript tiene su sintaxis, que tanto como en español, nos enseñan a escribir correctamente.

## Características de Javascript

- Javascript es un lenguaje liviano.
- "tecnicamente interpretado" o compilado en tiempo de ejecución. 
- Tiene lo que se llama "first class functions", lo que significa que las funciones son valores.
- Está basado en prototipos.
- Es débilmente tipado.
- Es multiparadigma.

# Sentencias

En un lenguaje de programación, un conjunto de palabras, números y operadores que ejecutan una tarea específica se llama "sentencia". Por ejemplo: 


```js
a = b * 2;
```
En esta sentencia `a` y `b` son *variables* (más adelante vamos a ver este tema más en profundidad).
La variables son *cajas* en las que podemos guardar valores para usarlos después. En cambio el `2` es un valor en si mismo, lo llamamos *valor literal*.

El `=` y `*` son operadores (también lo vamos a ver en profundidad en esete mismo texto).

La sentencia del ejemplo le dice a la computadora que tome el valor guardado en la variable `b`, lo multiplique por `2` y luego el resultado de esta operación lo guarde en la variable `a`.

Un programa no es más que un conjunto de estas sentencias.

# Expresiones

Las sentencias se componen de *expresiones*, una expresión es cualquier referencia a un valor o una variable, o un conjunto de estos combinados con operadores.
En el ejemplo:

```js
a = b * 2;
```

La sentencia tiene 4 expresiones:

* `2` es una *expresión de un valor literal*
* `b` es una *expresion de una variable*, o sea, quiere decir que hay que traer el valor que tenga la variable
* `b * 2` es una *expresión aritmética*, que quiere decir: hacer una multiplicación. (Multiplicación en este caso porque el operador es `*`)
* `a = b * 2` es una *expresión de asignación*, quiere decir: asignar el resultado de la expresión `b * 2` en la variable `a` 


# Valores y tipos de datos

### Boolean

Booleano o boolean, sólo puede tomar dos valores `true` (verdadero) o `false` (falso). Aunque no se usa tanto como valor de una variable de manera implícita, si muchas veces ciertos valores los convertimos a booleanos para poder tomar decisiones.

```js
var boolean1 = true

var boolean2 = false

```

> Ej: La tecla de luz, si está prendida es `true`, si la apago es `false`.

## Number

Número o number son los números que usamos en operaciones matemáticas y pueden ser números enteros incluido el cero `0 1 2 3`, decimales `3.1416 2.4` y negativos `-5 -8.3`.

```js
var intNumber = 3

var floatNumber = 0.87876

var negativeFloatNumber = -5.4

```

> Ej: Una calculadora almacena valores de tipo number para hacer las operaciones.

## String

Las cadenas de texto o strings son las palabras que contienen, letras `a b C D`, signos `: . @`, saltos de línea `enter`, espacios ` `, o cualquier carácter valido de la tabla [ASCII](http://www.elcodigoascii.com.ar/). Para declarar un string tenemos que escribir el texto entre comillas simples o dobles. Con este tipo de valor podemos representar los textos y hacer operaciones para modificarlos o mostrarlos en pantalla. Es importante que tengamos en cuenta que no es lo mismo un número almacenado como string que un number, JavaScript los va a tratar de manera distinta.

```js
var firstName = 'Juan'

var email = 'juan@gmail.com'

var numbers = '1 2 3 4 5 setenta y ocho'

var text = 'The dark side of the moon'
```

> Ej: El email que ingresamos como usuario o los textos que escribimos en los muros de facebook son de tipo string

## Undefined

Indefinido o undefined es un valor que nos arroja JavaScript para indicarnos que el valor al cual queremos acceder aún no fue definido, ya sea porque no se le asigno un valor a la variable o porque queremos acceder a la propiedad que no existe de un objeto.

```js 
var a;

console.log(a) // undefined

```

> Ej: Cuando no ingresamos nada en un `prompt()`, el valor que nos devuelve es `undefined`. También una variable sin valor asignado da `undefined`.

## Null

Null es el elemento vacío, representa la ausencia de valor y es asignado intencionalmente. NO es lo mismo que undefined.

```js

var example2 = null // Le asigno el valor nulo
```

> Ej: Cuando no ingresamos nada en un `prompt()`, el valor que nos devuelve es `undefined`. También una variable sin valor asignado da `undefined`.



## Array

Es una lista de elementos ordenados y podemos acceder a ellos mediante la posición (que se empieza a contar desde 0). Los elementos dentro de un array van separados por `,`. Para acceder a un elemento del array debemos utilizar la siguiente sintaxis: `array[posición]`.

Un array pueden contener cualquier tipo de valor incluidos otros arrays y objetos.

```js
var array = [1, 2,'Pedro', false]

array[0] // 1

array[2] // 'Pedro'

array[3] // false

array[4] // undefined

array['hola'] // undefined
```

> Ej: La bandeja de entrada del e-mail contiene objetos, en este caso e-mails, ordenados cronológicamente.

## Object

Un objeto o object es un contenedor que nos permite agrupar variables juntas bajo un mismo concepto a través de pares clave/valor. Las claves se llaman *keys* o *propiedades* del objeto. Los valores que pueden contener son todos los permitidos en JavaScript.

Un objeto se define entre llaves `{ }`, las propiedades se separan del valor mediante `:` y cada par propiedad/valor se separa del otro con `,`. Los nombres de las propiedades pueden o no estar entre comillas.

Accedemos a los valores de un objeto mediante sus propiedades: `objeto.propiedad` o `objeto['propiedad']`. El nombre de una propiedad puede estar guardado en una variable, y podemos usar la variable para acceder a la propiedad del objeto `objeto[variable]`.

```js
var user = {
  name: 'Juan Bautista Jr. Xabadú',
  age: 45,
  address: 'Calle falsa 123',
  bigote: true,
  emails: ['juanba@xabadu.com', 'juan.bautista.jr.xabadu@gmail.com'],
  familyMembers: {
  	wife: 'Loretta',
  	son: null,
  	daugther: 'Carmelinda'
  }
}

user.name // 'Juan Bautista Jr. Xabadú'

user.age // 45

user['address'] // 'Calle falsa 123'

user.familyMembers.wife // 'Loretta'

var prop = 'bigote';
user[prop] // true

```

> Ej: Un contacto de la agenda que contiene información como el nombre, la dirección, el número de teléfono, el cumpleaños, etc. de alguien en particular es un objeto.

## Conversión del tipo de dato
Como mencionamos antes Javascript es un lenguaje debilmente tipado o de tipado dinámico. Esto quiere decir que no necesito definir el tipo de dato de una variable, técnicamente puede hacer:

```js 
var a = 'Soy un texto';
a = 15 // valor del tipo número
```
Lo que hice fue cambiar el tipo de dato que guardo en la variable. Esto es importante a la hora de usar operadores aritméticos porque JS tiene un mecanismo que se llama *coerción del tipo de dato*. Si yo intento operar con tipos de datos diferentes JS intenta predecir el tipo que debería tener el dato que estoy usando. Por ejemplo si intento hacer la resta entre un número y un string `10 - '5'` JS va a coercionar ese `'5'` a `5`. Este tipo de coerción se llama *implícita* y la realiza JS por nosotros.

También puedo coercionar un tipo *explícitamente* usando la función Number()

```js
var a = "42";
var b = Number( a );

console.log( a );	// "42"
console.log( b );	// 42
```

# Operadores

Los operadores nos permiten ejecutar actiones sobre variables y valores.

## Operador de asignación
El operador de asignación es `=`. JS primero calcula el valor de la derecha y luego lo asigna a la variable especificada a la izquierda.

Es decir en `a = 1 + 3`, JS primero calcula `1 + 3 = 4` y luego realiza `a = 4`.

## Operadores aritméticos

### Adición

La adición es la operación de la suma matemática de valores, para esto es necesario que todos los elementos sean de tipo number o booleanos. En caso de `false` o `true` los toma como 0 y 1 respectivamente. Si uno de los valores es de tipo string JavaScript va a *concatenar* los valores en vez de tratar de hacer la coerción del tipo de dato.

```js
1 + 1 // Devuelve el valor de tipo number 2
1 + '1' // Devuelve el valor de tipo string'11'
```

### Substracción

La resta se define con el símbolo `-` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la coerción falla o los dos valores son string devuelve `NaN`.

```js
var subtotal  = 8

var total = subtotal - 10 // Esto devuelve el valor de tipo number -2 y se lo asigna a la variable total

5 - '2' // En este caso la resta entre el number 5 y el string convertido a number 2 y devuelve el number 3

2 - 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

### Multiplicación

La multiplicación se define con el símbolo `*` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.

```js
var subtotal  = 5

var total = subtotal * 10 // Esto devuelve el valor de tipo number 50 y se lo asigna a la variable total

2 * '3' // En este caso la multiplicación entre el number 2 y el string convertido a number 3 y devuelve como resultado el number 6

2 * 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

### División

La división se define con el símbolo `/` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. En caso de tratar de dividir por cero el resultado que devuelve es Infinity.

```js
var subtotal  = 50

var total = subtotal / 10 // Esto devuelve el valor de tipo number 5 y se lo asigna a la variable total

2 / 0 // Devuelve Infinity

2 / 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

### Módulo

El módulo es un operador que nos permite saber el resto de una división entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. 
Este operador nos sirve por ejemplo para saber si un número es par o impar, haciendo el módulo de 2.

```js
5 % 2 // En este caso devuelve el valor de tipo number 1, por lo cual el número es impar

10 % 2 // En este caso devuelve el valor de tipo number 0, por lo cual el número es par

10 % '5' // En este caso devuelve el valor de tipo number 0, por lo cual el número es divisible por 5 sin resto.

10 % 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

### Potenciación

La potenciación un operador que nos permite elevar un número a otro. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. 

```js
3**3 // En este caso devuelve el valor de tipo number 27

3**'3' // En este caso también devuelve el valor de tipo number 27

3 ** 'Hola' // Como el string 'Hola' no se puede convertir a number devuelve NaN
```

### Incremental

El operador incremental `++` nos sirve para sumarle un 1 al valor de una variable number. Si el valor de la variable es de tipo string lo va a tratar de convertir a number y sumarle `1`, si falla la variable queda con el valor NaN asignado. Esta es una manera rápida de hacer la operación `i = i + 1`.

```js
var subtotal = 5

subtotal++ // Esto es equivalente a subtotal = subtotal + 1, la variable subtotal queda con el valor de tipo number 6

var total = '2'

total++ // Esto es equivalente a total = total + 1, la variable total queda con el valor de tipo number 3

var text = 'Hola'

text++ // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text
```

### Decremental

El operador decremental `--` nos sirve para restarle un 1 al valor de una variable number. Si la el valor de la variable es de tipo string lo va a tratar de convertir a number y restarle `1`, si falla la variable queda con el valor NaN asignado.

```js
var subtotal = 5

subtotal-- // Esto es equivalente a subtotal = subtotal - 1, la variable subtotal queda con el valor de tipo number 4

var total = '2'

total-- // Esto es equivalente a total = total - 1, la variable total queda con el valor de tipo number 1

var text = 'Hola'

text-- // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text

**Nota:** Mozilla Developer Network (MDN)'s "Expressions and Operators" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).


### Comments
Los comentarios o comments son textos que puedo escribir en mi código pero que van a ser ignorados durante la ejecución del programa. Los comentarios suelen ayudar a documentar el código.

```js 
// Este es un comentario de línea, se ignora todo desde la segunda barra hasta el final de la línea.

/* 
	este es un comentario de bloque.
	se ignora todo lo que esté entre las barras.
*/

```

# Variables

La mayoría de los programas necesitan trackear un valor a los largo de su ejecución, a medida que va cambiando por las diferentes operaciones.
La manera de hacer esto es guardarlo en una variable, que es un contenedor simbólico o *referencia*.
En una variable puedo guardar cualquier tipo de valor (ver tipos de datos).
Para declarar una variable utilizamos la palabra reservada `var`.

```js
var cantidad = 5
```

Como vimos antes puedo cambiar el tipo de datos que una variable guarda.
Explícitamente:
```js
console.log( String( cantidad ) + ' unidades');
```

Implícitamente:
```js
console.log( cantidad + ' unidades' );

// en ambos casos la salida será un string '5 unidades'
```
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
