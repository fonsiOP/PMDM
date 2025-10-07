import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, MatToolbarModule, MatIconModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  pi:string="pi pi piiiiiiiiii";

}
