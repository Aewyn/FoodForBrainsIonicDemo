import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  
  apiUrl:string = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getData(type:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${type}`);
  }
}
