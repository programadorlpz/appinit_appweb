import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output() playersRegistered: EventEmitter<void> = new EventEmitter<void>();
  player1: string = '';
  player2: string = '';
  errorMessage: string = '';

  constructor(private GamesService: GamesService) {}

  onInputPlayer1(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.player1 = target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
  }

  onInputPlayer2(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.player2 = target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
  }

  onBlurPlayer1(): void {
    this.player1 = this.GamesService.formatInput(this.player1);
  }

  onBlurPlayer2(): void {
    this.player2 = this.GamesService.formatInput(this.player2);
  }

  startGame(): void {
    const n1: string = this.player1.trim();
    const n2: string = this.player2.trim();
    if (!n1 || !n2 || n1 === n2) {
      this.errorMessage = 'Los campos Jugador 1 y Jugador 2 no pueden estar vacíos, ni repetidos y deben ser validos (Texto y vocales con tílde).';
      return;
    }
    this.errorMessage = '';
    this.GamesService.setPlayers(n1, n2);
    this.playersRegistered.emit();
  }
}
