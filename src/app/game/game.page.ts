import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { IGame } from '../models/IGame'

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  
  id: string
  game: IGame
  sides: [] = [1, 2, 3]

  constructor(
  	private route: ActivatedRoute,
  	private gameService: GameService,
  ) { }

  ngOnInit() {

  	this.route.params.subscribe(params => {
      this.id = params['id']

      this.gameService.getById(this.id).subscribe(game => this.game = game.data)
  	})
  }

}
