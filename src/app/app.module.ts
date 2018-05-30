import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Aquí se importan las clases de los componentes
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuego/videojuego.component';

@NgModule({
  declarations: [ // De claramos los compoenentes
    AppComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
