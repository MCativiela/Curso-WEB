function DecoradorPersona(target:Function){
    console.log(target);
}

@DecoradorPersona
class Persona{
    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
