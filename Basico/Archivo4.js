'use strict' //

//el uso del Number convierte lo que capturas a numerico
//Number = convertoToInt
var edad= Number(prompt("Dame tu edad"));

switch(edad)
{
    case 18:
        console.log("Tienes 18 años");
        break;
    case 20:case 21:
        console.log("Tienes 20 o 21 años");
        break;
    default:
        console.log("Tu edad no esta en la lista");
        break;
}

//Agrupar case sirve para que dos hagan lo mismo
