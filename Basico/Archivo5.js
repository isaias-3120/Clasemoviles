'use strict' //
/*
  C i c l o s
*/
var a=0;

while(a<10)
{
    console.log("la variable 'a' vale:"+a);
    a++; //a=a+1  o  a+=1
    if(a===5)
        break;   
}
//3 iguales compara el contenido y el TIPO de VARIABLE que se utiliza
//break; rompe el ciclo y se sale
//continue rompe el ciclo ignora lo que sigue despues e inicia denuevo

console.log("Fin del While");


var a=0;


do{
    console.log("la variable 'a' vale:"+a);
    a++; //a=a+1  o  a+=1 
}while(a<10)


console.log("Fin del do-while");