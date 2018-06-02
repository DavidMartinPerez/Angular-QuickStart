// OnInit cuando se carga el modulo
// DoCheck cuando se cambia
import { Component, OnInit } from '@angular/core';
import { Consola } from '../modelos/consola';

@Component({
    selector: 'consolas',
    templateUrl: './consolas.component.html'
})
export class ConsolasComponent implements OnInit{
    public titulo:string;
    public consolas:Array<Consola>;

    constructor(){
        this.titulo = "Consolas";
        this.consolas = [
            new Consola('Nintendo Switch','Nintendo','Portatil',320,30),
            new Consola('PS4','Sony','Play Station',400,60),
            new Consola('XO','Microsoft','Xbox',500,80)
        ]
    }

    ngOnInit(){
        //console.log(`Se ha cargado el modulo de ${this.titulo}`);
    }
}