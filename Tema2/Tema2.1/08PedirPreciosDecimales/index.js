let precioUnitario = prompt("Precio del articulo");
let catidadArticulos = prompt("Catidad de produtctos que quiere comprar.");

let total = precioUnitario * catidadArticulos;
//
document.write(Number(total.toFixed(2)));
