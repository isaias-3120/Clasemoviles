'use strict' 

//parametros rest
//permite recibir un numero ilimitado de parametros
//creando una lista con el resto de ellos
function mifuncion2(animal1,animal2, ...animales) {
    console.log(animal1);
    console.log(animal2);
    console.log(animales);
}
/// los tres puntos ...nombrequedar crean un arreglo con todos los parametros extras que no nos importen
//a los que si les damos nombre no hay problema
mifuncion2("perro","gato","raton","perico");

