let inicio = (e) => {
  e.preventDefault();

  document.getElementById("b1").addEventListener("click", validar);
  $usuario = document.getElementById("usuario").value;
  $clave = document.getElementById("clave").value;
  $codigoPostal = document.getElementById("cpostal").value;
  $provincia = document.getElementById("provincia").value;
  alert("10");
};

let validar = (e) => {
  e.preventDefault();
  bol = false;
  mensaje = [];
  if ($usuario.length == 0) {
    mensaje.push("El usuario no puede estar vacio");
    bol = true;
  }
  if ($clave.length == 0) {
    mensaje.push("La clave no puede estar vacio");
    bol = true;
  }
  if ($provincia.length == 0) {
    mensaje.push("El provincia no puede estar vacio");
    bol = true;
  }

  if ($clave.length < 8) {
    mensaje.push("La clave tiene que tener al menos 8 caracteres");
    bol = true;
  }

  if ($codigoPostal.length <= 4) {
    mensaje.push("El codigo postal tiene que tener minimo 5 digitos.");
    bol = true;
  } else if (isNaN($codigoPostal)) {
    mensaje.push("El codigo postal tiene que ser un numero.");
    bol = true;
  }
  if ((bol = true)) {
    let elemento = document.createElement("p");
    nodo = document.createTextNode(mensaje);
    elemento.appendChild(nodo);
    document.getElementById("mensajeError").appendChild(elemento);
  } else {
    window.location.href = "formulario.html";
  }
};

window.addEventListener("DOMContentLoaded", inicio);

/*
Evitar que un boton recarge la pagina

let validarApellido = (e) => {
  e.preventDefault();
  if ($inputApellidos.length == 0) {
    mensaje = "El apellido no puede estar vacio";
  }
};*/
