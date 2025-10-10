import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/Personaje.model';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input() frutita:string | undefined;

}
