import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componente de Videojuegos</h2>
        <ul>
            <li>Mario bros</li>
            <li>Pokemon</li>
        </ul>
    `
})
export class VideojuegosComponent {
    constructor(){
        console.log("Se ha cargado correctamentre el component: Videojuegos")
    }
}