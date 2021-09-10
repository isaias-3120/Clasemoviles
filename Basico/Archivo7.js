//'use strict' 

//Los valores que tienen en los parametros estan por default en caso de que no se mande nada
function mifuncion1(name="Pedro",edad=16) {
    console.log("Hello "+name+" tienes "+edad+" años");
    return edad*12;
}
//modo estricto te pide que de afuerzas digas que es una variable o que 
var x=2020;

function mifuncion2() {
    var y=x;
    console.log(x);
    
}
//puedes utilizar variables que se encuentren  por fuera de la funcion 
//var meses = mifuncion1()
mifuncion1();
mifuncion2();
//console.log (meses) va a mostrar la edad x12