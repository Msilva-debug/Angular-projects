import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Gif[] = [];
  private _tagHistory: string[] = [];
  private apikey: string = 'LCFNf5X720B5h8fArNeuwWjxzPDThcgA';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this.loadLocalStorage()
  }

  get tagHistory() {
    return [...this._tagHistory];
  }
  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    this.searchTag(this.tagHistory[0])
  }
  public searchTag(tag: string): void {
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('q', tag)
      .set('limit', '10');

    this.organizeHistory(tag);
    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((respuesta) => {
        this.gifList = respuesta.data;
      });
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);

    this.saveLocalStorage();
  }
}
