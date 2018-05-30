// OnInit cuando se carga el modulo
// DoCheck cuando se cambia
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'consolas',
    templateUrl: './consolas.component.html'
})
export class ConsolasComponent implements OnInit{
    public nombre:string;
    public titulo:string;

    constructor(){
        this.nombre = "Consolas";
        this.titulo = `Lista de ${ this.nombre }`
    }

    ngOnInit(){
        console.log(`Se ha cargado el modulo de ${this.nombre}`);
    }
}