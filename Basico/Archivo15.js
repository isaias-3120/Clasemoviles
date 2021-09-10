'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];

//agregar   Agrega un elemento al arreglo en la ultima posicion
perritos1.push("Brandy");
console.log(perritos1);

//borrar ultimo     Borra el ultimo elemento del arreglo
perritos1.pop();
console.log(perritos1);

//Con esta se puede insertar o reemplazar en la posicion en la cual yo quiera
// posición, acción(0 insertar, 1 reemplazar), elemento
perritos1.splice(0, 0, 'Brandy');
console.log(perritos1);

//Como se ve en este ejemplo en la posicion 2, y 1 de reemplazar se cambia el arreglo
// posición, acción(0 insertar, 1 reemplazar), elemento
perritos1.splice(2, 1, 'Tekila');
console.log(perritos1);

//si no se pone el elemento se toma que se esta borrando, Se puede borrar en rango si se le da ej .splice(3, 5);
// posicion, cantidad
perritos1.splice(0, 1);
// cuando omites “elemento” elimina al que esta en esa posición
console.log(perritos1);
