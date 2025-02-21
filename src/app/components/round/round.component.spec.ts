import { TestBed } from '@angular/core/testing';
import { RoundComponent } from './round.component';
import { GamesService } from '../../services/games.service';

describe('RoundComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundComponent],
      providers: [GamesService]
    }).compileComponents();
  });

  it('Se crea el componente RoundComponent', () => {
    const fixture = TestBed.createComponent(RoundComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
