var fecha = new Date();
var dia = fecha.getDay();
var mes = fecha.getMonth();
var anyo = fecha.getFullYear();
var array = [
  "Señor de los Anillos",
  "Humano demasiado Humano",
  "Amanecer rojo",
  "Pilares de la Tierra",
  "Percy Jackson ",
];
let inicio = () => {
  var fech = document.getElementById("fecha");
  fechaElementCompleta = document.createElement("p");
  fechaCompletaNodo = document.createTextNode(`Fecha: ${dia}/${mes}/${anyo}`);
  fechaElementCompleta.appendChild(fechaCompletaNodo);
  fech.appendChild(fechaElementCompleta);
  document.getElementById("comprar").disabled = true;
  document.getElementById("ofertas").addEventListener("click", oferta);
  document.getElementById("cargar").addEventListener("click", cargar);
  document.getElementById("comprar").addEventListener("click", comprar);
};

let oferta = (e) => {
  e.preventDefault();
  document.getElementById("libros").innerHTML = "<strong>Esperando...</strong>";
  setTimeout(libroAlea, 5000);
};
let libroAlea = () => {
  let x = (ale = parseInt(Math.random() * 5));

  if (x != 0) {
    document.getElementById(
      "libros"
    ).innerHTML = `<h2>OFERTA DEL DÍA:${array[x]}</h2>`;
  } else {
    document.getElementById(
      "libros"
    ).innerHTML = `<h2>OFERTÓN DEL DÍA:${array[x]}</h2>`;
  }
};
let cargar = (e) => {
  e.preventDefault();

  let divLibro = document.getElementById("libros");
  let tabla = document.createElement("table");
  let x = 0;
  divLibro.appendChild(tabla);
  document.getElementById("comprar").disabled = false;
  array.forEach((libro) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", libro);

    let tdNombre = document.createElement("td");
    tdNombre.innerHTML = libro;
    tr.appendChild(tdNombre);
    // Creamos el <td> para inputTextbox
    let tdText = document.createElement("td");
    let inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", libro + "text");
    inputText.setAttribute("value", "0");
    // inputText.setAttribute("name", "marcar");

    tdText.appendChild(inputText);
    tr.appendChild(tdText);

    tabla.appendChild(tr);
  });
};
let comprar = (e) => {
  e.preventDefault();
  var $catidadLibro = 0;
  $input = document.getElementsByTagName("input");
  // $catidadLibro;
  for (i = 0; i < $input.length; i++) {
    $catidadLibro += document.getElementsByTagName("input")[i].value;
  }
  if ($catidadLibro != 0) {
    window.open("resumen.html", "NuevaVentana", 'width=500,height=300"');
  } else {
    alert("No hay ningún libro que comprar.");
  }
};
window.addEventListener("DOMContentLoaded", inicio);
