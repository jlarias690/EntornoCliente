const a = [2, 3, 4, 5, 0];
var x = 0;

//Declaramos la funcion flecha que realiza la media.
let media = () => {
  formMedia = x / a.length;
  console.log(formMedia);
};

// Recorremos el array con el foreach
a.forEach((y) => {
  x = x + y;
  console.log("Recorrido por foreach = " + x);
});

//Llamamos la media.
media();

//Realizamos un mapa para que nos devuelva otro array
const b = a.map((triple) => {
  return triple * 3;
});
console.log("Nuevo array con el triple = " + b);
