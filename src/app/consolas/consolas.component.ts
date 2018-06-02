// OnInit cuando se carga el modulo
// DoCheck cuando se cambia
import { Component, OnInit } from '@angular/core';
import { Consola } from '../modelos/consola';
import { ConsolaService } from '../Servicios/consola.service';


@Component({
    selector: 'consolas',
    templateUrl: './consolas.component.html',
    providers: [ConsolaService]
})
export class ConsolasComponent implements OnInit{
    public titulo:string;
    public consolas:Array<Consola>;
    public color:string;
    public marcas:string[];
    public nuevaMarca:string;
    public estadoInput:string;
    public mensajeRepetido:string;

    constructor(private _consolaService: ConsolaService){
        this.nuevaMarca = "Createla";
        this.color = 'gris';
        this.marcas = new Array;
        this.titulo = "Consolas";
        this.mensajeRepetido = "";
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
        this.consolas = this._consolaService.getConsolas();
        this.getMarcas();
        //console.log(`Se ha cargado el modulo de ${this.titulo}`);
    }
    setMarca(){
        if(this.marcas.indexOf(this.nuevaMarca) < 0){
            this.marcas.push(this.nuevaMarca);
            this.mensajeRepetido = "";
        }else{
            this.mensajeRepetido = "¡No vale repetirse!";
        }
    }
    eliminarMarca(indice){
        this.marcas[indice] = "¡NOOO!";
        setTimeout(()=> this.marcas.splice(indice, 1),
        500);
    }
    onBlur(){
        this.estadoInput = "¡Espera! ¡No te vayas!";
    }
    onFocus(){
        this.estadoInput = "¡Siii, añademe!"
    }
}