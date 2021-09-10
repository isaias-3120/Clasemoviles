'use strict' 

function suma1(){
	return 5+3;
}
//funcion flecha, si tengo parametros que recibir van entre los parentesis, despues de la flecha se hace todo lo que se apunte
const suma2 =()=> 5+3;
// no es necesaria la palabra function
const suma3 =()=> {
    console.log('hola')
    return 5+3;
};

console.log(suma1());
console.log(suma2());
console.log(suma3());
