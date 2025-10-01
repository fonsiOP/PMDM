import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

}
