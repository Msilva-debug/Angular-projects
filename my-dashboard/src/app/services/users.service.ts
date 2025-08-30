import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private headers = new HttpHeaders().set('x-api-key', 'reqres-free-v1');

  #state = signal<State>({
    users: [],
    loading: true,
  });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users', {
        headers: this.headers,
      })
      .subscribe((res) => {
        this.#state.set({
          users: res.data,
          loading: false,
        });
      });
  }

  public getUserById(id: string): Observable<User> {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`, {
        headers: this.headers,
      })
      .pipe(map((res) => res.data));
  }
}
