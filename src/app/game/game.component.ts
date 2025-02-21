import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../components/register/register.component';
import { RoundComponent } from '../components/round/round.component';
import { ResultComponent } from '../components/result/result.component';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RegisterComponent, RoundComponent, ResultComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  view: 'register' | 'round' | 'result' = 'register';

  constructor(public GamesService: GamesService) {}

  onPlayersRegistered() {
    this.view = 'round';
  }

  onShowResult() {
    this.view = 'result';
  }

  onNewGame() {
    this.GamesService.newGame();
    this.view = 'register';
  }

  onRematch() {
    this.GamesService.rematch();
    this.view = 'round';
  }
}
