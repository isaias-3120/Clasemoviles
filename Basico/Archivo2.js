'use strict' //
// Constantes
const pi=3.1416;
console.log(pi);

//var
var edad=15;
var edad=20;
var edad=25;


//let permite crear un tipo de variable local en un metodo o funcion, sin afectar a las que esten por fuera

var edad=20;

function years(){
  let edad=15;
}

console.log(edad);

/*
  C O M E N T A R I O
Tipos de datos
int
string
float
bool

Number()
parseInt()
parseFloat()
string()
*/
// prompt es un tipo de inputbox donde el usuario puede meter el valor
var edad=prompt("Dame tu edad");
var meses = edad*12;
alert(meses)
//alert lo hace como un messagebox.show