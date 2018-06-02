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
    public color:string;
    public marcas:string[];
    public nuevaMarca:string;

    constructor(){
        this.nuevaMarca = "Createla";
        this.color = 'gris';
        this.marcas = new Array;
        this.titulo = "Consolas";
        this.consolas = [
            new Consola('Nintendo Switch','Nintendo','Portatil','Rojo',320,30),
            new Consola('PS4','Sony','Play Station','Gris',400,60),
            new Consola('XO','Microsoft','Xbox','Gris',500,80),
            new Consola('XBX360','Microsoft','Xbox','Gris',200,0)
        ]
    }
    getMarcas(){
        this.consolas.forEach((consola,index)=>{
            if(this.marcas.indexOf(consola.marca) < 0){
                this.marcas.push(consola.marca);
            }
        });
        console.log(this.marcas);
    }
    ngOnInit(){
        this.getMarcas();
        //console.log(`Se ha cargado el modulo de ${this.titulo}`);
    }
    setMarca(){
        if(this.marcas.indexOf(this.nuevaMarca) < 0){
            this.marcas.push(this.nuevaMarca);
        }
    }
}