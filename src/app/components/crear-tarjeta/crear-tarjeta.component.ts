import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/tarjeta';
import { CardsService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  forms: FormGroup;

  title ='Añadir '
id = undefined

  cardDataForEdit:any

 ngOnInit(): void {
   this.cardsService.getCard().subscribe(res=>{

    this.cardDataForEdit=res;
    this.title="Editar "
    this.id=this.cardDataForEdit.id
    this.forms.patchValue({
      cvv: this.cardDataForEdit.attributes.cvv,
      fechaExpiracion: this.cardDataForEdit.attributes.fechaExpiracion,
      numeroDeTarjeta: this.cardDataForEdit.attributes.numeroDeTarjeta,
      titular: this.cardDataForEdit.attributes.titular
    })
    console.log(this.id);
   })
 }
  
  constructor(private fb: FormBuilder, public cardsService: CardsService) {

    this.forms=this.fb.group({

      titular: ['', Validators.required],
      numeroDeTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }


  onSubmit() {
    if(this.id == undefined)
    {
      this.crearTarjeta()
     
    } else{
      this.editarTarjeta(this.id)
      
    }
    window.location.reload();

  }

  crearTarjeta() {
    const card: TarjetaCredito =  {
      data: {
        titular: this.forms.value.titular,
        numeroDeTarjeta: this.forms.value.numeroDeTarjeta,
        fechaExpiracion: this.forms.value.fechaExpiracion,
        cvv: this.forms.value.cvv,
      }
      
     }

    this.cardsService.createCard(card).subscribe()
  }

  editarTarjeta(id:number) {
    const card: TarjetaCredito =  {
      data: {
        titular: this.forms.value.titular,
        numeroDeTarjeta: this.forms.value.numeroDeTarjeta,
        fechaExpiracion: this.forms.value.fechaExpiracion,
        cvv: this.forms.value.cvv,
      }
      
     }
      this.cardsService.editCard(id, card).subscribe()
  }

}
