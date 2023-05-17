import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearTarjetaComponent } from './components/crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './components/listar-tarjeta/listar-tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTarjetaComponent,
    ListarTarjetaComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
