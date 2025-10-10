import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta/tarjeta';
import { Personaje } from '../../models/Personaje.model';

@Component({
  selector: 'app-lista',
  imports: [Tarjeta],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista implements OnInit{


  frutas:string[]=["manzana", "pera", "fresa","platano","sandia"];

  personajes:Personaje[]=[];


  ngOnInit(): void {

  }


}

