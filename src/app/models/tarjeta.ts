export class TarjetaCredito {
    id?: string;
    titular: string;
    numeroDeTarjeta: string;
    fechaExpiracion:string;
    cvv: number;
    fechaCreacion: Date;
    fechaActualizacion: Date


    constructor( titular: string,numeroDeTarjeta: string, cvv: number, fechaExpiracion: string)
    {
        this.titular = titular;
        this.numeroDeTarjeta = numeroDeTarjeta;
        this.fechaExpiracion = fechaExpiracion;
        this.cvv=cvv;
        this.fechaCreacion=new Date();
        this.fechaActualizacion=new Date()

    }
}