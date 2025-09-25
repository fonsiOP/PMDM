import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  numero:number = 10;

  incrementar(){
    if(this.numero<10){
      this.numero++;
    }else{
      this.numero=10;
    }

  }

  decrementar(){
    if(this.numero>0){
      this.numero--;
    }else{
      this.numero=0;
    }
  }

  resetear(){
    this.numero=10;
  }


}
