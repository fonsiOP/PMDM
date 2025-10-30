import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Consola {

  toposMuertos:number=0;
  
  mostrarEnConsola(mensaje:string){
    console.log(mensaje);
  }

  incrementarTopoMuerto(){
    this.toposMuertos++;
  }

  resetearToposMuertos(){
    this.toposMuertos=0;
  }

  getToposMuertos():number{
    return this.toposMuertos;
  }



}
