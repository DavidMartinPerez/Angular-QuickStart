// OnInit cuando se carga el modulo
// DoCheck cuando se cambia
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit, DoCheck, OnDestroy {

  public nombre:string;
  constructor() {
    this.nombre = "reservas";
  }

  ngOnInit(){
    //console.log(`Se ha cargado el modulo de ${this.nombre}`);
  }

  ngDoCheck(){
    //console.log("Docheck : Se modifico");
  }
  cambiarTitulo(nombre){
    this.nombre = nombre;
  }

  ngOnDestroy(){
    //console.log("se elimino reservas");
  }
}
