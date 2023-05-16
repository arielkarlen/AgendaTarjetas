export class TarjetaCredito {

    data: {
        id?: string;
        titular: string;
        numeroDeTarjeta: string;
        fechaExpiracion:string;
        cvv: number;
    }

   
  


    constructor( data: any, titular: string,numeroDeTarjeta: string, cvv: number, fechaExpiracion: string, )
    {
     this.data= {
        titular,
        numeroDeTarjeta,
        fechaExpiracion,
        cvv
      }
      this.data.titular = titular;
      this.data.numeroDeTarjeta = numeroDeTarjeta;
      this.data.fechaExpiracion = fechaExpiracion;
      this.data.cvv=cvv;

    }
}