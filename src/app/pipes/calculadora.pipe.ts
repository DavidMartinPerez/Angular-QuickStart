import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    //dato | calculadora: otrodato
    //param 1 | param 2
    transform(value:any, value2:any){
        let operaciones = `
            Suma: ${value+value2}
            Resta: ${value-value2}
            Multiplicación: ${value*value2}
            División: ${value/value2}
        `;
        return operaciones;
    }
}