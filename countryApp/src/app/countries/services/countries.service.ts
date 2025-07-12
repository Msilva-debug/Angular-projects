import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  public apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  public searchCountryByAlphaCode(id: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${id}`)
      .pipe(catchError(() => of([])));
  }
  public searchByCapital(capital: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${capital}`)
      .pipe(catchError(() => of([])));
  }
  public searchByCountry(country: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${country}`)
      .pipe(catchError(() => of([])));
  }

  public searchByRegion(region: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(catchError(() => of([])));
  }
}
