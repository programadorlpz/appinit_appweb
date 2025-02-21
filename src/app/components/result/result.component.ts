import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Output() rematch = new EventEmitter<void>();
  @Output() newGame = new EventEmitter<void>();

  constructor(public GamesService: GamesService) {}

  get winnerName(): string {
    return this.GamesService.getWinnerName();
  }

  get lastRound() {
    const rounds = this.GamesService.gameState.rounds;
    return rounds.length > 0 ? rounds[rounds.length - 1] : null;
  }

  onRematch(): void {
    this.rematch.emit();
  }

  onNewGame(): void {
    this.newGame.emit();
  }
}
