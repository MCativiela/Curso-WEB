interface IDireccion{
        calle : string;
        nro : number;
        ciudad : string;
        pais : string;
}

interface IPersona{
    nombre : string;
    edad : number;
    direccion : IDireccion

    mostrarDireccion:() => string;
}

const persona : IPersona = {
    nombre : "José",
    edad : 30,
    direccion : {
        calle : "San Martín",
        nro : 3254,
        ciudad : "Rosario",
        pais : "Argentina"
    },

    mostrarDireccion(){
        return this.nombre + ", Domicilio: " + this.direccion.calle + " " + this.direccion.nro + " " + this.direccion.ciudad + " " + this.direccion.pais  
    }
}

console.log( persona.mostrarDireccion())
