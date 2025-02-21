import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute, // Simulamos ActivatedRoute
          useValue: {
            snapshot: {
              firstChild: { routeConfig: { path: '' } } // Ruta vacía simulada
            }
          }
        },
        {
          provide: Router, // ✅ Proveer Router simulado si se usa en app.component.ts
          useValue: {
            events: {
              subscribe: () => {} // Simulación básica de eventos del Router
            },
            url: '' // Ruta vacía simulada
          }
        }
      ]
    }).compileComponents();
  });

  it('Crea la aplicacion', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
