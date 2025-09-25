import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  numero:number = 10;

  incrementar(){
    this.numero++;
  }

  decrementar(){
    this.numero--;
  }

  resetear(){
    this.numero=10;
  }


}
