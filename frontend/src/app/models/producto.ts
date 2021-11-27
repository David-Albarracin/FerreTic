export class Producto {
    _id?: number;
    codigoBarras: string;
    nombre: string;
    descripcion: string;
    categoria: string;
    persona: string;
    precioVenta: number;
    stockMin:number;

    constructor(codigoBarras:string, nombre: string,descripcion: string, categoria: string, persona: string, precioVenta: number, stockMin:number
        ){
        this.codigoBarras = codigoBarras;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.persona = persona;
        this.precioVenta = precioVenta;
        this.stockMin = stockMin;

    }
}