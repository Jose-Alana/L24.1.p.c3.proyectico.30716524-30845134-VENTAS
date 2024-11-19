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
        for (let i = 0; i < this.ventas.length; i++) { 
        acumMonto += this.ventas[i].precio();
    }
    return acumMonto;
}
}
