class Mascota{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    desplegar(){
        console.log("El nombre de la mascota es "+this.nombre+" y tiene "+this.edad+ " años");
        console.log(`El nombre de la mascota es ${this.nombre} y tiene ${this.edad} años`);
    }
}

//el ´´ sirve para que se pueda usar el ${} y evitar el tener que concatenar cada cadena
const perro1= new Mascota("Whisky",8);

perro1.desplegar();