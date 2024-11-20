export default class Cl_venta {
    constructor(cliente, factura, costo, cnArticulos, porcIncremento) {
        this.cliente = cliente;
        this.factura = factura;
        this.costo = costo;
        this.cnArticulos = cnArticulos;
        this.porcIncremento = 25;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    get cliente() {
        return this._cliente;
    }
    set factura(factura) {
        this._factura = +factura;
    }
    get factura() {
        return this._factura;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    set cnArticulos(cnArticulos) {
        this._cnArticulos = +cnArticulos;
    }
    get cnArticulos() {
        return this._cnArticulos;
    }
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;
    }
    get porcIncremento(){
        return this._porcIncremento;
    }

    porcentajeIncremento() {
        return this.costo * (this.porcIncremento / 100);
    }

    precio(){
       return this.costo + this.porcentajeIncremento();
    }
}