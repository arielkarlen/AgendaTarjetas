import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/tarjeta';
import { CardsService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit{
  cards:any

  constructor(public cardsService: CardsService, private toastr: ToastrService){}
  


  fetchCards(){
    this.cardsService.getCards().subscribe((data) => {
      this.cards = data.data
     });
  }

  deleteCard(id:number) {
    this.cardsService.deleteCards(id).subscribe({
      next: () => {
       },
      error: (e) => {
        this.toastr.error('Hubo un error al eliminar la tarjeta', 'Error', {progressBar:true})
       },
      complete: () => {this.toastr.success(' La tarjeta ha sido eliminada con exito', 'Tarjeta Eliminada', {progressBar:true})},
    });

    this.cardsService.getCards().subscribe((data) => {
      this.cards = data.data
      });
    this.fetchCards()
  }

  ngOnInit(): void {
    this.fetchCards()
  }


  editCard(card: TarjetaCredito) {
    this.cardsService.addCardEdit(card);
  }
}
