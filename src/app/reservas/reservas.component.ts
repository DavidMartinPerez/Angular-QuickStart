import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  public nombre:string;
  constructor() {
    this.nombre = "reservas";
  }

  ngOnInit(){
    console.log(`Se ha cargado el modulo de ${this.nombre}`);
  }

}
