import { Component } from '@angular/core';
import { CardsService } from './services/tarjeta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  cardList: any[]=[]

constructor(private  _apicards: CardsService){}

ngOnInit(): void {

  
  // this.listarTarjetas()
  
}

  // listarTarjetas(){
  //   this._apicards.getCards().subscribe(result=>{
  //     this.cardList=result
  //   })
  //   console.log(this.cardList)
  // }


}
