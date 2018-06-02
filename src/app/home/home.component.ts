import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public logeado:boolean;
  constructor() {
    this.logeado = false;
  }
  iniciarSesion(){
    this.logeado = true;
  }
  cerrarSesion(){
    this.logeado = false;
  }
  ngOnInit() {
  }

}
