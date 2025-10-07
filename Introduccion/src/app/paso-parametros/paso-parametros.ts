import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paso-parametros',
  imports: [],
  templateUrl: './paso-parametros.html',
  styleUrl: './paso-parametros.css'
})
export class PasoParametros {

  frase:string|null="";

  constructor(private ruta: ActivatedRoute){
    this.frase=this.ruta.snapshot.paramMap.get('num');
  }
}
