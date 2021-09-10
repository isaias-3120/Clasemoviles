'use strict' 

var numbers=[1,2,3,4,5,6];

//propiedad propia de los arreglos y se utiliza cuando se quiera itinerar entre cada elemento del arreglo
//funcion map permite algo de tradicional
numbers.map(function(num){
    return num*2;
});
//Solo son ejemplos de como se escribe
//si se quiere guardar se tiene que guardar en una variable la funcion para mostrarla como se ve en la linea 17 y 21
numbers.map((num)=> num*2);

numbers.map((num)=> {
    return num*2;
})

var arreglo1 = numbers.map((num)=> num*2)
//puedes crear un arreglo al utilizar .map para que se le haga algo al arreglo que utilizas, e ir guardando esos valores


var arreglo2 = numbers.map((num,index,original)=> num*3)
//Aveces pueden dar problemas, SI SE UTILIZAN LLAVES TIENES QUE PONER RETURN SINO TE DARA PROBLEMAS

console.log(arreglo1);
console.log(arreglo2);
