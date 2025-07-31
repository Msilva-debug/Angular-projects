import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(idHero: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${idHero}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${this.baseUrl}/heroes?q=${term}&_limit=6`)
      .pipe(catchError((error) => of([])));
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero).pipe(
      tap((newHero) => console.log(`Hero added: ${newHero.id}`)),
      catchError((error) => {
        console.error('Error adding hero:', error);
        return of(hero);
      })
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw new Error('Hero ID is required for update');
    return this.http
      .patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
      .pipe(
        tap((updatedHero) => console.log(`Hero updated: ${updatedHero.id}`)),
        catchError((error) => {
          console.error('Error updating hero:', error);
          return of(hero);
        })
      );
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/heroes/${id}`).pipe(
      tap(() => console.log(`Hero deleted: ${id}`)),
      catchError((error) => {
        console.error('Error deleting hero:', error);
        return of(false);
      }),
      map(() => true)
    );
  }
}
