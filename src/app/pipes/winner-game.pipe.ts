import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winnerGame'
})
export class WinnerGamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value != null ? value == 1 ? 'Ganó el Jugador' : 'Ganó la Computadora' : 'En Curso';
  }

}
