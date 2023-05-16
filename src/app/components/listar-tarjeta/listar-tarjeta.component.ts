import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit{
  cards:any

  constructor(public cardsService: CardsService){}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((data) => {
    this.cards = data.data
    console.log(this.cards)
    })
}
}
