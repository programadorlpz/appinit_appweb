import { TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { GamesService } from '../services/games.service';

describe('GameComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComponent],
      providers: [GamesService]
    }).compileComponents();
  });

  it('Se crea el componente GameComponent', () => {
    const fixture = TestBed.createComponent(GameComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
