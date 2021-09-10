'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];
//Hay dos formas de crear arreglos, no hay pedo las dos se pueden utilizar
const perritos2= new Array("Yoko","Mitsuki","Akira","Solovino");

const mis_perros= [perritos1,perritos2];
//Se crea un arreglo de dos posiciones que va a guardar los dos arreglos(no va a mostrar sus elementos)

//const mis_perros=[...perritos1,...perritos2];
//con esta pues se concatena los elementos que tienen los dos arreglos

console.log(mis_perros)

console.log(mis_perros[0][1]);
