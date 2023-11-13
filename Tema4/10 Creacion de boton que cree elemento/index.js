//Creamos funcion flecha que al llamarla esta creando un objeto mas de la lista.
let agrega = () => {
  let lista = document.createElement("li");
  lista.innerHTML = "linea";
  document.getElementById("lista").appendChild(lista);
};

//Creo el boton
boton = document.createElement("button");
boton.innerHTML = "insertar";
/*
boton2 = document.createElement("input");
boton2.type = "button";
boton2.value = "pulsa";*/

document.getElementsByTagName("body")[0].appendChild(boton);

//Creamos el boton que enlazamos con la funcion flecha.
boton.addEventListener("click", agrega);
