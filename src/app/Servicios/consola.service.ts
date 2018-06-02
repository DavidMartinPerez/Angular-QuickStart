import { Injectable } from '@angular/core';
import { Consola } from '../modelos/consola';

@Injectable()
export class ConsolaService {
    public consolas:Array<Consola>;

    constructor(){
        this.consolas = [
            new Consola('Nintendo Switch','Nintendo','Portatil','Rojo',320,30),
            new Consola('PS4','Sony','Play Station','Gris',400,60),
            new Consola('XO','Microsoft','Xbox','Gris',500,80),
            new Consola('XBX360','Microsoft','Xbox','Gris',200,0)
        ]
    }
    getConsolas(): Array<Consola>{
        return this.consolas;
    }
}