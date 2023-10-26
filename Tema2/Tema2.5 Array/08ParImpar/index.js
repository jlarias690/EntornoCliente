let arr = [1, 3, 2, 5, 7, 4];
var valido = false;

let parImpar = (arr = undefined) => {
  if (arr === undefined) {
    document.write("El array no esta definido.");
  } else if (!(arr instanceof Array)) {
    document.write("El valor no es un array");
  } else if (arr.length === 0) {
    document.write("El array está vacio");
  } else {
    valido = true;
  }
  if ((valido = true)) {
    const par = arr.filter((arr) => arr % 2 === 0);
    const impar = arr.filter((arr) => arr % 2 !== 0);
    document.write(`Los impares son: ${impar} <br> Los pares son: ${par}`);
  }
};
parImpar(arr);
