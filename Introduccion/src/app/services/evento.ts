import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Evento {
  eventoActual:string="normal";

  cambiarEvento(nuevoEvento:string){
    this.eventoActual=nuevoEvento;
  }

  getFondo(){
    let fondo="/assest/images/fondonormal.png";
    if(this.eventoActual="halloween"){
      fondo="/assest/images/fondoHalloween.png";
    }else if(this.eventoActual="navidad"){
      fondo="/assets/images/fondoNavidad";
    }
    return fondo;
  }




}
