'use strict' //
/*
  C i c l o s
*/


for(var a=0;a<10;a++)
{   
    console.log("la variable vale: "+a);
}
//ciclo for normal

var index=2020;
var mi_nombre= "Daniela Sanchez";

for (let index = 0; index < mi_nombre.length; index++) 
{
    console.log(mi_nombre[index]);
}
//el ejemplo aqui es que con let, al momento de imprimir la variable index sigue teniendo valor 2020 pues es privada al For
console.log(index);
console.log("Fin");

const perritos=["Whisky","Tequila","Ron"];

for (var p of perritos) {
	console.log(p);
}
//Con la p se utiliza para agarrar el valor completamente tipo [whisky,tequila,ron] te vas moviendo entre los elementos
//es distinto que diga OF o IN
//i se usa para que valga por posicion [0,1,2,3] Manejas el indice con el cual accesas al arreglo
for (var i in perritos) {
	console.log(perritos[i]);
}
