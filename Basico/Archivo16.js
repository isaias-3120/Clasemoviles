'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];

//Convierte al arreglo en una cadena string y la separa con (,)
//convierte un arreglo en string
const perritus= perritos1.join();

console.log(perritus);

//convierte una string en sub string

var lenguajes= "C#, Java, JavaScript, Python"

var lenguajes2= lenguajes.split(", ");
//Tienes que indicar dentro .split() con que se va a diferenciar para separar cada elemento

console.log(lenguajes2);

perritos1.sort();
perritos1.reverse();

var numbers=[6,34,33,22,33,11]

//Como dice ahi solo los va a tratar de acomodar como si fuera una cadena de texto
//sort y reverse no funciona con numeros
console.log(numbers.sort());

var arregloNum= numbers.sort((a,b) => a-b);
//el (a,b) => a-b es un sortea burbuja en una funcion flecha
// y asi puede imprimirlo de manera ordenada
console.log(arregloNum)

numbers.forEach(n => console.log(n));
//con funcion flecha se puede imprimir un arreglo posicion por posicion

//A fuerzas tiene que se una funcion flecha por eso de funciones anonimas
var arreglo= numbers.filter(n => n!=33);
//filter crea un nuevo arreglo con la condicion que se establecio
//funciones que necesitan de funciones para funcionar


console.log(arreglo);
