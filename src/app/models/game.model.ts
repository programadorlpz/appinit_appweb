export interface IPlayer {
  id: string;
  nombre: string;
}

export interface IGameRound {
  round: number;
  winner: string;
  winnerName: string;
  move1: string;
  move2: string;
}

export interface IGameState {
  players: IPlayer[];
  rounds: IGameRound[];
  currentRound: number;
  currentPlayerIndex: number;
  moves: Record<string, string>;
}
