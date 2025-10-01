import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from './matatopos/matatopos/matatopos';
import { NavBar } from './nav-bar/nav-bar';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, Matatopos, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}
