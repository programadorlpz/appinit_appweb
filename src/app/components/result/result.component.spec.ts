import { TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { GamesService } from '../../services/games.service';

describe('ResultComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultComponent],
      providers: [GamesService]
    }).compileComponents();
  });

  it('Se crea el componente ResultComponent', () => {
    const fixture = TestBed.createComponent(ResultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
