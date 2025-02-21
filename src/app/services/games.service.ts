import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { IGameState } from '../models/game.model'

@Injectable({ providedIn: 'root' })
export class GamesService {
  gameId = 0
  gameState: IGameState = {
    players: [],
    rounds: [],
    currentRound: 1,
    currentPlayerIndex: 0,
    moves: {}
  }
  constructor(private api: ApiService) {}
  setPlayers(n1: string, n2: string): void {
    this.api.iniciarBatalla(n1, n2).subscribe({
      next: res => {
        this.gameId = res.game_id
        this.gameState.players = [
          { id: 'p1_' + Date.now(), nombre: n1 },
          { id: 'p2_' + Date.now(), nombre: n2 }
        ]
        this.gameState.rounds = []
        this.gameState.currentRound = 1
        this.gameState.currentPlayerIndex = 0
        this.gameState.moves = {}
      },
      error: err => {
        alert(err.error?.error || 'Error')
      }
    })
  }
  playMove(move: string): string {
    const currentPlayer = this.gameState.players[this.gameState.currentPlayerIndex]
    const jug = this.gameState.currentPlayerIndex === 0 ? 'p1' : 'p2'
    this.api.movimiento(this.gameId, jug, move).subscribe({
      next: () => {},
      error: err => {
        alert(err.error?.error || 'Error')
      }
    })
    this.gameState.moves[currentPlayer.id] = move
    if (this.gameState.currentPlayerIndex === 0) {
      this.gameState.currentPlayerIndex = 1
      return ''
    }
    const move1 = this.gameState.moves[this.gameState.players[0].id]
    const move2 = this.gameState.moves[this.gameState.players[1].id]
    let winner = ''
    if (move1 === move2) {
      winner = 'Empate'
    } else if (
      (move1 === 'piedra' && move2 === 'tijera') ||
      (move1 === 'papel' && move2 === 'piedra') ||
      (move1 === 'tijera' && move2 === 'papel')
    ) {
      winner = this.gameState.players[0].id
    } else {
      winner = this.gameState.players[1].id
    }
    const winnerName = winner === 'Empate' ? 'Empate' : this.gameState.players.find(p => p.id === winner)?.nombre || ''
    this.gameState.rounds.push({ round: this.gameState.currentRound, winner, winnerName, move1, move2 })
    this.gameState.currentRound++
    this.gameState.currentPlayerIndex = 0
    this.gameState.moves = {}
    return winnerName
  }
  formatInput(text: string): string {
    return text.split(' ').filter(w => w !== '').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
  }
  hasWinner(): boolean {
    const wins: Record<string, number> = {}
    this.gameState.players.forEach(p => wins[p.id] = 0)
    this.gameState.rounds.forEach(r => {
      if (r.winner !== 'Empate') wins[r.winner]++
    })
    return Object.values(wins).some(w => w === 3)
  }
  getWinnerName(): string {
    const wins: Record<string, number> = {}
    this.gameState.players.forEach(p => wins[p.id] = 0)
    this.gameState.rounds.forEach(r => {
      if (r.winner !== 'Empate') wins[r.winner]++
    })
    const p1 = this.gameState.players[0].id
    const p2 = this.gameState.players[1].id
    if (wins[p1] === 3) return this.gameState.players[0].nombre
    if (wins[p2] === 3) return this.gameState.players[1].nombre
    return ''
  }
  newGame(): void {
    this.gameId = 0
    this.gameState.players = []
    this.gameState.rounds = []
    this.gameState.currentRound = 1
    this.gameState.currentPlayerIndex = 0
    this.gameState.moves = {}
  }
  rematch(): void {
    this.gameState.rounds = []
    this.gameState.currentRound = 1
    this.gameState.currentPlayerIndex = 0
    this.gameState.moves = {}
  }
}
