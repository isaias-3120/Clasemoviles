'use strict' 

const perritos=["Whisky","Tequila","Kahlua","Ron"];

//forEach es una funcion de los arreglos, una funcion anonima?
//una funcion repetitiva que ayuda a mostrar todos los valores, con ese function puedes hacer lo que quieras con ella
// a lo que necesitas
//usando una función anonima
perritos.forEach(function(e){ 
	console.log(e)
});

//usando una función flecha
// con esta funcion flecha puedes quitar las cosas no necesarias, tambien se pueden quitar las llaves
perritos.forEach(p => {
	console.log(p)
});

//la funcion flecha tiene esos 3 parametros que pueden ser utilizados despues
//el original sirve nada mas como para ver las cosas por dentro por si algo error o asi
perritos.forEach((element,index,original) => {
    console.log(element,"en el index",index);
});
