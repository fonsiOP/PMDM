import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule,CommonModule, RouterLink, MatToolbarModule, MatIconModule, MatMenuModule, MatSlideToggleModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  pi:string="pi pi piiiiiiiiii";

  esHalloween:boolean = true;

}
