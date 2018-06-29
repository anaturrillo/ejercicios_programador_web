
# EJERCICIOS DE SCOPE

```js
var name = 'Pedro Pomez';

console.log(name); 

function logName() {
    console.log(name);
}

logName();
```

```js
(function bla() {
    var a = 10;
    if(a > 5) {
        a = 7;
    }
    console.log(a);
})()
```

```js
(function ble() {
    if(true) {
        var a = 5;
    }
    alert(a);
})()
```

```js
var a = 5;

function first() {
    a = 6;
}

function second() {
    alert(a);
}

first() 
second()
```

```js
function first() {
    window.a = 3; // lo mismo que a = 3
}

function second() {
    alert(a);
}

first() 
second()
```

```js
var a = 5;
(function bli() {
    var a = 7;
    alert(a);
})()
```

```js
// closure / aplicación parcial

function greet() {
    name = 'Manola';
    return function () {
        console.log('Hola ' + name + '!');
    }
}

greet();

greetLetter = greet();

greetLetter();
```

```js
var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        alert(a);  // Primero
    }
    again();
    alert(a);  // Segundo
}
test();
​alert(a);​  // Tercero
```

```js
function getFunc() {
    var a = 7;
    return function(b) {
        alert(a+b);
    }
}
var f = getFunc();
f(5);
```

```js
function test() {
   console.log('a: ', a);
   console.log('foo(): ', foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

```js
var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

console.log(a)
```

```js
var fullname = 'Juan Topo';

var obj = {
   fullname: 'Juan Bautista Jr Xabadú',
   prop: {
      fullname: 'Cosme Fulanito',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log('obj.prop.getFullname(): ', obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log('test(): ', test());
```

```js
var a = 1; 

function b() { 
	console.log()
	    a = 10; 
	    return; 
	    function a() {
        
    } 
} 


b(); 
console.log('a: ', a);
```

```js
// Closure
var outer = function() {
  var a = "Soy una variable local!"
  var inner = function() {
    alert(a)
  }
  window.fnc = inner
}
outer();
fnc();
```