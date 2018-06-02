import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'juegos',
    templateUrl: './juegos.component.html'
})
export class JuegosComponent implements OnInit{
    public nombre:string = "Juegos";
    public titulo: string;
    public nombreListado: string;

    constructor(){
        this.titulo = `Lista de ${this.nombre}`;
        this.nombreListado = "Más vendidos";
    }

    ngOnInit(){
       // console.log(`Se ha cargado el modulo de ${this.nombre}`);
    }
}