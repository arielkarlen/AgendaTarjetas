import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }


  getCards(): Observable<any> {

   
    
    const URL = 'http://localhost:1337/api/cards'
    return this.http.get(URL)
  }
}