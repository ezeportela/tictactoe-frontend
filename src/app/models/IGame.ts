export interface IGameRequest {
    data:      string;
    message:   string;
}

export interface IGameResult { 
    data:      IGame[];
    message:   string;
}

export interface IGame {
    _id:       string;
    createdAt: number;
    finished:  boolean;
    rows:      number;
    columns:   number;
    moves:     IMove[];
    winner:    number;
}

export interface IMove {
    row:       number;
    column:    number;
    player:    number;
    createdAt: number;
}