import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-round',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent {
  @Output() winnerDetected = new EventEmitter<void>();
  moves = ['piedra', 'papel', 'tijera'];

  // Ícono grande que se muestra brevemente
  selectedMoveIcon: string = '';
  showSelectedIcon: boolean = false;

  constructor(public GamesService: GamesService) {}

  get currentRound(): number {
    return this.GamesService.gameState.currentRound;
  }

  get currentPlayerName(): string {
    return this.GamesService.gameState.players[this.GamesService.gameState.currentPlayerIndex]?.nombre || '';
  }

  playMove(move: string): void {
    // Determina el ícono a mostrar según el movimiento
    this.selectedMoveIcon = move === 'piedra' ? '✊' : move === 'papel' ? '✋' : '✌️';
    this.showSelectedIcon = true;

    // Oculta el ícono grande tras 1 segundo (ajusta a tu gusto)
    setTimeout(() => {
      this.showSelectedIcon = false;
    }, 1000);

    const winnerName = this.GamesService.playMove(move);

    // Si ya hay un ganador, emite el evento para pasar a la pantalla de resultado
    if (winnerName && this.GamesService.hasWinner()) {
      this.winnerDetected.emit();
    }
  }

  get rounds() {
    return this.GamesService.gameState.rounds;
  }

  get showPartial(): boolean {
    return this.GamesService.gameState.rounds.length > 0;
  }
}
