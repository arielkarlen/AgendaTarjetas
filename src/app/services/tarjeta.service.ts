import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {



  constructor(private http: HttpClient) {}


  getCards():Observable<any> {
    return this.http.get("http://localhost:1337/api/cards");
  }

  deleteCards(id:number): Observable<any>{
    return this.http.delete('http://localhost:1337/api/cards/'+id+'');
  }

  createCard(card: any): Observable<any>{
    return this.http.post('http://localhost:1337/api/cards/', card);
  }

}