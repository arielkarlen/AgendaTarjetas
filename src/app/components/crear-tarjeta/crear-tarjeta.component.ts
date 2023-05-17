import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  addSucces:boolean=false

  cardDataForEdit:any
  cardNumber:any

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
    
   })
 }
 displayStyle = "none";
  
 openPopup() {
   this.displayStyle = "block";
   if(this.id == undefined)
   {
    this.cardNumber=this.forms.value.numeroDeTarjeta
    
    
   } else{
    this.cardNumber=this.cardDataForEdit.attributes.numeroDeTarjeta
   
    
    }
     
   
 }
 closePopup() {
   this.displayStyle = "none";
 }  
  constructor(private fb: FormBuilder, public cardsService: CardsService, private toastr: ToastrService) {

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

    setInterval(()=>window.location.reload(), 3000)
    

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

    this.cardsService.createCard(card).subscribe({
      next: () => {
       },
      error: (e) => {
        this.toastr.error('Error', 'No se pudo agregar la tarjeta')
       },
      complete: () => {this.addSucces=true},
    })
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
      this.cardsService.editCard(id, card).subscribe({
        next: () => {
         },
        error: (e) => {
          this.toastr.error('Error', 'No se pudo editar la tarjeta', {progressBar:true})
         },
        complete: () => {this.toastr.success('Por favor espere... ', 'Tarjeta editada con exito', {progressBar:true})},
      })
  }

}
