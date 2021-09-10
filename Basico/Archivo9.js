'use strict' 

var a, b, c, d, e, f; 

a = [1,2,3]; 
b = "perro"; 
c = [42, "gato"];
 
// usando el metodo concat. 
d = a.concat(b, c); 

// usando el operador spread. 
e = [...a, b, ...c]; 
//el operador ...spread hace que se ingresen todos los elementos del arreglo una posicion pra cada uno
//si se utiliza en una variable de texto, va a asignarle una posicion a cada caracter de la cadena

// sin usar el operador spread. 
f = [a, b, c]; 
// si se utiliza sin concat o spread, lo imprime al chile metiendo al arreglo los dos arreglos en vez de meter los valores dentro de este
console.log(d); 
console.log(e); 
console.log(f); 