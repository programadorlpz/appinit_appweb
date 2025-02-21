import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class ApiService {
  url = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) {}
  iniciarBatalla(nombre1: string, nombre2: string): Observable<any> {
    return this.http.post(this.url + '/iniciar-batalla', { nombre1, nombre2 })
      .pipe(catchError(err => throwError(() => err)))
  }
  movimiento(gameId: number, jugador: string, movimiento: string): Observable<any> {
    return this.http.post(this.url + '/movimiento/' + gameId, { jugador, movimiento })
      .pipe(catchError(err => throwError(() => err)))
  }
}
