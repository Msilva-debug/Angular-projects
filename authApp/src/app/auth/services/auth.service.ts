import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { User, AuthStatus, LoginResponse } from '../interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private routes = inject(Router);
  private _userRegister = signal<string | ''>('');

  private _currentUser = signal<User | null>(null);

  public currentUser = computed(() => this._currentUser());
  public userRegister = computed(() => this._userRegister());

  constructor() {
    this.loadInfoUser().subscribe({
      error: () => {
        localStorage.removeItem('token');
        this.routes.navigateByUrl('/auth/login');
      },
    });
  }

  setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    localStorage.setItem('token', token);
    return true;
  }
  login = (email: string, password: string): Observable<boolean> => {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body).pipe(
      map(({ user, token }) => {
        return this.setAuthentication(user, token);
      }),
      catchError(({ error }) => {
        const { message } = error;
        return throwError(() => message);
      })
    );
  };

  register = (
    name: string,
    email: string,
    password: string
  ): Observable<boolean> => {
    const url = `${this.baseUrl}/auth/register`;
    const body = { name, email, password };
    return this.http.post<LoginResponse>(url, body).pipe(
      tap(() => this._userRegister.set(email)),
      map(() => true),
      catchError(({ error }) => {
        const { message } = error;
        return throwError(() => message);
      })
    );
  };

  loadInfoUser = (): Observable<boolean> => {
    const token = localStorage.getItem('token');
    if (!token) return of(false);
    const url = `${this.baseUrl}/auth/check-token`;

    return this.http
      .get<LoginResponse>(url, {
        headers: { authorization: `Bearer ${token}` },
      })
      .pipe(
        map(({ user, token }) => {
          return this.setAuthentication(user, token);
        }),
        catchError(({ error }) => {
          const { message } = error;
          return throwError(() => message);
        })
      );
  };

  logout = () => {
    localStorage.removeItem('token');
    this.routes.navigateByUrl('/auth/login');
  };
}
