import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { User, AuthStatus, LoginResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private _userRegister = signal<string | ''>('');

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.cheking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());
  public userRegister = computed(() => this._userRegister());

  constructor() {}

  login = (email: string, password: string): Observable<boolean> => {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body).pipe(
      tap(({ user, token }) => {
        this._currentUser.set(user);
        this._authStatus.set(AuthStatus.authenticated);
        localStorage.setItem('token', token);
      }),
      map(() => true),
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
}
