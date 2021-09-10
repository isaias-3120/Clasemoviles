'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];

//regresara un false o true
const encontro = perritos1.some(function(element){
	return element=="Tequila";
});
//proceso de itineracion de arreglos que va a buscar el valor y regresa un bool


//const encontro = perritos1.some(element=>element=="Tequila");

perritos1.some(element=>element=="Tequila");

console.log(encontro);


//los metodos para los arreglos de igual forma
//se pueden utilizar en un arreglo de objetos
//solo tendriamos que indicar la propiedad
const perritosR=[
	{nombre:"Whisky",edad:8, raza:"Chihuahua Mix"},
	{nombre:"Tequila",edad:8, raza:"Chihuahua Mix"},
	{nombre:"Ron",edad:10, raza:"Chihuahua Mix"},
	{nombre:"Akira",edad:8, raza:"Mestiza"}
];

const datos = perritosR.find(p=> p.nombre=="Akira");
//el .find regresa todo el objeto completo		Regresa el elemento que coincida
//.find solo regresa el primero que encuentre
console.log(datos);

const Familia=[
	{nombre:"Hal",edad:40, sueldo:15000},
	{nombre:"Lois",edad:38, sueldo:10000},
	{nombre:"Francis",edad:18, sueldo:3000},
	{nombre:"Reese",edad:16, sueldo:2500},
	{nombre:"Malcolm",edad:14, sueldo:2000},
	{nombre:"Dewey",edad:10, sueldo:500}
];

//const sueldos = Familia.reduce((sueldoT,persona)=>sueldoT+persona.sueldo,0)
const sueldos = Familia.reduce((sueldoT,p)=>{return sueldoT+p.sueldo},0) 
//El cero despues de la coma indica que la variable va a empezar en cero el p es el objeto que se ira iterando
//el reduce te va a permitir tener una variable que se podra utilizar para un ejemplo como arriba
console.log(sueldos)

//operador ternario
//Es como un if else pero de una sola linea y mas bonito
//condicion ? accion_verdadera : accion_falsa
encontro==true ? console.log("se encontro!!!") : console.log("no se encontro");

//se puede utilizar una variable para asignar el valor no hay pedo
const respuesta = encontro ? "se encontro" : "no se encontro";

//condicion && accion_verdadera 
encontro==true  && console.log("si se encontro");
//por si solo quieres la accion verdadera

console.log(respuesta);
