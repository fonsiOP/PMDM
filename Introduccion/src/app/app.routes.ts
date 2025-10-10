import { Routes } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from './matatopos/matatopos/matatopos';
import { Carrera } from './carrera/carrera';
import { PasoParametros } from './paso-parametros/paso-parametros';
import { Lista } from './ListaFrutas/lista/lista';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'lista-frutas', component: Lista},
    { path: 'matatopos', component: Matatopos},
    { path: 'carrera', component: Carrera}, 
    { path: 'paso-parametros/:num', component: PasoParametros},     
];
