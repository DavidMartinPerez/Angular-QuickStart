// Importa los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componenetes
import { ConsolasComponent } from './consolas/consolas.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { HomeComponent } from './home/home.component';
import { CestaComponent } from './cesta/cesta.component';

// Array de rutas
const appRoutes:Routes = [
    {path: 'consolas', component: ConsolasComponent},
    {path: 'videojuegos', component: JuegosComponent},
    {path: 'reservas', component: ReservasComponent},
    {path: 'cesta', component: CestaComponent},
    {path: 'cesta/:nombre', component: CestaComponent},
    {path: '**', component: HomeComponent }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);