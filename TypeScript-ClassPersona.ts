/ Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona{
  public nombre:string;
  public apellido:string; 
  private sueldo:number;

  constructor( nombre:string, apellido:string){
    this.nombre = nombre;
    this.apellido = apellido;  
  }

  set Sueldo( sueldo:number){
    this.sueldo = sueldo;
  }

  get Sueldo():number{
      return this.sueldo;
  }
}
