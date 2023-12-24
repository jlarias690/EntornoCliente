inicio = () => {
  document
    .getElementById("llamada")
    .addEventListener("click", "resultadoTabla");
};

resultadoTabla = (e) => {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", ": jsonplaceholder.typicode.com/posts", true);
  xhr.addEventListener("readystatechange", (e) => {
    e.preventDefault();
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      let tabla = document.createElement("table");
      tabla.style.border = "2px red solid";
      tabla.style.textAlign = "center";
      let titulo = document.createElement("thead");
      let columnaTitulo = document.createElement("th");
      columnaTitulo.style.border = "2px black solid";
      columnaTitulo.innerHTML = "Título";
      let columnaCuerpo = document.createElement("th");
      columnaCuerpo.innerHTML = "Cuerpo";
      columnaCuerpo.style.border = "2px black solid";
    } else {
      document.getElementById("divjson").innerHTML = "Error al cargar el json";
    }
  });
  // Configurar la función de devolución de llamada para manejar errores de red
  xhr.onerror = function () {
    document.getElementById("divjson").innerHTML = "Error de red";
  };

  // Enviar la solicitud
  xhr.send();
};
mostrarInfojson = (json) => {
  var jsonInfoDiv = document.getElementById("divjson");

  // Mostrar los datos del json en la página HTML
  jsonInfoDiv.innerHTML =
    "<h2>Nombre: " +
    json.name +
    "</h2>" +
    "<p>json: " +
    json.username +
    "</p>" +
    "<p>Correo: " +
    json.email +
    "</p>" +
    "<p>Dirección: " +
    json.address.street +
    ", " +
    json.address.suite +
    ", " +
    json.address.city +
    "</p>";
};

window.addEventListener("DOMContentLoaded", cargarjson);
