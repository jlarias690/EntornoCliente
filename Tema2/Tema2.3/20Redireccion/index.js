document.write("Nos vamos!");

window.setTimeout(abrirGoogle, 5000);

function abrirGoogle() {
  let nuevaVentana = (window.location.href = "https://www.google.com/?hl=es");
}
