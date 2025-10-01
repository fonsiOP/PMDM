import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-matatopos',
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {

  topos:number[]=[0,0,0,0,1,0,0,0,0];
  contador:number=0;

  mataTopo(index:number){
    let nuevoTopo = this.devolverNuevoTopo(index);
    this.topos=[0,0,0,0,0,0,0,0,0];
    this.topos[nuevoTopo]=1;
    this.contador++;
  }

  devolverNuevoTopo(i:number){
    let nuevoTopo=Math.floor(Math.random()*9);
    
    while (nuevoTopo==i){
      nuevoTopo=Math.floor(Math.random()*9);
    }
    return nuevoTopo;

  }

  fallo(){
    this.contador--;
  }

}
