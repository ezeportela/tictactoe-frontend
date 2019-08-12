import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGameResult, IGameRequest } from '../models/IGame';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = 'https://tictactoe-game-backend.herokuapp.com'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IGameResult>(`${this.url}/api/games`)
  }

  create() {
  	return this.http.post<IGameRequest>(`${this.url}/api/games`, {})	
  }
}
