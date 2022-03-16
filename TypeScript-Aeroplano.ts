class Turbina{
    private numTurbinas:number = 0;
    public constructor( num:number ){
        this.numTurbinas = num;
    }
    public ToString(){
        return this.numTurbinas + " Turbinas ";
    }
}

class Helice{
    private numHelices:number = 0;
    public constructor( num:number){
        this.numHelices = num;
    }
    public ToString(){
        return this.numHelices + " Hélices ";
    }
}

class Alas{
    private numAlas:number = 0;
    public constructor( num:number){
        this.numAlas = num;
    }
    public ToString(){
        return this.numAlas + " Alas ";
    }
}

class TrenAterrizaje{
    private numTrenAterrizaje:number = 0;
    public constructor( num:number){
        this.numTrenAterrizaje = num;
    }
    public ToString(){
        return this.numTrenAterrizaje + " Trenes de Aterrizaje ";
    }
}

class Cubierta{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean = false;
    private sistemaEmergencia:boolean = false;
    private numTanquesCombustible:number = 0;
    private numPuertasSalidas:number = 0;

    public constructor( pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number){
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public ToString(){
        let mensaje = " Cubierta compuesta de: ";
        if( this.cabinaVuelo ){
            mensaje += " Cubierta de Vuelo, ";
        }
        if( this.cabinaTripulacion ){
            mensaje += " Cubierta de tripulación, "; 
        }
        if( this.sistemaEmergencia ){
            mensaje += " Sistema de emergencias ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de salida ";

        return mensaje;
    }
}

class AeroPlano{
    private helice:Helice;
    private trenAterrizaje:TrenAterrizaje;
    private alas:Alas;
    private cubierta:Cubierta;
    
    public constructor( pHelice:Helice, pTrenAterrizaje:TrenAterrizaje, pAlas:Alas, pCubierta:Cubierta ){
        this.helice = pHelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }

    public ToString(){
        let mensaje = "AeroPlano cpmpuesto de: ";

        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();

        return mensaje;
    }
}
let helices = new Helice( 3 );
let trenDeAterrizaje = new TrenAterrizaje( 3 );
let alasAvion = new Alas( 4 );
let cubiertaAvion = new Cubierta( false, true, true, 2, 1 );

let avion = new AeroPlano( helices, trenDeAterrizaje, alasAvion, cubiertaAvion )
console.log( avion.ToString() )
