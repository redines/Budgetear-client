import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  baseUrl: string = 'http://localhost:3000/api/budgets';
  constructor(private httpClient: HttpClient) {}
  public addProd(obj) {
    console.log(obj);
    return this.httpClient.post(this.baseUrl, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
