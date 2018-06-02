import { Component } from '@angular/core';
import { Configuracion } from './modelos/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  public descripcion:string;
  public mostrar_reservas: boolean = true;
  public nombre_boton:string;
  public config:object;
  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.nombre_boton = "Ocultar reservas";
    this.config = Configuracion;
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
