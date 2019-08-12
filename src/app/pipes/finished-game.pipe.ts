import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finishedGame'
})
export class FinishedGamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? 'Juego Terminado' : 'Continuar Jugando';
  }

}
