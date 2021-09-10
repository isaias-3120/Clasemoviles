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

//HERENCIAAAA
//extends indica que va a heredar de cierta clase   
class Perro extends Mascota{
    constructor(nombre,edad,raza)
    {
        //super indica que propiedades de la otra clase se van a heredar
        super(nombre,edad);
        this.raza=raza;
    }
    desplegar(){
        const {nombre,edad,raza}=this;//recuerda que esto es el destructuring
        console.log(nombre+" tiene "+edad+" años y es un "+raza);
        console.log(`${nombre} tiene ${edad} años y es un ${raza}`);
    }
}
const perro1= new Perro("Whisky",8,"Chihuahua");

perro1.desplegar();