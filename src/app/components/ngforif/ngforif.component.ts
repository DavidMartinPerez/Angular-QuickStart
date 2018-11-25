import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforif',
  templateUrl: './ngforif.component.html',
  styleUrls: ['./ngforif.component.css']
})
export class NgforifComponent implements OnInit {
  public estado:Boolean;
  public frase:any;
  public personajes:String[]

  constructor() {
    this.personajes = [ 'Spiderman', 'Veneno', 'Dr. Octopus', 'Mary Jane' ];
    this.estado = true;
    this.frase = {
      mensaje: 'Un gran poder conlleva una gran responsabilidad',
      autor: 'Ben Parker'
    }
   }

  ngOnInit() {
    console.log("cargando NgforifComponent")
  }

  cambioEstado(){
    this.estado = !this.estado;
  }

}
