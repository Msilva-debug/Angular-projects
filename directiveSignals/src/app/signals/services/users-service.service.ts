import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { User, SingleUserResponse } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    const headers = new HttpHeaders().set('x-api-key', 'reqres-free-v1');

    return this.http
      .get<SingleUserResponse>(`${this.baseUrl}/${id}`, { headers })
      .pipe(
        map((response) => response.data),
        tap((response) => console.log(response))
      );
  }
}
