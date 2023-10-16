function areaCuadrado(num) {
  return num * num;
}
console.log("Funcion normal: " + areaCuadrado(5));
let arecuadrado2 = function (num) {
  return num * num;
};
console.log("Funcion anonima: " + arecuadrado2(5));
let areaFlecha = (num) => {
  return num * num;
};

console.log("Funcion flechas: " + arecuadrado2(5));
