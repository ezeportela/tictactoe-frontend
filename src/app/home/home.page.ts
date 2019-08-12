import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { IGame } from '../models/IGame';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  games: IGame[] = []

  constructor(private gameService: GameService) {}
  
  ngOnInit(): void {
    this.gameService.getAll()
      .subscribe(games => this.games = games.data)
  }

}
