import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Aquí se importan las clases de los componentes
//generar componente automatico ng g component nombre-componente
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ConsolasComponent } from './consolas/consolas.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [ // De claramos los compoenentes
    AppComponent,
    JuegosComponent,
    ConsolasComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
