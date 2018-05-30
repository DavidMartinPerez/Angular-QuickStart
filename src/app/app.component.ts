import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  public mostrar_reservas: boolean = true;
  public nombre_boton:string;

  constructor(){
    this.title = "Mundo";
    this.nombre_boton = "Ocultar reservas";
  }
  ocultarReservas(){
    this.mostrar_reservas = !this.mostrar_reservas;
    if(this.mostrar_reservas){
      this.nombre_boton = "Ocultar Reservas";
    }else{
      this.nombre_boton = "Añadir reservas";
    }
  }
}
