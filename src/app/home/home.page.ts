import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { IGame } from '../models/IGame';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  games: IGame[] = []

  constructor(
  	private gameService: GameService,
  	private router: Router
  ) {}
  
  ngOnInit(): void {
    this.gameService.getAll()
      .subscribe(games => this.games = games.data)
  }

  createGame() {
  	this.gameService.create()
  		.subscribe(game => {
  			const { data: gameId } = game

  			this.router.navigate([ '/game', gameId ])
  		})

  }

  goToGame(id) {
  	console.log('click', id)
  	this.router.navigate([ '/game', id ])
  } 
}
