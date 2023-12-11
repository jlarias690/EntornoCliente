let inicio = () => {
  document.getElementById("volver").addEventListener("click", volver);
};

let volver = () => {
  window.opener.document.getElementById("libros").innerHTML =
    "<h2>Pedido Realizado. Le esperamos pronto.</h2>";
  window.close();
};

window.addEventListener("DOMContentLoaded", inicio);
