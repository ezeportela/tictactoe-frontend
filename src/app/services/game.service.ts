import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGameResult } from '../models/IGame';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = 'https://tictactoe-game-backend.herokuapp.com'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IGameResult>(`${this.url}/api/games`)
  }
}
