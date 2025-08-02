import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;
  constructor(private http: HttpClient) {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}/users/1`, {
        params: { email, password },
      })
      .pipe(
        tap((user) => (this.user = user)),
        tap((user) => localStorage.setItem('user', JSON.stringify(user)))
      );
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem('user');
  }
  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('user')) return of(false);

    const token = localStorage.getItem('user');
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError(() => of(false))
    );
  }
}
