import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../models/Personaje.model';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input() frutita:string | undefined;
  @Output() mensajeEnviado = new EventEmitter<string>();

  enviarMensaje(){
    this.mensajeEnviado.emit("Este mensaje llega desde el hijo: "+this.frutita);
  }


}
