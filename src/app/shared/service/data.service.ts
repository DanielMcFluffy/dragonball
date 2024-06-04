import { Injectable, OnInit, inject } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  private http = inject(HttpClient);

  constructor() {}

  getDatas(page: number): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl + `?page=${page}&limit=8`);
  }
}
