import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrera',
  imports: [CommonModule],
  templateUrl: './carrera.html',
  styleUrl: './carrera.css'
})
export class Carrera {

  movChibi1 = { transform: 'translateX(100px)' };
  posX:number=0;
  posY:number=0;

  async moverse(){

    this.posX += Math.floor(Math.random() * 50)-25; 
    this.posY += Math.floor(Math.random() * 50)-25; 

    this.movChibi1 = { transform: 'translateX('+this.posX+'px) translateY('+this.posX+'px)' };

  }



}
