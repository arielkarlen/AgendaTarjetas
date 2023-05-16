import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TarjetaCredito } from '../models/tarjeta';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private card$ = new Subject<any>();

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

  addCardEdit(card: TarjetaCredito) {
    this.card$.next(card);
  }

  getCard():Observable<TarjetaCredito> {
    return this.card$.asObservable();
  }

  editCard(id:number, card:any): Observable<any>{
    return this.http.put('http://localhost:1337/api/cards/'+id+'', card);
  }
    
}