var $inputCom;
var $inputPro;
let inicio = () => {
  $inputCom = document.getElementById("comunidad");
  document.getElementById("info").addEventListener("click", infoCom);
  $inputPro = document.getElementById("provincias");
  document.getElementById("infoPro").addEventListener("click", infoPro);
};

let infoCom = () => {
  cadena = $inputCom.value;
  if (cadena == "andalucia") {
    alert(`Andalucia, descripcion y valor`);
  } else if (cadena == "aragon") {
    alert(`Aragon, descripcion y valor`);
  } else {
    alert(`Madrid, descripcion y valor`);
  }
};

let infoPro = () => {
  var array = [];
  let selecbool;
  for (let i = 0; i < $inputPro.options.length; i++) {
    opciones = $inputPro.options[i];
    if (opciones.selected) {
      array.push(opciones.value);
      selecbool = true;
    }
  }
  alert(array);
  if (selecbool) {
    alert(`${array.join(",")},descripcion y valor`);
  }
};

window.addEventListener("DOMContentLoaded", inicio);
