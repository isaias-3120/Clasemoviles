'use strict' 

//permite recibir un numero ilimitado de parametros
//creando una lista con el resto de ellos
function mifuncion2(animal1,animal2, ...animales) {
        console.log(animal1);
        console.log(animal2);
        console.log(animales);
}

mifuncion2("perro","gato","raton","perico");

var animalitos=["perro","gato","raton","perico"];

//podemos enviar un numero ilimitado de parametros
mifuncion2(...animalitos);
//si ya tenemos el arreglo hecho lo podemos mandar igual con ...spread si lo ponemos en la funcion
//tipo  function(...nombrearreglo) de esa forma podemos meter arreglos ya hechos
// si no tupiera los tres puntos lo tomaria como un solo archivo


    