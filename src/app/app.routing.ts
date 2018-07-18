// Importa los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componenetes
import { ConsolasComponent } from './components/consolas/consolas.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { HomeComponent } from './components/home/home.component';
import { CestaComponent } from './components/cesta/cesta.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { ConctatoComponent } from './components/conctato/conctato.component';
import { NgforifComponent } from './components/ngforif/ngforif.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';

// Array de rutas
const appRoutes:Routes = [
    {path: 'consolas', component: ConsolasComponent},
    {path: 'videojuegos', component: JuegosComponent},
    {path: 'reservas', component: ReservasComponent},
    {path: 'cesta', component: CestaComponent},
    {path: 'cesta/:nombre', component: CestaComponent},
    {path: 'http', component: HttpClientComponent },
    {path: 'conctatanos', component: ConctatoComponent },
    {path: 'forif', component: NgforifComponent },
    {path: 'superheroes', component: SuperheroesComponent },
    {path: 'superheroes/dc', component: NgforifComponent },
    {path: '**', component: HomeComponent }, // error 404 //¡OJO! ESTA SIEMPRE SIEMPRE LA ÚLTIMA SINO NO RECONOCE LAS DEMÁS
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);