/*Se desea llevar un control de las ventas que realiza una tienda.
Se tiene por cada venta: nombre del cliente, número de factura, costo y cantidad de artículos.
Se requiere de un programa que permita el registro de esta información,
conociendo al principio de la ejecución el
monto inicial en caja y el porcentaje de incremento para el costo de cada venta.

Estructuras de datos recomendadas

-Cl_tienda: montoCaja, porcIncremento
-Cl_venta: cliente, factura, costo, cnArticulos

Primeros requerimientos

-Los datos entrada vienen en un archivo (con import... ver anexo)
-Monto final en caja
-Clientes que pagaron el monto mayor
-Clientes que sólo llevaron 1 artículo*/

import Cl_tienda from "./Cl_tienda.js";
import Cl_venta from "./Cl_venta.js";
import Dt_ventas from "./Dt_ventas.js";
import Dt_tienda from "./Dt_tienda.js";

let tienda = new Cl_tienda(Dt_tienda.montoCaja, Dt_tienda.porcIncremento);

Dt_ventas.forEach((venta) =>
    tienda.agregarVenta(
    new Cl_venta(venta.cliente, venta.factura, venta.costo, venta.cnArticulos))
);
let listarVentas = (tienda,salida) => {
    salida.innerHTML = "";
    tienda.ventas.forEach((venta) => {
        salida.innerHTML += `<br>${venta.cliente} - ${venta.factura} - ${venta.costo} - ${venta.cnArticulos}`;
    });
};

let agregarVenta = (tienda) => {
    let cliente = prompt("Ingrese el nombre del cliente:");
    let factura = prompt("Ingrese el numero de factura:");
    let costo = prompt("Ingrese el costo de la venta:");
    let cnArticulos = prompt("Ingrese la cantidad de articulos:");
    tienda.agregarVenta(new Cl_venta(cliente, factura, costo, cnArticulos));
};

let eliminarVenta = (tienda) => {
    let factura = prompt("Ingrese el numero de factura a eliminar:");
    if(tienda.eliminarVenta(factura)) alert(`Se elimino la venta de factura: ${factura}`);
    else alert (`No existe la venta con factura ${factura}`);
};

let acumMonto = (tienda, salida) => {
  let acumMonto = tienda.montoFinalCaja();
  salida.innerHTML = `<br>El monto final en caja es: ${acumMonto}`;
}

let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");

salida1.innerHTML = `<br>Seleccione una opción:
<br>1 = Listar Ventas
<br>2 = Agregar Venta
<br>3 = Eliminar Venta
<br>4 = Monto final en caja`;

  opciones.onclick = () => {
    let opcion = +prompt("Seleccione su opción:");
  switch (opcion) {
    case 1:
      listarVentas(tienda, salida2);
      break;
    case 2:
      agregarVenta(tienda);
      break;
    case 3:
      eliminarVenta(tienda);
      break;
    case 4:
      acumMonto(tienda, salida2);
      break;
    }
};