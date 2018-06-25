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
```

**Nota:** Mozilla Developer Network (MDN) "Expressions and Operators" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).


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
