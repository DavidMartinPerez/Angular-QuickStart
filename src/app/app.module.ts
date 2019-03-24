import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
// Aquí se importan las clases de los componentes
//generar componente automatico ng g component nombre-componente
import { AppComponent } from './app.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { ConsolasComponent } from './components/consolas/consolas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { HomeComponent } from './components/home/home.component';
import { CestaComponent } from './components/cesta/cesta.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { ConctatoComponent } from './components/conctato/conctato.component';
import { NgforifComponent } from './components/ngforif/ngforif.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { SearchComponent } from './components/superheroes/components/search/search.component';
import { HeroesComponent } from './components/superheroes/components/heroes/heroes.component';
import { AboutComponent } from './components/superheroes/components/about/about.component';

//Pipes personalziados:
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { CiclovidaComponent } from './components/ciclovida/ciclovida.component';

@NgModule({
  declarations: [ // De claramos los compoenentes
    AppComponent,
    JuegosComponent,
    ConsolasComponent,
    ReservasComponent,
    HomeComponent,
    CestaComponent,
    HttpClientComponent,
    CalculadoraPipe,
    ConctatoComponent,
    NgforifComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    HeroesComponent,
    SuperheroesComponent,
    ResaltadoDirective,
    DirectivasComponent,
    CiclovidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
