import Cl_venta from "./Cl_venta.js";
export default class Cl_tienda {
    constructor(montoCaja, porcIncremento) {
        this.montoCaja = montoCaja;
        this.porcIncremento = porcIncremento;
        this.ventas = [];
    }
    set montoCaja(montoCaja) {
        this._montoCaja = +montoCaja;
    }
    get montoCaja() {
        return this._montoCaja;
    }
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;
    }

    get porcIncremento() {
        return this._porcIncremento;
    }

    agregarVenta(venta) {
        this.ventas.push(venta);
    }

    modificarventa(nuevocliente, factura, nuevocosto, nuevacantidad){
        let venta = this.ventas.filter((venta) => venta.factura == factura)[0];
        new Cl_venta(nuevocliente, factura, nuevocosto, nuevacantidad,);
        let cliente = nuevocliente;
        let costo = nuevocosto;
        let cnArticulos = nuevacantidad;
        
        venta.cliente = nuevocliente;
        venta.costo = nuevocosto;
        venta.cnArticulos = nuevacantidad;
        this.agregarVenta();
        this.eliminarVenta();
    }
    
    
    eliminarVenta(factura){
        factura = +factura;
        let indexVenta = -1;
        for (let i = 0; i < this.ventas.length; i++)
        if(this.ventas[i].factura == factura) indexVenta = i;
        if(indexVenta !== -1) this.ventas.splice(indexVenta, 1);
        return indexVenta !== -1;
    }
    montoFinalCaja(){
        let acumMonto = 0.0;
        for (let i = 0; i < this.ventas.length; i++)
        acumMonto += this.ventas[i].precio();
    return acumMonto + this.montoCaja;
    }
    mayorMonto(){
        let mayorMonto = this.ventas[0].precio();
        for (let i = 1; i < this.ventas.length; i++)
        if(this.ventas[i].precio() > mayorMonto) 
            mayorMonto = this.ventas[i].precio();
        return mayorMonto;
    }
    clientesMayorMonto(){
        let mayorMonto = this.mayorMonto();
        return this.ventas.filter((venta) => venta.precio() == mayorMonto);
    }
    unArticulo(){
        let unArticulo = this.ventas[0].cnArticulos;
        for (let i = 1; i < this.ventas.length; i++)
        if(this.ventas[i].cnArticulos < unArticulo) 
            unArticulo = this.ventas[i].cnArticulos;
        return unArticulo;
    }
    clientesUnArticulo(){
        let unArticulo = this.unArticulo();
        return this.ventas.filter((venta) => venta.cnArticulos == unArticulo);
    }
}

