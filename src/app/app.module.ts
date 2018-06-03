import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
// Aquí se importan las clases de los componentes
//generar componente automatico ng g component nombre-componente
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ConsolasComponent } from './consolas/consolas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { HomeComponent } from './home/home.component';
import { CestaComponent } from './cesta/cesta.component';
import { HttpClientComponent } from './http-client/http-client.component';

//Pipes personalziados:
import { CalculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [ // De claramos los compoenentes
    AppComponent,
    JuegosComponent,
    ConsolasComponent,
    ReservasComponent,
    HomeComponent,
    CestaComponent,
    HttpClientComponent,
    CalculadoraPipe
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
