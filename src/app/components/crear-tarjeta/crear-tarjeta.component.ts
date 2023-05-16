import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/tarjeta';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent {

  forms: FormGroup;

  constructor(private fb: FormBuilder) {

    this.forms=this.fb.group({

      titular: ['', Validators.required],
      numeroDeTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  crearTarjeta() {


    const Tarjeta: TarjetaCredito =  {
      titular: this.forms.value.titular,
      numeroDeTarjeta: this.forms.value.numeroDeTarjeta,
      fechaExpiracion: this.forms.value.fechaExpiracion,
      cvv: this.forms.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    
  }

}
