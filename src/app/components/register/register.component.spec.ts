import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { GamesService } from '../../services/games.service';

describe('RegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [GamesService]
    }).compileComponents();
  });

  it('Se crea el componente RegisterComponent', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
