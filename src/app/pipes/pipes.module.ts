import { NgModule } from "@angular/core";
import { RelativeTimePipe } from "./relative-time.pipe";
import { FinishedGamePipe } from './finished-game.pipe';
import { WinnerGamePipe } from './winner-game.pipe';

@NgModule({
  declarations: [
    RelativeTimePipe,
    FinishedGamePipe,
    WinnerGamePipe
  ],
  imports: [],
  exports: [
    RelativeTimePipe,
    FinishedGamePipe,
    WinnerGamePipe,
  ]
})
export class PipesModule {}